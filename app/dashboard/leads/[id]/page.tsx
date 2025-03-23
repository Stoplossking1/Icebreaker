import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MessageSquare, Edit } from "lucide-react"
import Link from "next/link"

export default function LeadDetailPage({ params }: { params: { id: string } }) {
  // This would be fetched from your Supabase database
  const lead = {
    id: params.id,
    phone: "+1 (555) 123-4567",
    agent_name: "Sarah Johnson",
    status: "hot",
    created_at: "2024-03-22T10:30:00Z",
    summary:
      "Interested in luxury properties in downtown area. Has a budget of $1.2M. Looking to move within the next 3 months. Currently renting and first-time homebuyer. Works in finance and prefers modern architecture.",
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard/leads">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">{lead.phone}</h2>
            <Badge
              variant={lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"}
              className="ml-2"
            >
              {lead.status}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={`/dashboard/conversations/${lead.id}`}>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Conversation
              </Button>
            </Link>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Lead
            </Button>
          </div>
        </div>

        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lead Information</CardTitle>
                <CardDescription>Details about this lead</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Phone Number</h3>
                    <p className="text-lg">{lead.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Agent</h3>
                    <p className="text-lg">{lead.agent_name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                    <p className="text-lg capitalize">{lead.status}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                    <p className="text-lg">{new Date(lead.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Summary</CardTitle>
                <CardDescription>Generated summary based on conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{lead.summary}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Timeline of interactions with this lead</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="w-px h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-medium">Message Sent</p>
                      <p className="text-xs text-muted-foreground">March 22, 2024 at 2:30 PM</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        "Hello! I'm Sarah from Luxury Homes Realty. I noticed you were looking for properties in the
                        downtown area. Would you be interested in seeing some of our newest listings?"
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="w-px h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-medium">Message Received</p>
                      <p className="text-xs text-muted-foreground">March 22, 2024 at 2:45 PM</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        "Yes, I'm interested. What do you have available?"
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Message Sent</p>
                      <p className="text-xs text-muted-foreground">March 22, 2024 at 3:00 PM</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        "Great! We have several luxury properties that just came on the market. There's a beautiful
                        3-bedroom penthouse with stunning city views and a 2-bedroom loft with modern finishes. Would
                        you like me to send you the details of these properties?"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

