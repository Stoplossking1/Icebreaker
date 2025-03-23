"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewLeadPage() {
  const [phone, setPhone] = useState("")
  const [agentName, setAgentName] = useState("Sarah Johnson")
  const [status, setStatus] = useState("warm")
  const [summary, setSummary] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would integrate with your backend to create the lead
    console.log("Creating lead:", { phone, agentName, status, summary })

    // Redirect to leads page
    // router.push("/leads")
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/leads">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Add New Lead</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lead Information</CardTitle>
            <CardDescription>Enter the details of the new lead</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agent">Agent Name</Label>
                <Input id="agent" value={agentName} onChange={(e) => setAgentName(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label>Lead Status</Label>
                <RadioGroup value={status} onValueChange={setStatus} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hot" id="hot" />
                    <Label htmlFor="hot" className="text-red-500 font-medium">
                      Hot
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="warm" id="warm" />
                    <Label htmlFor="warm" className="text-amber-500 font-medium">
                      Warm
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cold" id="cold" />
                    <Label htmlFor="cold" className="text-blue-500 font-medium">
                      Cold
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Initial Summary (Optional)</Label>
                <Textarea
                  id="summary"
                  placeholder="Enter any initial information about this lead..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Link href="/dashboard/leads">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit">Create Lead</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

