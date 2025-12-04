// Inspired by @shadcnblocks/feature43 to present mission, vision, and values.
import Image from "next/image"

const highlights = [
  {
    title: "Integrity & Discipline",
    description:
      "Grounded in core values that prioritize discipline, accountability, and ethical conduct in every engagement.",
    image: "/Hero_caro/487316894_1765072690919660_301362420649754947_n.jpg",
  },
  {
    title: "Preparedness & Accountability",
    description:
      "Programs built to elevate readiness and professionalism, ensuring teams respond decisively when it matters most.",
    image: "/Hero_caro/488377084_1771476383612624_2769082243582401381_n.jpg",
  },
  {
    title: "Excellence & Vision",
    description:
      "Focused on becoming Asia's leading authority in tactical defence through innovation and relentless improvement.",
    image: "/Hero_caro/466119558_18204903907293289_3948555336623019410_n.jpg",
  },
  {
    title: "Professional Expertise",
    description:
      "Developed by veteran military and law enforcement instructors who translate field experience into training mastery.",
    image: "/Hero_caro/485094240_1755263041900625_736837625416320923_n.jpg",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8860B]">Why TST</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1F2937]">Our Commitment: Strength, Precision, Integrity</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {highlights.map(({ image, ...highlight }) => (
            <article
              key={highlight.title}
              className="group flex gap-6 rounded-2xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#F59E0B]/40 hover:shadow-lg"
            >
              {/* Left section: Square image (1:1 ratio) */}
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="128px"
                />
              </div>
              {/* Right section: Text aligned to right */}
              <div className="flex flex-1 flex-col items-end text-right">
                <h3 className="text-2xl font-semibold text-[#B8860B]">{highlight.title}</h3>
                <p className="mt-4 text-[#1F2937]/80">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

