// Inspired by @shadcnblocks/about3, tailored to highlight TST history and expertise.
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[minmax(220px,320px)_1fr] md:items-stretch">
          <div className="order-1">
            <div className="relative mx-auto md:mx-0 w-full max-w-[320px] h-[240px] sm:h-[300px] md:h-full min-h-[320px] overflow-hidden rounded-3xl border border-[#E5E7EB] dark:border-[#404040] bg-white/80 dark:bg-[#1a1a1a] shadow-sm">
              <Image
                src="/TST logo/TST GOLD.png"
                alt="TST Gold Logo"
                fill
                className="object-contain p-6 sm:p-8"
                sizes="(max-width: 768px) 320px, 320px"
                priority
              />
            </div>
          </div>

          <div className="order-2 space-y-4 sm:space-y-6">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
              Asian Tactical Security Training Pvt Ltd
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#111827]/90 dark:text-[#F1F5F9]/80">
              Asian Tactical Security Training (TST) Pvt Ltd is a premier, specialized tactical training organization based in Sri Lanka.
              Pioneering the industry as the first specialized tactical training company in Sri Lanka, TST was founded by elite
              professionals with extensive backgrounds in military and law enforcement. We provide realistic, legally compliant, and
              highly effective defence training solutions for law enforcement, private security firms, corporate organizations, and
              civilians.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#2a2a2a] p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#B8860B]">Core Expertise</h3>
          <ul className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-[#111827] dark:text-[#F1F5F9]">
            {[
              "Law Enforcement Tactical Training",
              "Close Protection & Executive Security",
              "Civilian Self-Defence (Krav Maga)",
              "Commercial Security Training",
              "Risk Assessment & Threat Analysis",
              "Tactical Workshops & Seminars",
              "Consulting & Program Development",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-[#B8860B]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

