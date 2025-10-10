import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn the best practices for building performant and scalable applications using Next.js App Router.",
    category: "Web Development",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "nextjs-scalable-apps",
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
    category: "TypeScript",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "typescript-generics",
  },
  {
    title: "Modern CSS Techniques for 2024",
    excerpt:
      "Explore the latest CSS features including container queries, cascade layers, and modern layout techniques.",
    category: "CSS",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "modern-css-2024",
  },
  {
    title: "AI Integration in Web Applications",
    excerpt: "How to integrate AI capabilities into your web apps using modern APIs and frameworks.",
    category: "AI",
    date: "2023-12-28",
    readTime: "12 min read",
    slug: "ai-web-integration",
  },
  {
    title: "Database Design Patterns",
    excerpt: "Essential database design patterns for building robust and efficient data models.",
    category: "Database",
    date: "2023-12-20",
    readTime: "9 min read",
    slug: "database-patterns",
  },
]

const categories = ["All", "Web Development", "TypeScript", "CSS", "AI", "Database"]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Learn</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Articles, tutorials, and insights about web development, design, and technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/learn/${article.slug}`}>
                <Card
                  className={`p-8 hover:shadow-md transition-all duration-300 border-border bg-card group animate-float-delay-${index % 6}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">
                        {article.category}
                      </Badge>

                      <h2 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
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
