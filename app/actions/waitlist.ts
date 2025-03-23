"use server"

import { createClient } from "@supabase/supabase-js"
import { z } from "zod"

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Define the schema for waitlist entries
const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse courriel valide" }),
  companySize: z.string().min(1, { message: "Veuillez sélectionner une taille d'entreprise" }),
  marketingConsent: z.boolean().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export async function joinWaitlist(formData: WaitlistFormData) {
  try {
    // Validate the form data
    const validatedData = waitlistSchema.parse(formData)

    // Insert the data into the waitlist table
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          company_size: validatedData.companySize,
          marketing_consent: validatedData.marketingConsent || false,
          created_at: new Date().toISOString(),
          region: "Quebec", // Add Quebec region marker
          language: "fr", // Add French language marker
        },
      ])
      .select()

    if (error) {
      console.error("Error inserting waitlist entry:", error)

      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message: "Cette adresse courriel est déjà sur notre liste d'attente.",
        }
      }

      return {
        success: false,
        message: "Échec de l'inscription à la liste d'attente. Veuillez réessayer plus tard.",
      }
    }

    // Email notification functionality has been removed for immediate shipping
    // Will be implemented in a future phase

    return {
      success: true,
      message: "Vous avez rejoint notre liste d'attente avec succès! Nous vous contacterons bientôt.",
    }
  } catch (error) {
    console.error("Error in joinWaitlist:", error)

    if (error instanceof z.ZodError) {
      // Return the first validation error
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    }
  }
}

