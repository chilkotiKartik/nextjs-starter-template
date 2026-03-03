import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import EventCarousel from "@/components/event-carousel"

const slides = [
  {
    title: "Coordination",
    subtitle: "Keep your team in sync with real-time collaboration.",
    badge: "COORDINATION",
    image: "/images/coordination.jpg",
  },
  {
    title: "Efficiency",
    subtitle: "Automate tasks and save hours of coordination.",
    badge: "EFFICIENCY",
    image: "/images/efficiency.jpg",
  },
  {
    title: "Attendees",
    subtitle: "Manage registrations, ticketing, and communications.",
    badge: "ATTENDEES",
    image: "/images/attendees.jpg",
  },
  {
    title: "Analytics",
    subtitle: "Track metrics and optimize future events.",
    badge: "ANALYTICS",
    image: "/images/analytics.jpg",
  },
  {
    title: "Integration",
    subtitle: "Connect your favorite tools seamlessly.",
    badge: "INTEGRATION",
    image: "/images/integration.jpg",
  },
]
export const metadata = {
  title: "Event — Colab",
  description: "Event overview: features, schedule and registration for Colab events.",
}

export default function EventPage() {
  return (
    <main className="min-h-[100dvh] bg-black text-white">
      <SiteHeader />

      <section className="container mx-auto max-w-4xl px-6 pt-10 pb-8">
        <h1 className="text-4xl font-extrabold">Event Overview</h1>
        <p className="mt-2 text-gray-300">A showcase of the event features and schedule. Swipe or scroll horizontally to preview highlights.</p>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6">
          <EventCarousel slides={slides} />

          <p className="mt-4 text-sm text-gray-400">This is a mobile-style preview of the event sections. Use the CTA below to register.</p>

          <div className="mt-6 flex gap-3">
            <a href="#register" className="inline-block rounded-lg bg-lime-400 text-black font-medium px-6 py-3 hover:bg-lime-300 transition">Register</a>
            <a href="#schedule" className="inline-block rounded-lg border border-white/10 text-white/90 px-6 py-3 hover:bg-white/5 transition">View Schedule</a>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section id="schedule" className="py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">Schedule</h2>
          <ul className="mt-4 space-y-4 text-gray-300">
            <li>
              <strong>09:00</strong> — Opening remarks and networking
            </li>
            <li>
              <strong>10:00</strong> — Panel: Event coordination at scale
            </li>
            <li>
              <strong>11:30</strong> — Workshop: Automations & Integrations
            </li>
          </ul>
        </div>
      </section>

      <section id="register" className="py-12 bg-white/3">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold">Register</h2>
          <p className="mt-2 text-gray-300">Reserve your spot for the event. Tickets are free for early registrants.</p>
          <div className="mt-6">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <input className="rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" placeholder="First name" />
              <input className="rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" placeholder="Last name" />
              <input className="col-span-1 sm:col-span-2 rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" placeholder="Email" />
              <button className="col-span-1 sm:col-span-2 rounded-lg bg-lime-400 text-black px-4 py-2">Reserve spot</button>
            </form>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
