"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Users, MessageSquare, Settings, ClipboardList } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Realtor AI Outreach</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center transition-colors hover:text-primary",
            pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Home className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/leads"
          className={cn(
            "flex items-center transition-colors hover:text-primary",
            pathname?.startsWith("/dashboard/leads") ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Users className="mr-2 h-4 w-4" />
          <span>Leads</span>
        </Link>
        <Link
          href="/dashboard/conversations"
          className={cn(
            "flex items-center transition-colors hover:text-primary",
            pathname?.startsWith("/dashboard/conversations") ? "text-primary" : "text-muted-foreground",
          )}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Conversations</span>
        </Link>
        <Link
          href="/dashboard/admin/waitlist"
          className={cn(
            "flex items-center transition-colors hover:text-primary",
            pathname?.startsWith("/dashboard/admin/waitlist") ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ClipboardList className="mr-2 h-4 w-4" />
          <span>Waitlist</span>
        </Link>
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center transition-colors hover:text-primary",
            pathname?.startsWith("/dashboard/settings") ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}

