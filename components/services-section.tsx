"use client"

// Inspired by @shadcnblocks/feature13 to showcase the TST service catalog.
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  Shield,
  ShieldCheck,
  Target,
  Users2,
} from "lucide-react"

const services = [
  {
    title: "Law Enforcement Tactical Training",
    description: "Enhance the effectiveness, safety, and professionalism of police and security forces.",
    icon: ShieldCheck,
    image: "/Hero_caro/20231209_BLP508.jpg",
  },
  {
    title: "Close Protection Training",
    description: "Elite-level instruction for high-stakes environments where personal security is paramount.",
    icon: Shield,
    image: "/Hero_caro/6f8066266e5cd7e79134b0347368ea550d252540.jpg",
  },
  {
    title: "Commercial Security Services",
    description: "Raise the standards of private security personnel serving commercial and corporate facilities.",
    icon: LayoutDashboard,
    image: "/Hero_caro/800x450.jpg",
  },
  {
    title: "Civilian Self-Defence (Krav Maga)",
    description: "Scenario-based Krav Maga, arrest & control, and threat analysis for everyday protection.",
    icon: Users2,
    image: "/Hero_caro/images (1).jpeg",
  },
  {
    title: "Risk Assessment & Threat Analysis",
    description: "Comprehensive reviews identifying vulnerabilities and mitigation strategies.",
    icon: Target,
    image: "/Hero_caro/images (2).jpeg",
  },
  {
    title: "Tactical Workshops & Seminars",
    description: "Specialized sessions that keep teams sharp on emerging tactics and doctrines.",
    icon: GraduationCap,
    image: "/Hero_caro/images (3).jpeg",
  },
  {
    title: "Consulting & Program Development",
    description: "Tailored curriculum and program design aligned to each organization's mission.",
    icon: ClipboardCheck,
    image: "/Hero_caro/466514810_18205018228293289_3041223144192363336_n.jpg",
  },
]

export function ServicesSection() {
  // Create infinite loop by tripling the array
  const duplicatedServices = [...services, ...services, ...services]
  const startIndex = services.length // Start in the middle section
  
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(0)

  // Calculate card width and initialize scroll position
  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollContainerRef.current) {
        const firstCard = scrollContainerRef.current.querySelector("article")
        if (firstCard) {
          cardWidthRef.current = firstCard.getBoundingClientRect().width + 24 // card width + gap
          // Initialize scroll to middle section
          if (scrollContainerRef.current.scrollLeft === 0) {
            scrollContainerRef.current.scrollTo({
              left: services.length * cardWidthRef.current,
              behavior: "auto",
            })
          }
        }
      }
    }
    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [])

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // If we're at the end of middle section, loop to start of middle section
        if (next >= services.length * 2) {
          return services.length
        }
        return next
      })
    }, 3000) // Auto-slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning])

  // Handle scroll position
  useEffect(() => {
    if (scrollContainerRef.current && cardWidthRef.current > 0) {
      const scrollPosition = currentIndex * cardWidthRef.current
      
      // Check if we need to jump (at boundaries for seamless loop)
      if (currentIndex >= services.length * 2) {
        // Jump to middle section without animation
        setIsTransitioning(true)
        const targetIndex = services.length + (currentIndex % services.length)
        scrollContainerRef.current.scrollTo({
          left: targetIndex * cardWidthRef.current,
          behavior: "auto",
        })
        setTimeout(() => {
          setCurrentIndex(targetIndex)
          setIsTransitioning(false)
        }, 50)
      } else if (currentIndex < services.length) {
        // Jump to end of middle section without animation
        setIsTransitioning(true)
        const targetIndex = services.length + currentIndex
        scrollContainerRef.current.scrollTo({
          left: targetIndex * cardWidthRef.current,
          behavior: "auto",
        })
        setTimeout(() => {
          setCurrentIndex(targetIndex)
          setIsTransitioning(false)
        }, 50)
      } else {
        // Normal smooth scroll
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => {
      const next = prev - 1
      // If we're at the start of middle section, jump to end of middle section (seamless loop)
      if (next < services.length) {
        return services.length * 2 - 1
      }
      return next
    })
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => {
      const next = prev + 1
      // If we're at the end of middle section, jump to start of middle section (seamless loop)
      if (next >= services.length * 2) {
        return services.length
      }
      return next
    })
  }

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24">
        <div className="mb-12">
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8860B]">Services</p>
            <h2 className="mt-4 text-4xl font-bold text-[#1F2937]">Comprehensive Tactical Training Suite</h2>
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="max-w-2xl text-lg text-[#1F2937]/80">
                Modular programs that scale from individual readiness to full organizational capability development.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white"
                  aria-label="Next service"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -mx-4 px-4 md:-mx-8 md:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
          {duplicatedServices.map(({ icon: Icon, image, ...service }, index) => (
            <article
              key={`${service.title}-${index}`}
              className="group min-w-[380px] max-w-[380px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-[#FFF7E6] p-3 text-[#B8860B]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937]">{service.title}</h3>
                <p className="mt-3 text-[#1F2937]/75">{service.description}</p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

