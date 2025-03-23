import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function RecentActivity() {
  const activities = [
    {
      id: "1",
      lead_id: "1",
      lead_phone: "+1 (555) 123-4567",
      from: "ai",
      body: "Hello! I'm Sarah from Luxury Homes Realty. I noticed you were looking for properties in the downtown area. Would you be interested in seeing some of our newest listings?",
      timestamp: "2024-03-22T14:30:00Z",
    },
    {
      id: "2",
      lead_id: "1",
      lead_phone: "+1 (555) 123-4567",
      from: "lead",
      body: "Yes, I'm interested. What do you have available?",
      timestamp: "2024-03-22T14:45:00Z",
    },
    {
      id: "3",
      lead_id: "2",
      lead_phone: "+1 (555) 987-6543",
      from: "ai",
      body: "Hi there! I'm Sarah from Family Homes Realty. I understand you're looking for a family home in the suburbs. I'd love to help you find something within your budget. When would be a good time to chat?",
      timestamp: "2024-03-21T15:30:00Z",
    },
    {
      id: "4",
      lead_id: "3",
      lead_phone: "+1 (555) 456-7890",
      from: "ai",
      body: "Hello! I'm Sarah from Investment Properties Realty. I heard you might be interested in investment properties. I have some great options with excellent ROI potential. Would you like to learn more?",
      timestamp: "2024-03-20T10:15:00Z",
    },
  ]

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start">
          <Avatar className="h-9 w-9 mt-1">
            <AvatarFallback>
              {activity.from === "ai" ? "AI" : activity.lead_phone.substring(activity.lead_phone.length - 2)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <div className="flex items-center">
              <Link
                href={`/dashboard/conversations/${activity.lead_id}`}
                className="text-sm font-medium leading-none hover:underline"
              >
                {activity.lead_phone}
              </Link>
              <Badge variant={activity.from === "ai" ? "outline" : "secondary"} className="ml-2">
                {activity.from === "ai" ? "Outbound" : "Inbound"}
              </Badge>
              <p className="ml-2 text-xs text-muted-foreground">
                {new Date(activity.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {activity.body.length > 100 ? `${activity.body.substring(0, 100)}...` : activity.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

