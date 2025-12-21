// Inspired by @shadcnblocks/hero3 with TST-specific copy and CTA.
import { ShieldPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"

export function Hero() {
  return (
    <section id="home" className="relative bg-white dark:bg-[#1a1a1a] text-white">
      <HeroCarousel />
      <div className="relative z-10 mx-auto flex min-h-[85vh] sm:min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-6 sm:gap-8 px-4 pt-20 sm:pt-28 pb-20 sm:pb-32 text-center backdrop-blur-[2px]">
        <p className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8),_0_0_20px_rgb(0_0_0_/_0.5)]">
          <ShieldPlus className="h-4 w-4 sm:h-5 sm:w-5 text-[#B8860B] drop-shadow-lg" aria-hidden="true" />
          <span className="whitespace-nowrap">Preparedness · Protection · Performance</span>
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.9),_0_2px_6px_rgb(0_0_0_/_0.7),_0_0_30px_rgb(0_0_0_/_0.6)] px-2">
          Empowering Asia&apos;s tactical professionals with elite training.
        </h1>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/95 [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8),_0_0_20px_rgb(0_0_0_/_0.5)] px-2">
          We provide practical, effective, and ethical tactical instruction that strengthens safety, resilience, and mission readiness
          for law enforcement, private security, organizations, and civilians across the region.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
          <Button asChild className="bg-[#B8860B] text-white hover:bg-[#9A7209] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg w-full sm:w-auto">
            <a href="#services">View Services</a>
          </Button>
          <Button variant="outline" asChild className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base backdrop-blur-sm w-full sm:w-auto">
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

