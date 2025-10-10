import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>

          <article>
            <Badge variant="secondary" className="mb-4">
              Web Development
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Building Scalable Web Applications with Next.js
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Jan 15, 2024
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />8 min read
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Next.js has become one of the most popular frameworks for building modern web applications. In this
                article, we'll explore the best practices for building scalable applications using the App Router.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Getting Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When building scalable applications, it's important to consider the architecture from the start. The
                Next.js App Router provides a powerful foundation for building applications that can grow with your
                needs.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Key Principles</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                There are several key principles to keep in mind when building scalable applications. These include
                proper code organization, efficient data fetching, and optimized rendering strategies.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By following these best practices, you can build applications that are not only performant but also
                maintainable and scalable as your project grows.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
