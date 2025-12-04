// Inspired by @shadcnblocks/about3, tailored to highlight TST history and expertise.
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-24 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8860B]">About Us</p>
          <h2 className="text-4xl font-bold text-[#1F2937]">Asian Tactical Security Training Pvt Ltd</h2>
          <p className="text-lg leading-relaxed text-[#1F2937]/80">
            A specialized tactical training company founded by seasoned military and law enforcement professionals. We deliver
            realistic, legally compliant, and effective defence training to police units, private security teams, corporations, and
            civilians who demand the highest standards.
          </p>
        </div>
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#B8860B]">Core Expertise</h3>
          <ul className="mt-6 space-y-3 text-[#1F2937]">
            {[
              "Krav Maga and civilian self-defence programs",
              "Arrest & control tactics for law enforcement",
              "Threat, risk, and vulnerability analysis",
              "Mission-ready curriculum design",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#B8860B]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

