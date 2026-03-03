import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import EventHighlight from "@/components/event-highlight"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://colab.events/#pricing",
    name: "Pricing Plans",
    description:
      "Colab event organizer pricing plans - Starter, Professional, and Enterprise packages for all event sizes",
    url: "https://colab.events/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Event Organization Services",
      description: "Professional event organization services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "59",
          priceCurrency: "USD",
          description: "Up to 100 guests with basic event planning tools",
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "129",
          priceCurrency: "USD",
          description: "Up to 1,000 guests with advanced planning and team collaboration",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Unlimited guests with full API access and 24/7 support",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://colab.events/",
    name: "Colab | Event Organizer Platform for Seamless Collaboration",
    description:
      "Colab makes event organization effortless. Plan, coordinate, and execute perfect events with seamless team collaboration and real-time management.",
    url: "https://colab.events/",
    mainEntity: {
      "@type": "Organization",
      name: "Colab",
      url: "https://colab.events",
      sameAs: [
        "https://twitter.com/colabevents",
        "https://www.youtube.com/@colabevents",
        "https://instagram.com/colabevents",
        "https://discord.gg/colab",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://colab.events/#pricing",
        name: "Pricing Section",
        url: "https://colab.events/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <EventHighlight />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
