import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { TerminalWrapper } from "@/components/terminal-wrapper"
import { Navigation } from "@/components/navigation"
import { AIChatWidget } from "@/components/ai-chat-widget"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TheSoneHub - Personal Ecosystem",
  description: "A personal hub for projects, learning, and community by Pyae Sone Phyo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TerminalWrapper>
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <AIChatWidget />
        </TerminalWrapper>
      </body>
    </html>
  )
}
