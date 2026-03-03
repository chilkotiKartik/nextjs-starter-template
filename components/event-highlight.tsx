"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
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
]

export const EventHighlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs with complex animations */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-lime-400/30 via-emerald-400/20 to-cyan-400/30 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + Math.sin(Date.now() / 3000) * 10}%`,
            top: `${10 + Math.cos(Date.now() / 4000) * 5}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 via-violet-500/30 to-fuchsia-500/20 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + Math.cos(Date.now() / 3500) * 8}%`,
            bottom: `${20 + Math.sin(Date.now() / 4500) * 6}%`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-400/25 via-red-400/20 to-pink-500/25 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + Math.sin(Date.now() / 5000) * 5}%`,
            top: `${60 + Math.cos(Date.now() / 3800) * 8}%`,
            animationDelay: '4s'
          }}
        />
        
        {/* Interactive light following mouse */}
        <div 
          className="absolute w-32 h-32 bg-lime-400/10 rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      </div>

      {/* Particle grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(163,230,53,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'particleMove 20s linear infinite'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Animated header section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Live status indicator */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 backdrop-blur-xl border border-lime-400/30 rounded-full px-6 py-3 mb-8 shadow-lg hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-lime-400 rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
            </div>
            <span className="text-lime-300 font-bold uppercase tracking-widest text-sm">Live Event</span>
            <div className="w-px h-4 bg-lime-400/50"></div>
            <span className="text-white/80 text-xs font-medium">Dec 15, 2025</span>
          </div>
          
          {/* Main title with staggered animation */}
          <div className="space-y-4 mb-8">
            <h2 className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift bg-300% hover:scale-110 transition-transform duration-300 cursor-default">
                Upcoming
              </span>
            </h2>
            <h2 className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:text-gray-200 transition-colors`}>
              Event
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Join our next event to see <span className="text-lime-300 font-semibold">Colab in action</span> — live demos, 
            interactive workshops, and networking with <span className="text-white font-semibold">industry leaders</span>.
          </p>
        </div>

        {/* Main content with enhanced layout */}
        <div className="grid xl:grid-cols-5 gap-16 items-start">
          {/* Left side - Event details (2 columns) */}
          <div className={`xl:col-span-2 space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Floating info cards with hover animations */}
            <div className="grid gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-black text-xl font-bold">📅</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">December 15, 2025</h3>
                      <p className="text-gray-400 text-sm">Virtual & In-Person</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-lime-300 text-sm font-medium">
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                    Hybrid Event Format
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">500+ Attendees</h3>
                      <p className="text-gray-400 text-sm">Expected Registration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    Industry Professionals
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="space-y-4">
              <Link 
                href="/event" 
                className="group relative block w-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative flex items-center justify-center px-8 py-5 bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-lg">See Full Event</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>

              <a 
                href="#register" 
                className="group relative block w-full"
              >
                <div className="flex items-center justify-center px-8 py-5 border-2 border-white/20 text-white font-bold rounded-2xl backdrop-blur-xl hover:border-lime-400/50 hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
                  <span className="flex items-center gap-3">
                    <span className="text-lg">Quick Register</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>

            {/* Enhanced highlights */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-lime-400 to-emerald-400 rounded-full"></span>
                What to expect:
              </h3>
              <div className="space-y-4">
                {[
                  { icon: '🚀', text: 'Live product demos & hands-on workshops', color: 'from-lime-400 to-emerald-400' },
                  { icon: '🤝', text: 'Networking with 500+ event professionals', color: 'from-blue-400 to-purple-400' },
                  { icon: '📊', text: 'Expert panels on event technology trends', color: 'from-orange-400 to-red-400' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 delay-${index * 100}`}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="text-gray-200 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Enhanced carousel (3 columns) */}
          <div className={`xl:col-span-3 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Floating live preview badge */}
              <div className="absolute top-6 right-6 z-30 group">
                <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 border border-lime-400/30 shadow-xl hover:scale-110 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping absolute"></div>
                      <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    </div>
                    <span className="text-lime-300 text-sm font-bold uppercase tracking-wider">Live Preview</span>
                  </div>
                </div>
              </div>

              {/* Enhanced carousel with glow effect */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 via-emerald-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative">
                  <EventCarousel slides={slides} />
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 left-6 right-6 flex justify-center">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-6 text-center">
                    <div className="text-center">
                      <div className="text-lime-300 font-bold text-lg">3</div>
                      <div className="text-gray-400 text-xs">Sections</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">5+</div>
                      <div className="text-gray-400 text-xs">Features</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-purple-300 font-bold text-lg">∞</div>
                      <div className="text-gray-400 text-xs">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes particleMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  )
}

export default EventHighlight
