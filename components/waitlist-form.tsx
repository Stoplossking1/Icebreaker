"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { joinWaitlist, type WaitlistFormData } from "@/app/actions/waitlist"
import { Loader2 } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    // Basic validation
    if (!name || !email || !companySize) {
      setFormError("Veuillez remplir tous les champs obligatoires")
      return
    }

    setIsSubmitting(true)

    try {
      const formData: WaitlistFormData = {
        name,
        email,
        companySize,
        marketingConsent,
      }

      const result = await joinWaitlist(formData)

      if (result.success) {
        toast({
          title: "Succès!",
          description: "Vous avez été ajouté à notre liste d'attente. Nous vous contacterons bientôt.",
        })

        // Reset form on success
        setEmail("")
        setName("")
        setCompanySize("")
        setMarketingConsent(false)
      } else {
        setFormError(
          result.message === "This email is already on our waitlist."
            ? "Cette adresse courriel est déjà sur notre liste d'attente."
            : "Une erreur s'est produite. Veuillez réessayer plus tard.",
        )
        toast({
          title: "Erreur",
          description: formError,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("Une erreur inattendue s'est produite. Veuillez réessayer.")
      toast({
        title: "Une erreur s'est produite",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-primary-foreground">
          Nom complet
        </Label>
        <Input
          id="name"
          placeholder="Jean Tremblay"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-primary-foreground text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-primary-foreground">
          Adresse courriel
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="vous@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-primary-foreground text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company-size" className="text-primary-foreground">
          Taille de l'entreprise
        </Label>
        <Select value={companySize} onValueChange={setCompanySize} required>
          <SelectTrigger id="company-size" className="bg-primary-foreground text-foreground">
            <SelectValue placeholder="Sélectionnez la taille de l'entreprise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="solo">Courtier individuel</SelectItem>
            <SelectItem value="small">Petite équipe (2-5 courtiers)</SelectItem>
            <SelectItem value="medium">Équipe moyenne (6-20 courtiers)</SelectItem>
            <SelectItem value="large">Grande équipe (21-50 courtiers)</SelectItem>
            <SelectItem value="enterprise">Agence (50+ courtiers)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="marketing"
          checked={marketingConsent}
          onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
        />
        <Label htmlFor="marketing" className="text-sm text-primary-foreground font-normal">
          J'accepte de recevoir des communications marketing concernant les mises à jour et promotions
        </Label>
      </div>

      {formError && <div className="text-sm text-red-300 bg-red-900/20 p-2 rounded">{formError}</div>}

      <Button
        type="submit"
        className="w-full bg-background text-primary hover:bg-background/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Soumission en cours...
          </>
        ) : (
          "Rejoindre la liste d'attente"
        )}
      </Button>

      <p className="text-xs text-center text-primary-foreground/80">
        En rejoignant la liste d'attente, vous acceptez nos Conditions d'utilisation et notre Politique de
        confidentialité.
      </p>

      <Toaster />
    </form>
  )
}

