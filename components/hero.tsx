// Inspired by @shadcnblocks/hero3 with TST-specific copy and CTA.
import { ShieldPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#F9FAFB] to-white">
      <HeroCarousel />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-8 px-4 pt-28 pb-32 text-center backdrop-blur-[2px]">
        <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8),_0_0_20px_rgb(0_0_0_/_0.5)]">
          <ShieldPlus className="h-5 w-5 text-[#B8860B] drop-shadow-lg" aria-hidden="true" />
          Preparedness · Protection · Performance
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.9),_0_2px_6px_rgb(0_0_0_/_0.7),_0_0_30px_rgb(0_0_0_/_0.6)] sm:text-5xl md:text-6xl">
          Empowering Asia&apos;s tactical professionals with elite training.
        </h1>
        <p className="max-w-3xl text-lg text-white/95 [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8),_0_0_20px_rgb(0_0_0_/_0.5)] sm:text-xl">
          We provide practical, effective, and ethical tactical instruction that strengthens safety, resilience, and mission readiness
          for law enforcement, private security, organizations, and civilians across the region.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-[#B8860B] text-white hover:bg-[#9A7209] px-8 py-6 text-base shadow-lg">
            <a href="#services">View Services</a>
          </Button>
          <Button variant="outline" asChild className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-6 text-base backdrop-blur-sm">
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

