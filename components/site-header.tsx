"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Home", icon: Briefcase },
    { href: "/event", label: "Event", icon: Briefcase },
    { href: "#features", label: "Features", icon: Tag },
    { href: "#faq", label: "FAQ", icon: HelpCircle },
    { href: "#blog", label: "Blog", icon: FileText },
    { href: "#about", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full shadow-sm border border-white/4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="h-5 w-5 bg-gradient-to-br from-lime-300 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
              C
            </div>
            <span className="font-semibold tracking-wide text-white">Colab</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => {
              const isActive = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href))
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition-colors ${
                    isActive ? "text-lime-300 font-semibold" : "hover:text-purple-300 text-gray-300"
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-200 hover:bg-gray-800 rounded-lg px-6 py-2.5 bg-transparent"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <div className="h-6 w-6 bg-gradient-to-br from-lime-300 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    C
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Colab</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4 space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-600 text-gray-200 hover:bg-gray-800 rounded-lg bg-transparent"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
