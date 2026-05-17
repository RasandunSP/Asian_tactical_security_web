"use client"

// Inspired by @shadcnblocks/team1 for a clean leadership grid.
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Mr Sathis Thiramunige",
    role: "CEO",
    bio: "Karate (5th Dan), Krav Maga & Kapap (5th Dan), Kyusho pressure-point specialist, and multiple international instructor certifications.",
    image: "/Hero_caro/Team/CEO.png",
  },
  // {
  //   name: "Mr Indika Salgado",
  //   role: "Consultant & Advisor",
  //   bio: "President (Sri Lanka–China Business Co-operation Council) and Director at Dart Global Logistics and Logicentrix (Pvt) Ltd.",
  //   image: "/Hero_caro/Team/Consultant.png",
  // },
  {
    name: "Miss K L Vijini Hansini",
    role: "Secretary",
    bio: "ACMA (UK), CGMA. BSc. Accounting (Special) – University of Sri Jayewardenepura.",
    image: "/Hero_caro/Team/Vijini%20-%20Sec.jpeg",
  },
  {
    name: "Mrs Shamali",
    role: "Head of Corporate Communications",
    bio: "Oversees corporate communications and stakeholder coordination for training programs and partnerships.",
    image: "/Hero_caro/Team/Head of corporate comms.png",
  },
  {
    name: "Mr DGM Chinthaka",
    role: "Director – Training",
    bio: "Retired Chief Inspector, Special Task Force Sri Lanka (2005–2026) and a certified UN instructor.",
    image: "/Hero_caro/Team/director training.png",
  },
  /*
  {
    name: "Mr Mahendra Madusanka",
    role: "Chief Instructor",
    bio: "Taekwon Do (2nd Dan) and Krav Maga & Kapap practitioner delivering practical, scenario-based instruction.",
    image: "/Hero_caro/Team/chief instructor .png",
  },
  */
  {
    name: "Mr Stefano Maiocchi",
    role: "Instructor",
    bio: "Close protection and military trainer supporting executive security and high-risk readiness programs.",
    image: "/Hero_caro/Team/instructor - stefano.png",
  },
  {
    name: "Ms Dee Thomas",
    role: "Instructor",
    bio: "Close protection trainer specializing in protective operations for private and corporate security teams.",
    image: "/Hero_caro/Team/instructor - dee.png",
  },
  {
    name: "Mr Eustachio",
    role: "Instructor",
    bio: "Law enforcement and self-defence trainer with emphasis on control, compliance, and real-world safety.",
    image: "/Hero_caro/Team/Instructor - eustachio.png",
  },
  {
    name: "Mr Jem Hall",
    role: "Instructor",
    bio: "VIP and close protection trainer focused on threat prevention, rapid response, and client safety.",
    image: "/Hero_caro/Team/Instructor - Jem.png",
  },
  {
    name: "Mr Wad Shantha Upul Kumara",
    role: "Instructor",
    bio: "Martial arts and self-defence trainer delivering confidence-building skills and practical defensive tactics.",
    image: "/Hero_caro/Team/instructor- shantha.png",
  },
]

export function TeamSection() {
  // Create infinite loop by tripling the array
  const duplicatedTeam = [...team, ...team, ...team]
  const startIndex = team.length // Start in the middle section

  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(0)

  // Calculate card width and initialize scroll position
  useEffect(() => {
    const teamLength = team.length
    const updateCardWidth = () => {
      if (scrollContainerRef.current) {
        const firstCard = scrollContainerRef.current.querySelector("article")
        if (firstCard) {
          cardWidthRef.current = firstCard.getBoundingClientRect().width + 32 // card width + gap (gap-8)
          // Initialize scroll to middle section
          if (scrollContainerRef.current.scrollLeft === 0) {
            scrollContainerRef.current.scrollTo({
              left: teamLength * cardWidthRef.current,
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

    const teamLength = team.length
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // If we're at the end of middle section, loop to start of middle section
        if (next >= teamLength * 2) {
          return teamLength
        }
        return next
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning])

  // Handle scroll position
  useEffect(() => {
    if (scrollContainerRef.current && cardWidthRef.current > 0) {
      const teamLength = team.length
      const scrollPosition = currentIndex * cardWidthRef.current

      // Check if we need to jump (at boundaries for seamless loop)
      if (currentIndex >= teamLength * 2) {
        // Jump to middle section without animation
        setIsTransitioning(true)
        const targetIndex = teamLength + (currentIndex % teamLength)
        scrollContainerRef.current.scrollTo({
          left: targetIndex * cardWidthRef.current,
          behavior: "auto",
        })
        setTimeout(() => {
          setCurrentIndex(targetIndex)
          setIsTransitioning(false)
        }, 50)
      } else if (currentIndex < teamLength) {
        // Jump to end of middle section without animation
        setIsTransitioning(true)
        const targetIndex = teamLength + currentIndex
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
    const teamLength = team.length
    setCurrentIndex((prev) => {
      const next = prev - 1
      // If we're at the start of middle section, jump to end of middle section (seamless loop)
      if (next < teamLength) {
        return teamLength * 2 - 1
      }
      return next
    })
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    const teamLength = team.length
    setCurrentIndex((prev) => {
      const next = prev + 1
      // If we're at the end of middle section, jump to start of middle section (seamless loop)
      if (next >= teamLength * 2) {
        return teamLength
      }
      return next
    })
  }

  return (
    <section id="team" className="bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left">
          <div>
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Leadership</p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Meet the Team</h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#111827]/90 dark:text-[#F1F5F9]/80">
              Veteran professionals translating operational experience into instruction.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white dark:border-[#B8860B] dark:text-[#B8860B]"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10 rounded-full border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white dark:border-[#B8860B] dark:text-[#B8860B]"
              aria-label="Next team member"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:-mx-8 md:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {duplicatedTeam.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#2a2a2a] p-5 sm:p-6 text-center shadow-sm flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[320px] md:w-[calc((100%-4rem)/3)]"
              >
                <div className="relative mx-auto h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full bg-white dark:bg-[#1a1a1a] shadow-sm">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, 80px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl sm:text-2xl font-semibold text-[#B8860B]">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-heading font-semibold text-[#111827] dark:text-[#F1F5F9]">{member.name}</h3>
                <p className="text-xs sm:text-sm font-heading font-medium uppercase tracking-widest text-[#B8860B]">{member.role}</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#111827]/85 dark:text-[#F1F5F9]/80">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

