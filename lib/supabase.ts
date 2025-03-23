import { createClient } from "@supabase/supabase-js"

// These would be set in your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Lead = {
  id: string
  phone: string
  agent_name: string
  created_at: string
  status: "hot" | "warm" | "cold"
  summary: string
}

export type Message = {
  id: string
  lead_id: string
  from: "lead" | "ai"
  body: string
  timestamp: string
}

export async function getLeads() {
  const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching leads:", error)
    return []
  }

  return data as Lead[]
}

export async function getLead(id: string) {
  const { data, error } = await supabase.from("leads").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching lead:", error)
    return null
  }

  return data as Lead
}

export async function getMessages(leadId: string) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("lead_id", leadId)
    .order("timestamp", { ascending: true })

  if (error) {
    console.error("Error fetching messages:", error)
    return []
  }

  return data as Message[]
}

export async function createLead(lead: Omit<Lead, "id" | "created_at">) {
  const { data, error } = await supabase.from("leads").insert([lead]).select()

  if (error) {
    console.error("Error creating lead:", error)
    return null
  }

  return data[0] as Lead
}

export async function createMessage(message: Omit<Message, "id" | "timestamp">) {
  const { data, error } = await supabase.from("messages").insert([message]).select()

  if (error) {
    console.error("Error creating message:", error)
    return null
  }

  return data[0] as Message
}

