import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TranBook",
    description: "A modern translation and language learning platform with real-time collaboration features.",
    image: "/translation-app-interface.png",
    tags: ["Next.js", "TypeScript", "AI", "Real-time"],
    github: "https://github.com",
    demo: "https://tranbook.demo",
    year: "2024",
  },
  {
    title: "leaEng",
    description: "Interactive English learning application with gamification and progress tracking.",
    image: "/english-learning-app.jpg",
    tags: ["React", "Node.js", "MongoDB", "Gamification"],
    github: "https://github.com",
    demo: "https://leaeng.demo",
    year: "2024",
  },
  {
    title: "Portfolio System",
    description: "A flexible portfolio management system with customizable themes and analytics.",
    image: "/portfolio-dashboard.png",
    tags: ["Next.js", "Tailwind", "Analytics"],
    github: "https://github.com",
    year: "2023",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A collection of projects I've built, ranging from web applications to experimental tools.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-border bg-card group animate-float-delay-${index % 3}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden bg-muted">
                    
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                    </div>

                    <h2 className="text-3xl font-bold text-card-foreground mb-4">{project.title}</h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
