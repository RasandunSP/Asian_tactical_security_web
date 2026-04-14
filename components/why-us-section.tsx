// Inspired by @shadcnblocks/feature43 to present mission, vision, and values.
import Image from "next/image"

const highlights = [
  {
    title: "Real-world experience",
    description:
      "Instruction designed and delivered by professionals with operational experience in military and law enforcement environments.",
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.07.36.jpeg",
  },
  {
    title: "Certified professional trainers",
    description:
      "Programs led by qualified instructors with internationally aligned training standards and a commitment to continuous improvement.",
    image: "/Hero_caro/WhatsApp Image 2026-03-08 at 16.10.37 (1).jpeg",
  },
  {
    title: "Practical, not theoretical training",
    description:
      "Scenario-based, hands-on learning built for real-world readiness rather than classroom-only concepts.",
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.05.22.jpeg",
  },
  {
    title: "Safety, legality & effectiveness",
    description:
      "Training emphasizes safe execution, legally compliant methods, and results you can rely on under pressure.",
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.04.48.jpeg",
  },
  {
    title: "Customized programs",
    description:
      "Tailored training pathways for organizations, aligned to your operational needs, risk profile, and mission requirements.",
    image: "/Hero_caro/WhatsApp Image 2026-04-11 at 18.08.06.jpeg",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white dark:bg-[#2a2a2a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <div className="mb-16 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Why Choose TST</p>
          <h2 className="mt-4 text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Preparedness is no longer optional; it is essential.</h2>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {highlights.map(({ image, ...highlight }, index) => (
            <article
              key={highlight.title}
              className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a] p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-lg ${index === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
            >
              {/* Image section */}
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg mx-auto sm:mx-0">
                <Image
                  src={image}
                  alt={`${highlight.title} - Asian Tactical Security Training core value`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
              {/* Text section */}
              <div className="flex flex-1 flex-col items-center sm:items-end text-center sm:text-right">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#B8860B]">{highlight.title}</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-[#111827]/90 dark:text-[#F1F5F9]/80">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

