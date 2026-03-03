"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Why teams choose Colab for events.",
  subtitle: "Powerful features designed for seamless event organization",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true) // Start visible for immediate display
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("colab-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Mouse move tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      observer.disconnect()
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section 
      id="features" 
      ref={containerRef}
      className="relative container mx-auto px-4 py-16 sm:py-20 overflow-hidden"
    >
      {/* Animated background with floating elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-lime-400/20 via-emerald-400/15 to-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${10 + Math.sin(Date.now() / 4000) * 15}%`,
            top: `${5 + Math.cos(Date.now() / 3000) * 10}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 via-violet-500/20 to-fuchsia-500/15 rounded-full blur-3xl animate-float"
          style={{
            right: `${5 + Math.cos(Date.now() / 3500) * 12}%`,
            bottom: `${10 + Math.sin(Date.now() / 4500) * 8}%`,
            animationDelay: '3s'
          }}
        />

        {/* Interactive mouse follower */}
        <div 
          className="absolute w-40 h-40 bg-lime-400/5 rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
            opacity: mousePosition.x > 0 ? 1 : 0,
          }}
        />
      </div>

      {/* Header with staggered animation */}
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-white via-lime-100 to-emerald-100 bg-clip-text text-transparent">
          {content.title}
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Collaboration Card with enhanced floating effect */}
        <div 
          className={`hidden md:block transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 -rotate-2'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <Card className="relative group liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:border-lime-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/10">
            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-widest text-neutral-400 group-hover:text-lime-300 transition-colors duration-300">COLLABORATION</p>
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="mt-1 text-xl text-white group-hover:text-lime-100 transition-colors duration-300">
                  Seamless team coordination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 group-hover:border-lime-400/20 transition-all duration-300 hover:scale-105">
                    <Image
                      src="/images/intuitive-1.png"
                      alt="Team collaboration dashboard"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(min-width: 768px) 240px, 45vw"
                      priority={false}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 group-hover:border-lime-400/20 transition-all duration-300 hover:scale-105">
                    <Image
                      src="/images/intuitive-2.png"
                      alt="Event timeline management"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(min-width: 768px) 240px, 45vw"
                      priority={false}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Satisfaction Card with enhanced floating effect */}
        <div 
          className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-2'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <Card className="relative group liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/10">
            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-widest text-neutral-400 group-hover:text-purple-300 transition-colors duration-300">CLIENT SATISFACTION</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-lime-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="mt-1 text-xl text-white group-hover:text-purple-100 transition-colors duration-300">
                  Events delivered flawlessly. Clients thrilled every single time.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex items-end gap-4">
                  <div className="text-5xl font-bold text-lime-300 group-hover:text-purple-300 transition-all duration-500 group-hover:scale-110">
                    4.9
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-lime-300 text-lime-300 group-hover:fill-purple-300 group-hover:text-purple-300 transition-all duration-300 hover:scale-125"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 group-hover:border-purple-400/20 transition-all duration-300 hover:scale-105">
                    <Image
                      src={"/images/top-rated-1.png"}
                      width={280}
                      height={160}
                      alt="Successfully organized event"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl border border-white/10 group-hover:border-purple-400/20 transition-all duration-300 hover:scale-105">
                    <Image
                      src={"/images/top-rated-2.png"}
                      width={280}
                      height={160}
                      alt="Happy event attendees"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Additional floating particles for ambiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-lime-400/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
