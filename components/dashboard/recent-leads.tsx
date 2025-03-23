import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function RecentLeads() {
  const leads = [
    {
      id: "1",
      phone: "+1 (555) 123-4567",
      agent_name: "Sarah Johnson",
      status: "hot",
      created_at: "2024-03-22T10:30:00Z",
      summary: "Interested in luxury properties in downtown area",
    },
    {
      id: "2",
      phone: "+1 (555) 987-6543",
      agent_name: "Sarah Johnson",
      status: "warm",
      created_at: "2024-03-21T14:45:00Z",
      summary: "Looking for family home in suburbs, budget conscious",
    },
    {
      id: "3",
      phone: "+1 (555) 456-7890",
      agent_name: "Sarah Johnson",
      status: "cold",
      created_at: "2024-03-20T09:15:00Z",
      summary: "Mentioned interest in investment properties",
    },
    {
      id: "4",
      phone: "+1 (555) 234-5678",
      agent_name: "Sarah Johnson",
      status: "warm",
      created_at: "2024-03-19T16:20:00Z",
      summary: "First-time homebuyer, needs guidance on process",
    },
  ]

  return (
    <div className="space-y-8">
      {leads.map((lead) => (
        <div key={lead.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{lead.phone.substring(lead.phone.length - 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <Link href={`/dashboard/leads/${lead.id}`} className="text-sm font-medium leading-none hover:underline">
              {lead.phone}
            </Link>
            <div className="flex items-center pt-2">
              <Badge
                variant={lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"}
                className="mr-2"
              >
                {lead.status}
              </Badge>
              <p className="text-xs text-muted-foreground">{new Date(lead.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="ml-auto font-medium">
            {lead.summary.length > 30 ? `${lead.summary.substring(0, 30)}...` : lead.summary}
          </div>
        </div>
      ))}
    </div>
  )
}

