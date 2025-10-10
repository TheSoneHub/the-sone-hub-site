import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Youtube, ExternalLink, Code2, Brain, Rocket, Sparkles } from "lucide-react"
import Link from "next/link"

const skills = {
  programming: ["C++", "Python", "JavaScript", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
  tools: ["VS Code", "Notion", "Make.com", "Vercel", "Netlify", "Arch Linux"],
  ai: ["Prompt Engineering", "AI Tool Integration", "Workflow Automation"],
}

const projects = [
  {
    title: "TheSoneHub",
    description: "Personal + Community Hybrid Website",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "Active",
    icon: Sparkles,
  },
  {
    title: "AI Mentor Telegram Bot",
    description: "Intelligent mentorship bot using Make.com + OpenRouter",
    tech: ["Make.com", "OpenRouter", "Telegram API"],
    status: "Active",
    icon: Brain,
  },
  {
    title: "Screen Translator App",
    description: "Electron app with OCR and multilingual translation",
    tech: ["Electron", "OCR", "Translation API"],
    status: "In Development",
    icon: Code2,
  },
  {
    title: "Zonc Nexus Pantheon",
    description: "AI Mentor Ecosystem for creators and learners",
    tech: ["AI", "Automation", "Web Platform"],
    status: "Planning",
    icon: Rocket,
  },
]

const timeline = [
  {
    year: "2025",
    title: "Building TheSoneHub & AI Tools",
    description: "Creating personal ecosystem and AI automation tools",
  },
  {
    year: "2024",
    title: "Content Creator & Educator",
    description: "YouTube channels on tech, philosophy, and personal growth",
  },
  {
    year: "Future",
    title: "Zonc Nexus & AUTO Company",
    description: "Building AI automation company to achieve financial freedom",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 text-primary">
                Builder · Creator · Entrepreneur
              </Badge>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">Pyae Sone Phyo</h1>
            <p className="text-2xl text-primary font-medium mb-4">Sone</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              20-year-old tech entrepreneur from Myanmar. Combining Technology, Psychology, and Philosophy to empower
              youth and creators.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="glass-card p-8 mb-16 animate-float border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Mission & Vision</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-xl">Learn → Build → Reflect → Note → Share → Publish</p>
              <p>
                My goal is to achieve financial and time freedom before 30 to support my family and build meaningful
                products that help others.
              </p>
              <p>
                Currently building <span className="text-primary font-semibold">AUTO</span> under the brand{" "}
                <span className="text-primary font-semibold">Zonc Nexus</span>, focusing on AI Automation to empower
                creators and entrepreneurs.
              </p>
            </div>
          </Card>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card p-6 animate-float-delay-1 border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6 animate-float-delay-2 border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6 animate-float-delay-3 border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Tools & Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6 animate-float-delay-4 border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">AI & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon
                return (
                  <Card
                    key={project.title}
                    className={`glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-float-delay-${index % 5} border-primary/20`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                        <Badge variant={project.status === "Active" ? "default" : "outline"} className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={item.year} className={`glass-card p-6 animate-float-delay-${index % 5} border-primary/20`}>
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold text-primary">{item.year}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Content & Social Section */}
          <Card className="glass-card p-8 mb-16 animate-float border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Content & Community</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>I create educational and motivational content for youth on YouTube, covering topics like:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Stoic + Buddhist Philosophy in Burmese</li>
                <li>Tech lessons (AI, coding, productivity)</li>
                <li>Personal growth and entrepreneurship</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="w-4 h-4" />
                  YouTube
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="mailto:contact@thesonehub.com">
                  <Mail className="w-4 h-4" />
                  Email
                </Link>
              </Button>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Build Together</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaboration or want to learn more about my projects?
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/community">
                Join the Community
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
