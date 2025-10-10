import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Calendar } from "lucide-react"
import Link from "next/link"

const notes = [
  {
    title: "On Building in Public",
    excerpt: "Thoughts on sharing the creative process and learning in the open.",
    status: "Growing",
    lastUpdated: "2024-01-18",
    tags: ["Reflection", "Community"],
  },
  {
    title: "The Art of Simplicity",
    excerpt: "Why less is often more in design and development.",
    status: "Seedling",
    lastUpdated: "2024-01-15",
    tags: ["Design", "Philosophy"],
  },
  {
    title: "Learning Systems",
    excerpt: "How I organize and retain knowledge effectively.",
    status: "Evergreen",
    lastUpdated: "2024-01-12",
    tags: ["Learning", "Productivity"],
  },
  {
    title: "Code as Craft",
    excerpt: "Viewing programming as a creative practice.",
    status: "Growing",
    lastUpdated: "2024-01-08",
    tags: ["Development", "Craft"],
  },
  {
    title: "Digital Minimalism",
    excerpt: "Finding focus in an age of constant distraction.",
    status: "Seedling",
    lastUpdated: "2024-01-05",
    tags: ["Lifestyle", "Focus"],
  },
  {
    title: "The Power of Constraints",
    excerpt: "How limitations can fuel creativity and innovation.",
    status: "Growing",
    lastUpdated: "2024-01-02",
    tags: ["Creativity", "Design"],
  },
]

const statusColors = {
  Seedling: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  Growing: "bg-green-500/10 text-green-700 dark:text-green-400",
  Evergreen: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
}

export default function GardenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-8 h-8 text-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Digital Garden</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A collection of growing ideas, reflections, and notes. Some are seedlings, others are evergreen.
            </p>
          </div>

          <div className="flex gap-3 mb-12">
            <Badge className={statusColors.Seedling}>Seedling - New ideas</Badge>
            <Badge className={statusColors.Growing}>Growing - Developing thoughts</Badge>
            <Badge className={statusColors.Evergreen}>Evergreen - Mature concepts</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {notes.map((note, index) => (
              <Link key={index} href={`/garden/${index}`}>
                <Card
                  className={`p-6 hover:shadow-md transition-all duration-300 border-border bg-card group h-full animate-float-delay-${index % 6}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={statusColors[note.status as keyof typeof statusColors]}>{note.status}</Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(note.lastUpdated).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{note.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
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
