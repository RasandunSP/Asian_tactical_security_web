"use client"

// Inspired by @shadcnblocks/feature13 to showcase the TST service catalog.
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Shield,
  LayoutDashboard,
  Users2,
  Target,
  GraduationCap,
  ClipboardCheck,
  X,
  ArrowRight,
  BadgeCheck,
  Building2,
  UserRound,
  BookOpenCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Law Enforcement Tactical Training",
    description: "Enhance the effectiveness, safety, and professionalism of police and security forces.",
    icon: ShieldCheck,
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.07.36.jpeg",
  },
  {
    title: "Close Protection Training",
    description: "Elite-level instruction for high-stakes environments where personal security is paramount.",
    icon: Shield,
    image: "/Hero_caro/WhatsApp Image 2026-03-08 at 16.10.37 (1).jpeg",
  },
  {
    title: "Commercial Security Services",
    description: "Raise the standards of private security personnel serving commercial and corporate facilities.",
    icon: LayoutDashboard,
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.04.48.jpeg",
  },
  {
    title: "Civilian Self-Defence (Krav Maga)",
    description: "Scenario-based Krav Maga, arrest & control, and threat analysis for everyday protection.",
    icon: Users2,
    image: "/Hero_caro/WhatsApp Image 2026-03-08 at 16.10.37.jpeg",
  },
  {
    title: "Risk Assessment & Threat Analysis",
    description: "Comprehensive reviews identifying vulnerabilities and mitigation strategies.",
    icon: Target,
    image: "/Hero_caro/20231209_BLP508.jpg",
  },
  {
    title: "Tactical Workshops & Seminars",
    description: "Specialized sessions that keep teams sharp on emerging tactics and doctrines.",
    icon: GraduationCap,
    image: "/Hero_caro/WhatsApp Image 2026-04-29 at 05.52.33.jpeg",
  },
  {
    title: "Consulting & Program Development",
    description: "Tailored curriculum and program design aligned to each organization's mission.",
    icon: ClipboardCheck,
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.08.06.jpeg",
  },
]

type DetailCardId = "close-protection" | "civilian-self-defence" | "commercial-security" | "strategic-consulting"

type DetailCard = {
  id: DetailCardId
  title: string
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  overview: string
  sectionTitle: string
  bullets: string[]
  suitableForTitle: string
  suitableFor: string
}

const detailCards: DetailCard[] = [
  {
    id: "close-protection",
    title: "CLOSE PROTECTION & EXECUTIVE SECURITY",
    icon: BadgeCheck,
    overview:
      "The protection of high-profile individuals requires far more than physical presence — it requires anticipation, discretion, planning, and decisive action. Our Close Protection & Executive Security services are designed to develop elite protective officers capable of operating in public, corporate, diplomatic, and private environments without compromising client comfort or reputation.\n\nWe focus on preventive security architecture, discreet movement management, and rapid emergency response to ensure uninterrupted client safety at all times.",
    sectionTitle: "Operational Training Areas",
    bullets: [
      "Advance reconnaissance and venue security assessment",
      "Executive escort formations and extraction procedures",
      "Route planning and movement security",
      "Motorcade discipline and defensive driving principles",
      "Surveillance detection and counter-surveillance",
      "Protective intelligence gathering",
      "Client etiquette, protocol, and confidentiality",
    ],
    suitableForTitle: "Suitable For",
    suitableFor: "VIP Security Personnel • Corporate Executive Protection Teams • Diplomatic Security Units • Private Security Contractors",
  },
  {
    id: "civilian-self-defence",
    title: "CIVILIAN SELF-DEFENCE | KRAV MAGA SYSTEM",
    icon: UserRound,
    overview:
      "Personal security is no longer optional in today’s unpredictable environment. Our Civilian Self-Defence programs are based on reality-driven Krav Maga principles developed to provide immediate, instinctive, and effective responses to real-world violence.\n\nThis training is structured for civilians, professionals, students, and families seeking practical skills that can be applied under fear, stress, and surprise. Emphasis is placed not only on physical defense, but also on awareness, prevention, and survival mindset development.",
    sectionTitle: "Training Focus Areas",
    bullets: [
      "Situational awareness and early threat recognition",
      "Defense against grabs, chokes, and common assaults",
      "Effective striking and vulnerable target engagement",
      "Defence against knives, sticks, and improvised weapons",
      "Ground survival and emergency recovery movement",
      "Adrenal stress conditioning and scenario drills",
      "Family protection and third-party defense principles",
    ],
    suitableForTitle: "Suitable For",
    suitableFor: "Private Individuals • Women • Students • Corporate Staff • Families • Personal Safety Programs",
  },
  {
    id: "commercial-security",
    title: "COMMERCIAL SECURITY SOLUTIONS",
    icon: Building2,
    overview:
      "Businesses today require more than guards at the gate — they require structured, measurable, and technology-supported security systems that actively protect people, property, and operational continuity.\n\nOur Commercial Security Solutions are designed to assist organizations in identifying vulnerabilities, improving internal control, strengthening incident readiness, and integrating physical guarding with modern surveillance systems.",
    sectionTitle: "Service Capabilities",
    bullets: [
      "Security risk surveys and vulnerability audits",
      "Access control systems and movement management",
      "CCTV monitoring assessment and surveillance planning",
      "Loss prevention and asset protection strategies",
      "Emergency evacuation and incident response planning",
      "Security personnel deployment standards",
      "Internal reporting and supervision procedures",
    ],
    suitableForTitle: "Suitable For",
    suitableFor:
      "Corporate Offices • Hotels • Retail Facilities • Warehouses • Schools • Private Institutions • Residential Complexes",
  },
  {
    id: "strategic-consulting",
    title: "STRATEGIC SECURITY CONSULTING",
    icon: BookOpenCheck,
    overview:
      "Security failures are often the result of poor planning rather than lack of manpower. Our Strategic Security Consulting division provides institutions and business leaders with expert guidance in developing long-term protective frameworks, operational procedures, and organizational resilience strategies.\n\nWe help organizations transition from reactive security to proactive threat management through practical advisory support and internationally aligned security planning.",
    sectionTitle: "Consulting Areas",
    bullets: [
      "Enterprise risk and vulnerability analysis",
      "Security policy drafting and SOP development",
      "Crisis management and emergency command structures",
      "Protective intelligence and threat forecasting",
      "Internal investigation support systems",
      "Security manpower evaluation and restructuring",
      "Business continuity and resilience planning",
    ],
    suitableForTitle: "Suitable For",
    suitableFor: "Corporate Organizations • Government Institutions • Educational Campuses • Healthcare Facilities • Private Enterprises",
  },
]

function normalizeForMatch(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim()
}

function matchDetailCardId(serviceTitle: string): DetailCardId | null {
  const t = normalizeForMatch(serviceTitle)
  if (t.includes("close protection")) return "close-protection"
  if (t.includes("commercial security")) return "commercial-security"
  if (t.includes("civilian self defence") || t.includes("civilian self defense") || t.includes("krav maga")) return "civilian-self-defence"
  if (t.includes("consulting") || t.includes("program development")) return "strategic-consulting"
  return null
}

function serviceImageForDetailCardId(id: DetailCardId): string | null {
  switch (id) {
    case "close-protection":
      return services.find((s) => matchDetailCardId(s.title) === "close-protection")?.image ?? null
    case "commercial-security":
      return services.find((s) => matchDetailCardId(s.title) === "commercial-security")?.image ?? null
    case "strategic-consulting":
      return services.find((s) => matchDetailCardId(s.title) === "strategic-consulting")?.image ?? null
    case "civilian-self-defence":
      return services.find((s) => matchDetailCardId(s.title) === "civilian-self-defence")?.image ?? null
    default:
      return null
  }
}

function searchableDetailText(card: DetailCard) {
  return normalizeForMatch(
    [
      card.title,
      card.overview,
      card.sectionTitle,
      ...card.bullets,
      card.suitableForTitle,
      card.suitableFor,
    ].join(" ")
  )
}

export function ServicesSection() {
  // Create infinite loop by tripling the array
  const duplicatedServices = [...services, ...services, ...services]
  const startIndex = services.length // Start in the middle section
  
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeDetailId, setActiveDetailId] = useState<DetailCardId | null>(null)
  const [activeServiceTitle, setActiveServiceTitle] = useState<string | null>(null)
  const [activeServiceImage, setActiveServiceImage] = useState<string | null>(null)
  const [detailSearch, setDetailSearch] = useState("")
  const resumeAutoplayTimeoutRef = useRef<number | null>(null)

  // Calculate card width and initialize scroll position
  useEffect(() => {
    const servicesLength = services.length
    const updateCardWidth = () => {
      if (scrollContainerRef.current) {
        const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement | null
        if (firstCard) {
          cardWidthRef.current = firstCard.getBoundingClientRect().width + 24 // card width + gap
          // Initialize scroll to middle section
          if (scrollContainerRef.current.scrollLeft === 0) {
            scrollContainerRef.current.scrollTo({
              left: servicesLength * cardWidthRef.current,
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

    const servicesLength = services.length
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // If we're at the end of middle section, loop to start of middle section
        if (next >= servicesLength * 2) {
          return servicesLength
        }
        return next
      })
    }, 3000) // Auto-slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning])

  // Fullscreen modal UX: body scroll lock + ESC
  useEffect(() => {
    if (!isModalOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isModalOpen])

  // Handle scroll position
  useEffect(() => {
    if (scrollContainerRef.current && cardWidthRef.current > 0) {
      const servicesLength = services.length
      const scrollPosition = currentIndex * cardWidthRef.current
      
      // Check if we need to jump (at boundaries for seamless loop)
      if (currentIndex >= servicesLength * 2) {
        // Jump to middle section without animation
        setIsTransitioning(true)
        const targetIndex = servicesLength + (currentIndex % servicesLength)
        scrollContainerRef.current.scrollTo({
          left: targetIndex * cardWidthRef.current,
          behavior: "auto",
        })
        setTimeout(() => {
          setCurrentIndex(targetIndex)
          setIsTransitioning(false)
        }, 50)
      } else if (currentIndex < servicesLength) {
        // Jump to end of middle section without animation
        setIsTransitioning(true)
        const targetIndex = servicesLength + currentIndex
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
    if (resumeAutoplayTimeoutRef.current) window.clearTimeout(resumeAutoplayTimeoutRef.current)
    resumeAutoplayTimeoutRef.current = window.setTimeout(() => setIsAutoPlaying(true), 6500)
    const servicesLength = services.length
    setCurrentIndex((prev) => {
      const next = prev - 1
      // If we're at the start of middle section, jump to end of middle section (seamless loop)
      if (next < servicesLength) {
        return servicesLength * 2 - 1
      }
      return next
    })
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    if (resumeAutoplayTimeoutRef.current) window.clearTimeout(resumeAutoplayTimeoutRef.current)
    resumeAutoplayTimeoutRef.current = window.setTimeout(() => setIsAutoPlaying(true), 6500)
    const servicesLength = services.length
    setCurrentIndex((prev) => {
      const next = prev + 1
      // If we're at the end of middle section, jump to start of middle section (seamless loop)
      if (next >= servicesLength * 2) {
        return servicesLength
      }
      return next
    })
  }

  const openServicesModal = (serviceTitle: string, serviceImage: string) => {
    const matched = matchDetailCardId(serviceTitle)
    setActiveDetailId(matched)
    setActiveServiceTitle(serviceTitle)
    setActiveServiceImage(serviceImage)
    setDetailSearch("")
    setIsModalOpen(true)
  }

  const activeDetail = activeDetailId ? detailCards.find((c) => c.id === activeDetailId) : null
  const activeDetailImage = activeDetailId ? serviceImageForDetailCardId(activeDetailId) : null
  const filteredDetailCards = detailCards.filter((c) =>
    searchableDetailText(c).includes(normalizeForMatch(detailSearch))
  )

  return (
    <section id="services" className="bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24">
        <div className="mb-12">
          <div className="text-left">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Services</p>
                <h2 className="mt-4 text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Comprehensive Tactical Training Suite</h2>
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="max-w-2xl text-base sm:text-lg text-[#111827]/90 dark:text-[#F1F5F9]/80">
                Modular programs that scale from individual readiness to full organizational capability development.
              </p>
              <div className="flex gap-2 self-start sm:self-auto">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white dark:border-[#B8860B] dark:text-[#B8860B]"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white dark:border-[#B8860B] dark:text-[#B8860B]"
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
            <button
              key={`${service.title}-${index}`}
              type="button"
              onClick={() => openServicesModal(service.title, image)}
              className="group min-w-[calc(100vw-2rem)] sm:min-w-[320px] sm:max-w-[380px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#2a2a2a] text-left shadow-sm transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1a1a1a]"
              aria-label={`Open details for ${service.title}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${service.title} - Asian Tactical Security Training service`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/95 dark:bg-[#2a2a2a] p-3 text-[#B8860B] shadow-md">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#111827] dark:text-[#F1F5F9]">{service.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#111827]/85 dark:text-[#F1F5F9]/75">{service.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B]">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </button>
          ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Service details"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false)
          }}
        >
          <div className="flex h-full w-full items-center justify-center p-2 sm:p-6">
            <div className="flex w-full max-w-6xl max-h-[94vh] sm:max-h-[92vh] flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111111] shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="flex items-center justify-between gap-3 sm:gap-4 border-b border-[#E5E7EB] dark:border-[#2a2a2a] px-4 sm:px-8 py-3 sm:py-4">
                <div className="min-w-0">
                  <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Services</p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
                    Comprehensive Tactical Training Suite
                  </h3>
                  {activeServiceTitle && (
                    <p className="mt-1 text-xs sm:text-sm text-[#111827]/70 dark:text-[#F1F5F9]/70 line-clamp-1">
                      Opened from: {activeServiceTitle}
                    </p>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white dark:border-[#B8860B] dark:text-[#B8860B]"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
                <div className="hidden lg:block w-full lg:w-[420px] max-h-[40vh] lg:max-h-none shrink-0 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] dark:border-[#2a2a2a] p-3 sm:p-6 overflow-auto">
                  <div className="sticky top-0 z-10 bg-white/90 dark:bg-[#111111]/90 backdrop-blur pb-3 sm:pb-4">
                    <label className="block text-xs font-heading font-semibold uppercase tracking-[0.3em] text-[#111827]/70 dark:text-[#F1F5F9]/70">
                      Search
                    </label>
                    <input
                      value={detailSearch}
                      onChange={(e) => setDetailSearch(e.target.value)}
                      placeholder="Search the 5 detailed cards…"
                      className="mt-2 w-full rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] px-4 py-3 text-sm text-[#111827] dark:text-[#F1F5F9] placeholder:text-[#111827]/50 dark:placeholder:text-[#F1F5F9]/40 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#111111]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {filteredDetailCards.map((card) => {
                      const Icon = card.icon
                      const isActive = activeDetailId === card.id
                      return (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => setActiveDetailId(card.id)}
                          className={[
                            "rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#111111]",
                            isActive
                              ? "border-[#B8860B]/60 bg-[#B8860B]/10"
                              : "border-[#E5E7EB] dark:border-[#2a2a2a] bg-[#F9FAFB] dark:bg-[#1a1a1a] hover:border-[#B8860B]/40",
                          ].join(" ")}
                          aria-pressed={isActive}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex rounded-xl bg-white dark:bg-[#111111] p-2 text-[#B8860B] shadow-sm border border-[#E5E7EB] dark:border-[#2a2a2a]">
                              <Icon className="h-5 w-5" aria-hidden={true} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-heading font-semibold text-[#111827] dark:text-[#F1F5F9] line-clamp-2">
                                {card.title}
                              </div>
                              <div className="mt-2 text-xs text-[#111827]/70 dark:text-[#F1F5F9]/70">View details</div>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                    {filteredDetailCards.length === 0 && (
                      <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-[#F9FAFB] dark:bg-[#1a1a1a] p-4 text-sm text-[#111827]/80 dark:text-[#F1F5F9]/75">
                        No matches. Try a different search.
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 overflow-auto">
                  <div className="mx-auto max-w-3xl px-4 sm:px-8 py-5 sm:py-10">
                    <div className="lg:hidden mb-4">
                      <label className="block text-xs font-heading font-semibold uppercase tracking-[0.3em] text-[#111827]/70 dark:text-[#F1F5F9]/70">
                        Search
                      </label>
                      <input
                        value={detailSearch}
                        onChange={(e) => setDetailSearch(e.target.value)}
                        placeholder="Search the detailed services…"
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] px-4 py-3 text-sm text-[#111827] dark:text-[#F1F5F9] placeholder:text-[#111827]/50 dark:placeholder:text-[#F1F5F9]/40 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#111111]"
                      />

                      {detailSearch.trim().length > 0 && (
                        <div className="mt-3 overflow-hidden rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-white dark:bg-[#111111] shadow-lg">
                          {filteredDetailCards.length > 0 ? (
                            <div className="max-h-56 overflow-auto">
                              {filteredDetailCards.map((card) => {
                                const Icon = card.icon
                                const isActive = activeDetailId === card.id
                                return (
                                  <button
                                    key={card.id}
                                    type="button"
                                    onClick={() => {
                                      setActiveDetailId(card.id)
                                      setDetailSearch("")
                                    }}
                                    className={[
                                      "w-full px-4 py-3 text-left transition",
                                      "border-b border-[#E5E7EB] dark:border-[#2a2a2a] last:border-b-0",
                                      isActive ? "bg-[#B8860B]/10" : "hover:bg-[#F9FAFB] dark:hover:bg-[#1a1a1a]",
                                    ].join(" ")}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="mt-0.5 inline-flex rounded-xl bg-[#B8860B]/10 p-2 text-[#B8860B] border border-[#B8860B]/20">
                                        <Icon className="h-4 w-4" aria-hidden={true} />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-heading font-semibold text-[#111827] dark:text-[#F1F5F9] line-clamp-2">
                                          {card.title}
                                        </div>
                                        <div className="mt-1 text-xs text-[#111827]/70 dark:text-[#F1F5F9]/70">Tap to open</div>
                                      </div>
                                    </div>
                                  </button>
                                )
                              })}
                            </div>
                          ) : (
                            <div className="px-4 py-3 text-sm text-[#111827]/80 dark:text-[#F1F5F9]/75">
                              No matches. Try a different search.
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {(activeDetailImage || activeServiceImage) && (
                      <div className="mb-6 overflow-hidden rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-[#F9FAFB] dark:bg-[#1a1a1a]">
                        <div className="relative h-36 sm:h-56 w-full">
                          <Image
                            src={activeDetailImage || activeServiceImage || ""}
                            alt={
                              activeDetail
                                ? `${activeDetail.title} image`
                                : activeServiceTitle
                                  ? `${activeServiceTitle} image`
                                  : "Service image"
                            }
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 800px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                          {(activeDetail?.title || activeServiceTitle) && (
                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                              <div className="inline-flex rounded-2xl bg-white/95 dark:bg-[#111111]/90 px-3 sm:px-4 py-2 text-xs sm:text-sm font-heading font-semibold text-[#111827] dark:text-[#F1F5F9] shadow-md">
                                {activeDetail?.title || activeServiceTitle}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {activeDetail ? (
                      <>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="inline-flex rounded-2xl bg-[#B8860B]/10 p-2.5 sm:p-3 text-[#B8860B] border border-[#B8860B]/20">
                            <activeDetail.icon className="h-7 w-7" aria-hidden={true} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
                              {activeDetail.title}
                            </h4>
                            <p className="mt-3 whitespace-pre-line text-sm sm:text-lg text-[#111827]/85 dark:text-[#F1F5F9]/80">
                              {activeDetail.overview}
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-[#F9FAFB] dark:bg-[#1a1a1a] p-5 sm:p-6">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-white dark:bg-[#111111] p-2 text-[#B8860B] border border-[#E5E7EB] dark:border-[#2a2a2a]">
                              <ShieldCheck className="h-5 w-5" aria-hidden={true} />
                            </div>
                            <h5 className="text-lg sm:text-xl font-heading font-semibold text-[#111827] dark:text-[#F1F5F9]">
                              {activeDetail.sectionTitle}
                            </h5>
                          </div>
                          <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#111827]/85 dark:text-[#F1F5F9]/80">
                            {activeDetail.bullets.map((b) => (
                              <li key={b} className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B8860B]" aria-hidden={true} />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-white dark:bg-[#111111] p-5 sm:p-6">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-[#B8860B]/10 p-2 text-[#B8860B] border border-[#B8860B]/20">
                              <Target className="h-5 w-5" aria-hidden={true} />
                            </div>
                            <h5 className="text-lg sm:text-xl font-heading font-semibold text-[#111827] dark:text-[#F1F5F9]">
                              {activeDetail.suitableForTitle}
                            </h5>
                          </div>
                          <p className="mt-3 text-sm sm:text-base text-[#111827]/85 dark:text-[#F1F5F9]/80">
                            {activeDetail.suitableFor}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#2a2a2a] bg-[#F9FAFB] dark:bg-[#1a1a1a] p-6 sm:p-10">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex rounded-2xl bg-[#B8860B]/10 p-3 text-[#B8860B] border border-[#B8860B]/20">
                            <Shield className="h-7 w-7" aria-hidden={true} />
                          </div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
                              Select a detailed service card
                            </h4>
                            <p className="mt-2 text-sm sm:text-base text-[#111827]/80 dark:text-[#F1F5F9]/75">
                              Choose one of the five cards on the left to view the full details inside this popup.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

