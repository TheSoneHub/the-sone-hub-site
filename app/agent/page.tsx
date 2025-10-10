"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User } from "lucide-react"
import { useState } from "react"

const mentors = [
  {
    name: "Code Mentor",
    description: "Expert in programming and software development",
    specialty: "Development",
  },
  {
    name: "Design Guide",
    description: "Specialist in UI/UX and visual design",
    specialty: "Design",
  },
  {
    name: "Career Coach",
    description: "Guidance for professional growth",
    specialty: "Career",
  },
]

export default function AgentPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mentor: selectedMentor.name,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">AI Agent</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Chat with specialized AI mentors powered by Google Gemini for guidance on development, design, and career
              growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-sm font-semibold text-foreground mb-4">Select Mentor</h3>
              {mentors.map((mentor, index) => (
                <Card
                  key={mentor.name}
                  className={`p-4 cursor-pointer transition-all animate-float-delay-${index % 3} ${
                    selectedMentor.name === mentor.name
                      ? "border-primary bg-accent"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedMentor(mentor)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-card-foreground mb-1">{mentor.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{mentor.description}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {mentor.specialty}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card className="flex flex-col h-[600px] border-border bg-card animate-float">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{selectedMentor.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedMentor.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-secondary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-muted">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t border-border">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                    />
                    <Button onClick={handleSend} size="icon" className="rounded-xl w-12 h-12" disabled={isLoading}>
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
