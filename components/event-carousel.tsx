"use client"

import React, { useRef } from "react"

interface Slide {
  title: string
  subtitle?: string
  badge?: string
  image?: string
}

export const EventCarousel: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (dir: "left" | "right") => {
    const el = containerRef.current
    if (!el) return
    const offset = el.clientWidth * 0.8
    el.scrollBy({ left: dir === "left" ? -offset : offset, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          tabIndex={0}
          aria-roledescription="carousel"
          className="scroll-snap-x flex gap-6 overflow-x-auto py-6 px-2 -mx-2 focus:outline-none"
        >
          {slides.map((s) => (
            <article
              key={s.title}
              className="scroll-snap-center flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/6 bg-black"
            >
              <div className="relative h-[520px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex flex-col">
                {s.image ? (
                  <img loading="lazy" src={s.image} alt={s.title} className="h-64 w-full object-cover" />
                ) : (
                  <div className="h-64 w-full bg-white/6 flex items-center justify-center text-white/80">Preview</div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {s.badge && (
                      <span className="inline-flex items-center gap-2 bg-black/30 text-xs rounded-full px-3 py-1 font-semibold text-emerald-200">{s.badge}</span>
                    )}
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">{s.title}</h3>
                    {s.subtitle && <p className="mt-2 text-sm text-white/90">{s.subtitle}</p>}
                  </div>

                  <div className="mt-4">
                    <div className="h-20 w-full rounded-lg bg-white/10 flex items-center justify-center text-white/90 text-sm">Media Preview</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        aria-label="Previous"
        onClick={() => scrollBy("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow-md hover:bg-black/80"
      >
        ‹
      </button>

      <button
        aria-label="Next"
        onClick={() => scrollBy("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white shadow-md hover:bg-black/80"
      >
        ›
      </button>
    </div>
  )
}

export default EventCarousel
