import { Navigation } from "@/components/navigation"
import { TerminalGame } from "@/components/terminal-game"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, BookOpen, Bot, Sprout, Users, User } from "lucide-react"
import Link from "next/link"

const hubCards = [
  {
    title: "About",
    description: "Learn about Sone and the vision",
    icon: User,
    href: "/about",
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Projects",
    description: "Explore my latest work and creations",
    icon: Code,
    href: "/projects",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Learn",
    description: "Articles, tutorials, and insights",
    icon: BookOpen,
    href: "/learn",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI Agent",
    description: "Chat with my AI assistant",
    icon: Bot,
    href: "/agent",
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Digital Garden",
    description: "Growing ideas and reflections",
    icon: Sprout,
    href: "/garden",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Community",
    description: "Connect and collaborate",
    icon: Users,
    href: "/community",
    color: "from-rose-500/10 to-red-500/10",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Welcome to TheSoneHub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A personal ecosystem for projects, learning, and community. Explore what I'm building and thinking about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hubCards.map((card, index) => {
              const Icon = card.icon
              const floatClass = `animate-float-delay-${index % 6}`
              return (
                <Link key={card.href} href={card.href}>
                  <Card
                    className={`glass-card group p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 border-primary/20 h-full ${floatClass}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>

                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{card.title}</h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{card.description}</p>

                    <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="max-w-md mx-auto mt-16">
            <TerminalGame />
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm text-muted-foreground">Built with care and attention to detail</p>
          </div>
        </div>
      </main>
    </div>
  )
}
