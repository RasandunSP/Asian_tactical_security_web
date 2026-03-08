// Inspired by @shadcnblocks/feature43 to present mission, vision, and values.
import Image from "next/image"

const highlights = [
  {
    title: "Training for the Private Security Sector",
    description:
      "A premier training academy professionalizing the private security workforce with comprehensive modules: physical fitness, discipline, ethical conduct, legal frameworks, and modern security equipment to meet international standards.",
    image: "/Hero_caro/20231209_BLP508.jpg",
  },
  {
    title: "Civilian self-defense",
    description:
      "Specialized workshops and training courses that empower the public with personal safety, situational awareness, and practical defence techniques through non-lethal and tactical methods.",
    image: "/Hero_caro/6f8066266e5cd7e79134b0347368ea550d252540.jpg",
  },
  {
    title: "Risk assessment and Threat analysis",
    description:
      "Expert security audits, protocol evaluation, and data-driven strategies to identify vulnerabilities and mitigate risks for corporate, industrial, and individual clients.",
    image: "/Hero_caro/800x450.jpg",
  },
  {
    title: "Commercial security training",
    description:
      "Specialized training for high-value assets and business premises, including Cash-in-Transit (CIT) operations, armored vehicle protocols, and emergency response during transit.",
    image: "/Hero_caro/WhatsApp Image 2026-03-08 at 16.10.37 (1).jpeg",
  },
  {
    title: "Consulting Programs development",
    description:
      "Strategic partnership in developing customized security programs, SOPs, and emergency response plans—holistic blueprints integrating technology, manpower, and management for sustainable security solutions.",
    image: "/Hero_caro/20231209_BLP508.jpg",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white dark:bg-[#2a2a2a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <div className="mb-16 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Why TSES</p>
          <h2 className="mt-4 text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Our Commitment: Strength, Precision, Integrity</h2>
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

