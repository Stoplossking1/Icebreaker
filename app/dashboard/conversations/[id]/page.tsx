"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function ConversationPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState("")

  // This would be fetched from your Supabase database
  const lead = {
    id: params.id,
    phone: "+1 (555) 123-4567",
    agent_name: "Sarah Johnson",
    status: "hot",
  }

  // This would be fetched from your Supabase database
  const messages = [
    {
      id: "1",
      lead_id: params.id,
      from: "ai",
      body: "Hello! I'm Sarah from Luxury Homes Realty. I noticed you were looking for properties in the downtown area. Would you be interested in seeing some of our newest listings?",
      timestamp: "2024-03-22T14:30:00Z",
    },
    {
      id: "2",
      lead_id: params.id,
      from: "lead",
      body: "Yes, I'm interested. What do you have available?",
      timestamp: "2024-03-22T14:45:00Z",
    },
    {
      id: "3",
      lead_id: params.id,
      from: "ai",
      body: "Great! We have several luxury properties that just came on the market. There's a beautiful 3-bedroom penthouse with stunning city views and a 2-bedroom loft with modern finishes. Would you like me to send you the details of these properties?",
      timestamp: "2024-03-22T15:00:00Z",
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Here you would integrate with your backend to send the message
    console.log("Sending message:", newMessage)

    // Clear the input
    setNewMessage("")
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b p-4">
        <div className="flex items-center space-x-2">
          <Link href={`/dashboard/leads/${lead.id}`}>
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h2 className="text-xl font-bold">{lead.phone}</h2>
            <div className="flex items-center">
              <Badge
                variant={lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"}
                className="mr-2"
              >
                {lead.status}
              </Badge>
              <span className="text-sm text-muted-foreground">Agent: {lead.agent_name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.from === "ai" ? "justify-start" : "justify-end"}`}>
            <Card className={`max-w-[80%] ${message.from === "ai" ? "" : "bg-primary text-primary-foreground"}`}>
              <CardContent className="p-3">
                <p className="text-sm">{message.body}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}

