// Inspired by @shadcnblocks/team1 for a clean leadership grid.
const team = [
  {
    name: "Cmdr. R. Jayasinghe",
    role: "Founder & Lead Tactical Instructor",
    bio: "Former Special Forces commander specializing in close-quarter battle, VIP protection, and mission planning.",
  },
  {
    name: "Inspector M. Fernando",
    role: "Law Enforcement Programs",
    bio: "20+ years training police units on arrest & control, public order management, and officer safety.",
  },
  {
    name: "Capt. D. Perera",
    role: "Threat Intelligence & Risk",
    bio: "Develops bespoke threat analysis and risk mitigation frameworks for corporate and government clients.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-white dark:bg-[#1a1a1a]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8860B]">Leadership</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1F2937] dark:text-[#F1F5F9]">Meet the Team</h2>
          <p className="mt-3 text-lg text-[#1F2937]/80 dark:text-[#F1F5F9]/80">Veteran professionals translating operational experience into instruction.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl border border-[#E5E7EB] dark:border-[#404040] bg-white dark:bg-[#2a2a2a] p-6 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F9FAFB] dark:bg-[#1a1a1a] text-2xl font-semibold text-[#B8860B]">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1F2937] dark:text-[#F1F5F9]">{member.name}</h3>
              <p className="text-sm font-medium uppercase tracking-widest text-[#B8860B]">{member.role}</p>
              <p className="mt-4 text-[#1F2937]/80 dark:text-[#F1F5F9]/80">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

