import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ThumbsUp, MessageSquare, User } from "lucide-react"
import Link from "next/link"

const replies = [
  {
    author: "Chris Martinez",
    content:
      "Great points! I've been using a similar approach and it's really improved our code organization. One thing I'd add is...",
    likes: 12,
    timestamp: "1 hour ago",
  },
  {
    author: "Taylor Swift",
    content:
      "Thanks for sharing this. I was struggling with this exact issue last week. Your solution is much cleaner than what I came up with.",
    likes: 8,
    timestamp: "2 hours ago",
  },
  {
    author: "Jamie Park",
    content:
      "Have you considered using server components for this? I think it might simplify some of the data fetching patterns you mentioned.",
    likes: 15,
    timestamp: "3 hours ago",
  },
]

export default function DiscussionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to community
          </Link>

          <Card className="p-8 border-border bg-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">Development</Badge>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6 tracking-tight">
              Best practices for Next.js 14 App Router
            </h1>

            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                Sarah Chen
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquare className="w-4 h-4" />
                24 replies
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ThumbsUp className="w-4 h-4" />
                45 likes
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've been working with the new App Router in Next.js 14 and wanted to share some patterns I've found
                useful for organizing code and managing data fetching.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One of the biggest changes is how we think about server and client components. Here are some key
                principles I follow:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Keep server components as the default</li>
                <li>Only use 'use client' when you need interactivity</li>
                <li>Fetch data as close to where it's used as possible</li>
                <li>Use loading.tsx and error.tsx for better UX</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                What patterns have you found helpful? I'd love to hear your experiences!
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <ThumbsUp className="w-4 h-4" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                Share
              </Button>
            </div>
          </Card>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Replies ({replies.length})</h2>
          </div>

          <div className="space-y-4">
            {replies.map((reply, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-card-foreground">{reply.author}</span>
                      <span className="text-sm text-muted-foreground">{reply.timestamp}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{reply.content}</p>
                    <Button variant="ghost" size="sm" className="gap-2 -ml-2">
                      <ThumbsUp className="w-4 h-4" />
                      {reply.likes}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 border-border bg-card mt-6">
            <h3 className="font-semibold text-card-foreground mb-4">Add a reply</h3>
            <textarea
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring mb-4 min-h-[120px]"
            />
            <Button>Post Reply</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
