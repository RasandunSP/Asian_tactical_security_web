import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { WhyUsSection } from "@/components/why-us-section"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tst-training.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Asian Tactical Security Training Pvt Ltd",
    alternateName: "TST",
    url: baseUrl,
    logo: `${baseUrl}/TST logo/TST GOLD.png`,
    description: "Elite tactical training, Krav Maga, law enforcement training, and close protection services across Sri Lanka and Asia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+9477 391 0907 ",
      contactType: "Customer Service",
      email: "info@tst-training.com",
      areaServed: ["LK", "Asia"],
      availableLanguage: ["en"],
    },
    sameAs: [
      // Add social media links when available
    ],
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tactical Training Services",
    provider: {
      "@type": "Organization",
      name: "Asian Tactical Security Training Pvt Ltd",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tactical Training Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Law Enforcement Tactical Training",
            description: "Enhance the effectiveness, safety, and professionalism of police and security forces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Close Protection Training",
            description: "Elite-level instruction for high-stakes environments where personal security is paramount.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civilian Self-Defence (Krav Maga)",
            description: "Scenario-based Krav Maga, arrest & control, and threat analysis for everyday protection.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Risk Assessment & Threat Analysis",
            description: "Comprehensive reviews identifying vulnerabilities and mitigation strategies.",
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-[#1a1a1a] text-[#F1F5F9] transition-colors duration-300">
        <Navbar />
        <main className="bg-[#1a1a1a] transition-colors duration-300">
          <Hero />
          <AboutSection />
          <WhyUsSection />
          <ServicesSection />
          <ClientsSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
