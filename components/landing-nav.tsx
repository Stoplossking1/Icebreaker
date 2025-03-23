"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function LandingNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">IA Immobilier Québec</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Fonctionnalités
            </Link>
            <Link href="/#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tarification
            </Link>
            <Link href="/#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Comment ça marche
            </Link>
            <Link href="/#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/dashboard" className="hidden md:block">
            <Button variant="outline">Tableau de bord</Button>
          </Link>
          <Link href="#waitlist" className="hidden md:block">
            <Button>Liste d'attente</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/#features"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Tarification
                </Link>
                <Link
                  href="/#how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Comment ça marche
                </Link>
                <Link
                  href="/#faq"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Tableau de bord
                  </Button>
                </Link>
                <Link href="#waitlist" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Liste d'attente</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

