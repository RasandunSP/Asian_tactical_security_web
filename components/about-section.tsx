// Inspired by @shadcnblocks/about3, tailored to highlight TST history and expertise.
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 px-4 pt-12 sm:pt-16 pb-16 sm:pb-24 md:grid-cols-2 md:items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">About Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Asian Tactical Security Training Pvt Ltd</h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#111827]/90 dark:text-[#F1F5F9]/80">
            A specialized tactical training company founded by seasoned military and law enforcement professionals. We deliver
            realistic, legally compliant, and effective defence training to police units, private security teams, corporations, and
            civilians who demand the highest standards.
          </p>
        </div>
        <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#2a2a2a] p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#B8860B]">Core Expertise</h3>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-[#111827] dark:text-[#F1F5F9]">
            {[
              "Krav Maga and civilian self-defence programs",
              "Arrest & control tactics for law enforcement",
              "Threat, risk, and vulnerability analysis",
              "Mission-ready curriculum design",
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

