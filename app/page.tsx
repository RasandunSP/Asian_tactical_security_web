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
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9] transition-colors duration-300">
      <Navbar />
      <main className="bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
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
  )
}
