import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageSquare, Phone, BarChart, Bot, Shield } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { LandingNav } from "@/components/landing-nav"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNav />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Prospection Immobilière Automatisée par IA
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Convertissez plus de prospects avec des conversations textuelles personnalisées et automatisées qui
                  semblent humaines. Notre assistant IA gère la prospection initiale pour que vous puissiez vous
                  concentrer sur la conclusion des transactions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#waitlist">
                  <Button size="lg" className="px-8">
                    Rejoindre la liste d'attente
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Voir la démo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background p-6">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Assistant IA</h3>
                        <p className="text-sm text-muted-foreground">À l'instant</p>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4 overflow-hidden">
                      <div className="bg-muted p-4 rounded-lg max-w-[80%]">
                        <p className="text-sm">
                          Bonjour! Je suis Sophie de Immobilier Montréal. J'ai remarqué que vous cherchiez des
                          propriétés dans le Plateau Mont-Royal. Seriez-vous intéressé(e) à voir nos nouvelles
                          inscriptions?
                        </p>
                      </div>
                      <div className="bg-primary text-primary-foreground p-4 rounded-lg max-w-[80%] ml-auto">
                        <p className="text-sm">Oui, je suis intéressé(e). Qu'avez-vous disponible?</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg max-w-[80%]">
                        <p className="text-sm">
                          Excellent! Nous avons plusieurs propriétés qui viennent d'arriver sur le marché. Il y a un
                          magnifique condo de 2 chambres avec vue sur le parc Lafontaine. Souhaitez-vous planifier une
                          visite?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fonctionnalités qui génèrent des résultats
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre plateforme propulsée par l'IA vous aide à engager efficacement les prospects et à convertir plus
                de clients potentiels.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conversations naturelles</CardTitle>
                <CardDescription>
                  Notre IA engage les prospects avec des conversations naturelles et personnalisées qui semblent
                  humaines.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Intégration SMS</CardTitle>
                <CardDescription>
                  Connectez-vous avec les prospects via SMS, le canal avec les taux d'ouverture et de réponse les plus
                  élevés.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Analytique de performance</CardTitle>
                <CardDescription>
                  Suivez l'engagement, les taux de réponse et les métriques de conversion pour optimiser votre
                  prospection.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Qualification des prospects par IA</CardTitle>
                <CardDescription>
                  Qualifiez automatiquement les prospects en fonction des données de conversation et priorisez les
                  clients potentiels chauds.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conforme aux réglementations</CardTitle>
                <CardDescription>
                  Conçu en tenant compte des réglementations immobilières québécoises et des normes de messagerie texte.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Intégration facile</CardTitle>
                <CardDescription>
                  S'intègre parfaitement à vos systèmes CRM existants et à vos sources de prospects.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comment ça fonctionne</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre plateforme rend l'engagement des prospects simple, efficace et évolutif.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Connectez vos prospects</h3>
              <p className="text-muted-foreground">
                Importez vos prospects de n'importe quelle source ou système CRM dans notre plateforme.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">L'IA initie le contact</h3>
              <p className="text-muted-foreground">
                Notre assistant IA contacte les prospects avec des messages personnalisés.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Vous concluez les transactions</h3>
              <p className="text-muted-foreground">
                Concentrez-vous sur les prospects qualifiés qui sont prêts à avancer avec vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ce que disent les courtiers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Écoutez les professionnels de l'immobilier qui ont transformé leur conversion de prospects avec notre
                plateforme.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">JT</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Jean Tremblay</h3>
                      <p className="text-sm text-muted-foreground">Immobilier Montréal</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Cette plateforme a complètement changé ma façon de gérer les prospects. Je convertis 3 fois plus de
                    clients potentiels avec moitié moins d'effort."
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">SL</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Sophie Lavoie</h3>
                      <p className="text-sm text-muted-foreground">Groupe Immobilier Québec</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "L'assistant IA est tellement naturel que mes clients sont surpris quand ils apprennent qu'ils
                    parlaient initialement à une IA. Ça a changé la donne."
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">PG</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Pierre Gagnon</h3>
                      <p className="text-sm text-muted-foreground">Immobilier Métropolitain</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "J'étais sceptique au début, mais les résultats parlent d'eux-mêmes. Mon équipe se concentre
                    maintenant sur la conclusion des ventes plutôt que sur la recherche de prospects."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tarification simple et transparente
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choisissez le forfait qui convient le mieux à votre entreprise.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Débutant</CardTitle>
                <CardDescription>Parfait pour les courtiers individuels</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">99$</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Jusqu'à 100 prospects par mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Conversations propulsées par IA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Analytique de base</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Support par courriel</span>
                  </li>
                </ul>
                <Link href="#waitlist">
                  <Button className="w-full mt-6">Rejoindre la liste d'attente</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="py-1 px-3 bg-primary text-primary-foreground text-xs font-medium rounded-full w-fit mx-auto mb-2">
                  PLUS POPULAIRE
                </div>
                <CardTitle>Professionnel</CardTitle>
                <CardDescription>Idéal pour les équipes en croissance</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">249$</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Jusqu'à 500 prospects par mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Conversations IA avancées</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Analytique et rapports détaillés</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Intégration CRM</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Link href="#waitlist">
                  <Button className="w-full mt-6">Rejoindre la liste d'attente</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Entreprise</CardTitle>
                <CardDescription>Pour les grandes agences et équipes</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Sur mesure</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Prospects illimités</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Formation IA personnalisée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Intégrations avancées</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestionnaire de compte dédié</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Support premium 24/7</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Contacter les ventes</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Foire aux questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tout ce que vous devez savoir sur notre plateforme de prospection IA.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Comment fonctionne l'assistant IA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Notre assistant IA utilise le traitement avancé du langage naturel pour engager les prospects via SMS.
                  Il peut comprendre le contexte, répondre aux questions et qualifier les prospects en fonction de leurs
                  réponses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Les prospects sauront-ils qu'ils parlent à une IA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  L'assistant IA se présente comme travaillant avec votre agence immobilière. Les conversations sont si
                  naturelles que de nombreux prospects ne réalisent pas qu'ils parlent initialement à un assistant IA.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comment la plateforme gère-t-elle le transfert des prospects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorsqu'un prospect est qualifié et prêt à avancer, la plateforme vous alerte et fournit un transfert
                  transparent. Vous pouvez consulter l'historique complet de la conversation avant de prendre le relais.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Est-ce conforme aux réglementations immobilières québécoises?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, notre plateforme est conçue en tenant compte de la conformité. Elle respecte les réglementations
                  de messagerie texte et les normes de l'industrie immobilière québécoise. L'IA est formée pour éviter
                  de faire des promesses ou des affirmations qui pourraient violer les réglementations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Puis-je personnaliser les réponses de l'IA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolument. Vous pouvez personnaliser le ton, les messages et les modèles de réponse de l'IA pour
                  correspondre à la voix de votre marque et à votre approche commerciale. Plus vous l'utilisez, plus
                  elle apprend votre style préféré.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Avec quels systèmes CRM vous intégrez-vous?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous nous intégrons avec la plupart des CRM immobiliers populaires, y compris Centris, DuProprio, et
                  plus encore. Nous offrons également une API pour des intégrations personnalisées.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Rejoindre la liste d'attente
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Soyez parmi les premiers à expérimenter notre plateforme de prospection propulsée par l'IA. Places
                limitées pour notre programme bêta.
              </p>
            </div>
            <div className="w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

