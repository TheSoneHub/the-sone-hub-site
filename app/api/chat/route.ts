import { type NextRequest, NextResponse } from "next/server"

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { messages, mentor } = await request.json()

    // Build system prompt based on selected mentor
    const systemPrompts: Record<string, string> = {
      "Code Mentor":
        "You are an expert programming mentor specializing in software development, algorithms, and best practices. Provide clear, practical coding advice.",
      "Design Guide":
        "You are a UI/UX design specialist. Help users with design principles, user experience, visual design, and creative solutions.",
      "Career Coach":
        "You are a professional career coach. Provide guidance on career growth, job searching, skill development, and professional advancement.",
    }

    const systemPrompt = systemPrompts[mentor] || systemPrompts["Code Mentor"]

    const formattedMessages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ]

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://thesonehub.com",
        "X-Title": "TheSoneHub AI Assistant",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-distill-llama-70b:free",
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] OpenRouter API error:", errorData)
      throw new Error(`OpenRouter API error: ${response.statusText}`)
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content || "I apologize, but I couldn't generate a response."

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
