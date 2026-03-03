"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle, ArrowRight, Calendar, Users, Zap } from "lucide-react"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Transform the way you organize events. Colab brings teams together to create unforgettable experiences.",
  copyright: "© 2025 — Colab Events",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const savedContent = localStorage.getItem("colab-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  const eventFeatures = [
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "AI-powered event timelines and scheduling",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Keep your entire team in sync",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Live notifications for all changes",
    },
  ]

  return (
    <section className="text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="container mx-auto px-4 pt-12 sm:pt-16">
          <div className="flex gap-3 justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-gray-600 text-gray-200 hover:bg-gray-800 px-6 py-2 text-sm font-medium bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] group"
            >
              <Link href="/register" className="flex items-center gap-2">
                Start Organizing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Event Features Grid - Card Style */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eventFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-2xl liquid-glass p-6 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(198,255,58,0.15), transparent 80%)",
                    }}
                  />

                  <div className="relative">
                    {/* Icon with animation */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-lime-400/20 to-purple-500/20 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:from-lime-400/40 group-hover:to-purple-500/40">
                      <IconComponent className="w-6 h-6 text-lime-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lime-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-lime-400/30 transition-all duration-300" />
                </Card>
              )
            })}
          </div>
        </div>

        {/* Main showcase card */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(163,230,53,0.2)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-lime-400/10 to-transparent rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full filter blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="animate-fade-in">
                <p className="mb-2 text-[11px] tracking-widest text-lime-300">POWERFUL TOOLS</p>
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Manage every detail of your event in one place
                </h3>
                <p className="mt-2 max-w-prose text-sm text-neutral-400">
                  From guest lists to vendor coordination, timeline management to post-event analytics. Everything you
                  need to execute flawless events.
                </p>
                <div className="mt-6 flex gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300 transition-all hover:scale-105"
                  >
                    <Link href="/register">Get Started Free</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-lime-400/30 text-lime-300 hover:border-lime-400/60 transition-all bg-transparent"
                  >
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Mockup phone frame with animation */}
              <div className="mx-auto w-full max-w-[320px] animate-float">
                <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(163,230,53,0.3)]">
                  <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black">
                    {/* Placeholder content */}
                    <div className="relative h-full w-full flex flex-col items-center justify-center p-6">
                      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                      <div className="space-y-4 text-center flex-1 flex flex-col justify-center">
                        <div className="text-4xl font-extrabold text-lime-300">Events</div>
                        <div className="text-4xl font-extrabold text-lime-300">Made Easy</div>
                        <p className="text-xs text-white/60 mt-4">Organize with confidence</p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-lime-300 mx-auto">
                          <Zap className="w-3 h-3" />
                          Colab Power
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pb-20 md:pb-10 mt-16">
          <div className="container mx-auto px-4 py-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
              {/* Brand */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-6 w-6 bg-gradient-to-br from-lime-300 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <span className="text-xl font-semibold text-lime-300">Colab</span>
                </div>
                <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (!email) return
                    setSubmitting(true)
                    try {
                      await fetch("/api/subscribe", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ email }),
                      })
                      setEmail("")
                      alert("Thanks — you've been subscribed (demo)")
                    } catch (err) {
                      console.error(err)
                      alert("Subscription failed")
                    } finally {
                      setSubmitting(false)
                    }
                  }}
                  className="mt-4 flex gap-2"
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Your email"
                    className="rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white text-sm"
                  />
                  <button disabled={submitting} className="rounded-md bg-lime-400 px-4 text-black text-sm">{submitting ? "..." : "Subscribe"}</button>
                </form>
              </div>

              {/* Navigation */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
                <div>
                  <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {["Home", "Features", "Pricing", "Blog", "Docs", "Contact"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="hover:text-lime-300 transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Social media
                  </h5>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center gap-2 group">
                      <Twitter className="h-4 w-4 text-neutral-400 group-hover:text-lime-300 transition-colors" />
                      <a
                        href="https://twitter.com/colabevents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition-colors"
                        aria-label="Follow Colab on Twitter"
                      >
                        X/Twitter
                      </a>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <Youtube className="h-4 w-4 text-neutral-400 group-hover:text-lime-300 transition-colors" />
                      <a
                        href="https://youtube.com/@colabevents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition-colors"
                        aria-label="Subscribe to Colab on YouTube"
                      >
                        YouTube
                      </a>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <Instagram className="h-4 w-4 text-neutral-400 group-hover:text-lime-300 transition-colors" />
                      <a
                        href="https://instagram.com/colabevents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition-colors"
                        aria-label="Follow Colab on Instagram"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <MessageCircle className="h-4 w-4 text-neutral-400 group-hover:text-lime-300 transition-colors" />
                      <a
                        href="https://discord.gg/colab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition-colors"
                        aria-label="Join Colab on Discord"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
              <p>{content.copyright}</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-lime-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-lime-300 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
