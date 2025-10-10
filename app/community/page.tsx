import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, User, Plus } from "lucide-react"
import Link from "next/link"

const discussions = [
  {
    id: 1,
    title: "Best practices for Next.js 14 App Router",
    author: "Sarah Chen",
    category: "Development",
    replies: 24,
    likes: 45,
    lastActivity: "2 hours ago",
    excerpt: "I've been working with the new App Router and wanted to share some patterns I've found useful...",
  },
  {
    id: 2,
    title: "How do you approach design systems?",
    author: "Mike Johnson",
    category: "Design",
    replies: 18,
    likes: 32,
    lastActivity: "5 hours ago",
    excerpt: "Looking for advice on building and maintaining design systems for growing teams...",
  },
  {
    id: 3,
    title: "TypeScript tips for better type safety",
    author: "Alex Rivera",
    category: "Development",
    replies: 31,
    likes: 67,
    lastActivity: "1 day ago",
    excerpt: "Here are some advanced TypeScript patterns that have helped me write more robust code...",
  },
  {
    id: 4,
    title: "Career transition into tech",
    author: "Jordan Lee",
    category: "Career",
    replies: 42,
    likes: 89,
    lastActivity: "1 day ago",
    excerpt: "Sharing my journey from a non-tech background into software development...",
  },
  {
    id: 5,
    title: "Optimizing web performance",
    author: "Emma Davis",
    category: "Development",
    replies: 15,
    likes: 28,
    lastActivity: "2 days ago",
    excerpt: "Let's discuss strategies for improving Core Web Vitals and overall site performance...",
  },
]

const categories = ["All", "Development", "Design", "Career", "General"]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Community</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">Connect, share ideas, and learn together.</p>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Discussion
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <Link key={discussion.id} href={`/community/${discussion.id}`}>
                <Card
                  className={`p-6 hover:shadow-md transition-all duration-300 border-border bg-card group animate-float-delay-${index % 6}`}
                >
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.lastActivity}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{discussion.excerpt}</p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {discussion.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          {discussion.replies} replies
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" />
                          {discussion.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
