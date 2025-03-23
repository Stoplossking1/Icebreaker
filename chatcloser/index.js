const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const twilio = require("twilio");
const axios = require("axios");
const supabase = require("./supabase"); // <- your Supabase client
const { v4: uuidv4 } = require("uuid"); // install with `npm install uuid`
const { MessagingResponse } = require("twilio").twiml;

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post("/nouveau-prospect", async (req, res) => {
  const { nom, telephone, nom_agent } = req.body;

  const message = `Bonjour ${nom} 👋 Ici Alex de l’équipe immobilière de ${nom_agent}. Merci pour votre intérêt! Est-ce que vous cherchez à acheter ou vendre une propriété?`;

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: telephone,
    });

    res.status(200).json({ success: true, message: "SMS envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l’envoi du SMS :", error);
    res.status(500).json({ success: false, error: "Échec de l’envoi du SMS" });
  }
});

app.post("/sms-reply", async (req, res) => {
  const incomingMsg = req.body.Body;
  const fromNumber = req.body.From;

  console.log(`📨 Message from ${fromNumber}: ${incomingMsg}`);

  // 1. Try to fetch the lead by phone
  let { data: lead, error: leadError } = await supabase
    .from("leads")
    .select("*")
    .eq("phone", fromNumber)
    .single();

  // 2. If lead not found, insert one
  if (!lead) {
    const { data: newLead, error: insertError } = await supabase
      .from("leads")
      .insert([
        {
          id: uuidv4(),
          phone: fromNumber,
          agent_name: "Tom", // use dynamic later
          source: null,
          property: null,
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("❌ Erreur d'insertion du lead:", insertError);
      return res.status(500).send("Erreur lors de l'ajout du lead.");
    }

    lead = newLead; // now lead is always defined
  }

  // 2. Save incoming message
  await supabase.from("messages").insert([
    {
      id: uuidv4(),
      lead_id: lead.id,
      from: "lead",
      body: incomingMsg,
    },
  ]);

  // 3. Build context
  let contextInfo = "";
  if (lead.source) contextInfo += `Le contact provient de ${lead.source}. `;
  if (lead.property) contextInfo += `Il s'intéresse à : ${lead.property}.`;

  // 4. Get recent messages
  const { data: messages } = await supabase
    .from("messages")
    .select("from, body")
    .eq("lead_id", lead.id)
    .order("timestamp", { ascending: true })
    .limit(10);

  const formattedMessages = [{ role: "system", content: SYSTEM_PROMPT }];
  if (contextInfo) {
    formattedMessages.push({ role: "user", content: contextInfo });
  }
  messages.forEach((msg) => {
    formattedMessages.push({
      role: msg.from === "lead" ? "user" : "assistant",
      content: msg.body,
    });
  });

  // 5. GPT reply
  const gptRes = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: formattedMessages,
      max_tokens: 200,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  var aiReply = gptRes.data.choices[0].message.content;
  aiReply = aiReply.slice(0, 160);
  console.log(`🤖 GPT: ${aiReply}`);

  // 6. Save GPT reply
  await supabase.from("messages").insert([
    {
      id: uuidv4(),
      lead_id: lead.id,
      from: "ai",
      body: aiReply,
    },
  ]);

  // 2. Send reply via Twilio
  const twiml = new MessagingResponse();
  twiml.message(aiReply);
  res.type("text/xml").send(twiml.toString());

  // 7. Check if lead has 3+ messages
  const { data: leadMsgs } = await supabase
    .from("messages")
    .select("from, body")
    .eq("lead_id", lead.id)
    .order("timestamp", { ascending: true });

  const userMessages = leadMsgs.filter((msg) => msg.from === "lead");

  if (userMessages.length >= 3 && !lead.summary) {
    console.log("📋 Generating lead summary...");

    const summaryPrompt = `
Tu es un assistant immobilier intelligent. Voici l’historique complet de la conversation avec un client.

Ta tâche : résumer en 2-3 phrases :
- Le type de projet (achat, vente, investisseur)
- Le budget (s'il est mentionné)
- La localisation souhaitée
- Le délai estimé

Reste neutre, professionnel et concis.

---

Historique de conversation :

${leadMsgs
  .map((m) => `${m.from === "lead" ? "Client" : "AI"}: ${m.body}`)
  .join("\n")}
`;

    const summaryRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "Tu es un assistant immobilier qui résume des leads pour des courtiers.",
          },
          { role: "user", content: summaryPrompt },
        ],
        max_tokens: 200,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summaryText = summaryRes.data.choices[0].message.content;
    console.log("✅ Summary:", summaryText);

    await supabase
      .from("leads")
      .update({ summary: summaryText })
      .eq("id", lead.id);
  }
});

const SYSTEM_PROMPT = `
Tu es Alex, un assistant SMS intelligent conçu pour aider les courtiers immobiliers à Montréal à engager une première conversation avec un client potentiel.

<Ton rôle>
Tu écris des messages SMS personnalisés, chaleureux et professionnels qui suscitent l’intérêt, instaurent la confiance, et encouragent le client à continuer la conversation. Tu représentes l’agent immobilier de façon humaine, discrète et efficace.

<Contexte>
Le client a rempli un formulaire ou montré de l’intérêt pour un bien immobilier. Il peut s’agir d’un acheteur, d’un vendeur ou d’un investisseur. Tu ne sais pas encore. Tu veux comprendre son projet sans être intrusif.

<Instructions>
1. Pose des questions simples : est-ce un projet d’achat, de vente ou d’investissement ?
2. Demande son budget, sa localisation idéale, et son délai.
3. Garde un ton poli, rassurant et humain.
4. Termine chaque message avec une question ouverte.

<Contraintes>
- Ne fais pas de vente directe
- Pas de supposition sur l’urgence
- Pas plus d’un emoji par message (et seulement si ça aide)
- Reste sous 150 caractères si possible (SMS)

<Objectif>
Ton objectif est de qualifier le contact et de transmettre un résumé clair à l’agent si le client est sérieux.
`;

app.listen(port, () => {
  console.log(`Serveur ChatCloser AI actif sur http://localhost:${port}`);
});
