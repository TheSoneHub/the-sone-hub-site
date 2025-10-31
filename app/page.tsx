import { Navigation } from "@/components/navigation"
import { TerminalGame } from "@/components/terminal-game"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const SproutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const hubCards = [
  {
    title: "About",
    description: "Learn about Sone and the vision",
    icon: UserIcon,
    href: "/about",
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Projects",
    description: "Explore my latest work and creations",
    icon: CodeIcon,
    href: "/projects",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Learn",
    description: "Articles, tutorials, and insights",
    icon: BookOpenIcon,
    href: "/learn",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI Agent",
    description: "Chat with my AI assistant",
    icon: BotIcon,
    href: "/agent",
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Digital Garden",
    description: "Growing ideas and reflections",
    icon: SproutIcon,
    href: "/garden",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "Community",
    description: "Connect and collaborate",
    icon: UsersIcon,
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
                      <Icon />
                    </div>

                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{card.title}</h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{card.description}</p>

                    <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Explore
                      <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">
                        <ArrowRightIcon />
                      </span>
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
