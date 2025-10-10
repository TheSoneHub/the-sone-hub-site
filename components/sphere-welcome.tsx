"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export function SphereWelcome({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    const particles: Particle[] = []
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      })
    }
    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p) => {
        // Move towards mouse
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200) {
          p.x += dx * 0.02
          p.y += dy * 0.02
        } else {
          p.x += p.vx
          p.y += p.vy
        }

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.fillStyle = "#000000"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particlesRef.current.forEach((p2) => {
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist2 < 100) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.2 * (1 - dist2 / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleEnter = () => {
    onComplete()
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleEnter()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 text-center px-8 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 animate-fade-in">Welcome to TheSoneHub</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in-delay leading-relaxed">
          Your space for creativity, connection, and inspiration. A personal ecosystem for projects, learning, and
          community.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-2">
          <button
            onClick={handleEnter}
            className="px-10 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Explore Now
          </button>
          <button
            onClick={handleEnter}
            className="px-10 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-all hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-8 animate-pulse">Press Enter or click a button to continue...</p>
      </div>
    </div>
  )
}
