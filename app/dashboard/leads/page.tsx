import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Phone, ChevronDown, MoreHorizontal, Search } from "lucide-react"
import Link from "next/link"

export default function LeadsPage() {
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
    {
      id: "5",
      phone: "+1 (555) 345-6789",
      agent_name: "Sarah Johnson",
      status: "hot",
      created_at: "2024-03-18T11:10:00Z",
      summary: "Looking for vacation property, has specific requirements",
    },
    {
      id: "6",
      phone: "+1 (555) 567-8901",
      agent_name: "Sarah Johnson",
      status: "cold",
      created_at: "2024-03-17T13:25:00Z",
      summary: "Inquired about commercial properties for small business",
    },
    {
      id: "7",
      phone: "+1 (555) 678-9012",
      agent_name: "Sarah Johnson",
      status: "warm",
      created_at: "2024-03-16T15:40:00Z",
      summary: "Relocating to the area, needs to find home quickly",
    },
    {
      id: "8",
      phone: "+1 (555) 789-0123",
      agent_name: "Sarah Johnson",
      status: "cold",
      created_at: "2024-03-15T09:55:00Z",
      summary: "Considering selling current home, wants property valuation",
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
          <div className="flex items-center space-x-2">
            <Link href="/dashboard/leads/new">
              <Button>
                <Phone className="mr-2 h-4 w-4" />
                Add New Lead
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search leads..." className="pl-8" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Status <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem checked>Hot</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Warm</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Cold</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/leads/${lead.id}`} className="hover:underline">
                      {lead.phone}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"}
                    >
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="max-w-md truncate">{lead.summary}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link href={`/dashboard/conversations/${lead.id}`}>
                          <DropdownMenuCheckboxItem>View Conversation</DropdownMenuCheckboxItem>
                        </Link>
                        <DropdownMenuCheckboxItem>Edit Lead</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Delete Lead</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

