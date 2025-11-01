import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "TranBook",
    subtitle: "In-App Document Translator",
    version: "v2.0",
    logo: "/tranbook-logo.svg",
    description:
      "A lightweight, privacy-first web app that lets you read PDF/DOCX/EPUB files in the browser and translate selected text instantly using AI. TranBook focuses on fast, contextual translations while keeping your documents local to the browser. Ideal for language learners and readers who want immediate, in-context translations without leaving the page.",
    features: [
      "Select-to-translate: highlight any text in a document for instant AI-powered translation",
      "Per-word dictionary mode: dictionary-style translations with example sentences for language learners",
      "Local library: upload and store PDF, DOCX, and EPUB files in your browser (IndexedDB)",
      "Exportable history: export session translations to Markdown for notes",
      "Responsive UI with resizable panes and dark/light theme toggle",
      "Optional Lo-fi background audio player for reading ambiance",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "pdf.js", "Google Gemini API", "IndexedDB"],
    github: "https://github.com",
    demo: "https://tranbook.netlify.app/",
    year: "2024",
  },
  {
    title: "leaEng",
    subtitle: "Global Connect AI English App",
    version: "v4.2",
    logo: "/leaeng-logo.svg",
    description:
      "Your Personalized AI-Powered Language Learning Companion. A comprehensive web application designed to provide a rich, personalized, and engaging platform for English language learners. Leverages Google's Generative AI (Gemini) to create a tailored experience that adapts to the user's skill level, from A1 to C2.",
    features: [
      "Smart Assessment & Progression with CEFR level tracking",
      "AI-Powered Reading with user-defined topics and interactive dictionary",
      "Advanced Writing Coach with detailed feedback",
      "Dual-Mode Speaking Practice (Freestyle & Guided)",
      "Integrated Listening Practice with YouTube library",
      "Centralized Notes Hub with Markdown export",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Google Gemini AI", "YouTube API"],
    github: "https://github.com",
    demo: "https://leaeng.netlify.app/",
    year: "2024",
  },
  {
    title: "ViralScript",
    subtitle: "AI-Powered Script Editor for Short-Form Content",
    version: "v1.0",
    logo: "/viralscript-logo.svg",
    description:
      "A minimalist, AI-powered script editor designed specifically for short-form content creators in Myanmar. ViralScript serves as an intelligent co-pilot, helping creators brainstorm, structure, and refine their scripts for platforms like TikTok, Facebook Reels, and YouTube Shorts. The core philosophy is 'The Coach, Not The Crutch' - teaching users the principles of viral content strategy.",
    features: [
      "Smart Editor Workspace with dedicated sections for Hook, Body, and CTA",
      "AI Creative Coach with multiple personalities (Creative Coach, Viral Editor, Hook Analyzer)",
      "Live Analysis Engine providing real-time feedback as you type",
      "On-Demand Hook Bank with proven viral hook templates categorized by psychological triggers",
      "Pre-Writing Context Setup for defining content goals, target audience, and platform",
      "Privacy-First: All scripts and API keys stored only in browser's local storage",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Google Gemini API", "LocalStorage", "Marked.js"],
    github: "https://github.com",
    demo: "https://viralscript.netlify.app/",
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
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className="relative aspect-square md:aspect-auto overflow-hidden bg-muted flex items-center justify-center p-8">
                    {project.logo ? (
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    ) : project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                      {project.version && (
                        <Badge variant="outline" className="text-xs">
                          {project.version}
                        </Badge>
                      )}
                    </div>

                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-card-foreground">{project.title}</h2>
                      {project.subtitle && <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {project.features && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-card-foreground mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
                          <GithubIcon />
                          Code
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLinkIcon />
                          Use App
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
