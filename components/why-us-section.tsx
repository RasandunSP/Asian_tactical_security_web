// Inspired by @shadcnblocks/feature43 to present mission, vision, and values.
import Image from "next/image"

const highlights = [
  {
    title: "Integrity & Discipline",
    description:
      "Grounded in core values that prioritize discipline, accountability, and ethical conduct in every engagement.",
    image: "/Hero_caro/20231209_BLP508.jpg",
  },
  {
    title: "Preparedness & Accountability",
    description:
      "Programs built to elevate readiness and professionalism, ensuring teams respond decisively when it matters most.",
    image: "/Hero_caro/6f8066266e5cd7e79134b0347368ea550d252540.jpg",
  },
  {
    title: "Excellence & Vision",
    description:
      "Focused on becoming Asia's leading authority in tactical defence through innovation and relentless improvement.",
    image: "/Hero_caro/800x450.jpg",
  },
  {
    title: "Professional Expertise",
    description:
      "Developed by veteran military and law enforcement instructors who translate field experience into training mastery.",
    image: "/Hero_caro/images.jpeg",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white dark:bg-[#2a2a2a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <div className="mb-16 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Why TST</p>
          <h2 className="mt-4 text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">Our Commitment: Strength, Precision, Integrity</h2>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {highlights.map(({ image, ...highlight }) => (
            <article
              key={highlight.title}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a] p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-lg"
            >
              {/* Image section */}
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg mx-auto sm:mx-0">
                <Image
                  src={image}
                  alt={highlight.title}
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

