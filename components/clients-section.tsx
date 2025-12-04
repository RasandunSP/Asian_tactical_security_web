// Inspired by @shadcnblocks/logos8 to deliver a marquee of trusted partners.
import Image from "next/image"

const clients = [
  {
    name: "Sri Lanka Air Force",
    logo: "/client logos/Sri_Lanka_Air_Force_emblem.svg.png",
  },
  {
    name: "Sri Lanka Police",
    logo: "/client logos/Sri_Lanka_Police_logo.svg.png",
  },
  {
    name: "Sri Lanka Army",
    logo: "/client logos/Sri lanka army logo.png",
  },
  {
    name: "Sri Lanka Navy",
    logo: "/client logos/Sri_Lanka_Naval_Seal.png",
  },
  {
    name: "Special Task Force",
    logo: "/client logos/SLA_Commando_crest.png",
  },
  {
    name: "Maldives Police Service",
    logo: "/client logos/Maldives_Police_Service_Logo.svg.png",
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8860B]">Clients</p>
        <h2 className="mt-4 text-4xl font-bold text-[#1F2937]">Trusted by Sri Lanka's Elite Units</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-[#1F2937]/80">
          We proudly support elite defence, law enforcement, and private security teams across Sri Lanka with mission-specific
          training programs.
        </p>
        <div className="relative mt-12 overflow-hidden">
          <div className="flex">
            <div className="animate-marquee flex gap-10 whitespace-nowrap px-6 py-6">
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex min-w-[280px] items-center gap-4 text-base font-semibold text-[#1F2937]/70"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="whitespace-nowrap">{client.name}</span>
                </div>
              ))}
            </div>
            <div className="animate-marquee flex gap-10 whitespace-nowrap px-6 py-6" aria-hidden="true">
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-duplicate-${index}`}
                  className="flex min-w-[280px] items-center gap-4 text-base font-semibold text-[#1F2937]/70"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="whitespace-nowrap">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

