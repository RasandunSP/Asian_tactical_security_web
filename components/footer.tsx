"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-[#D1D5DB] dark:border-[#404040] bg-white dark:bg-[#1a1a1a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/TST logo/TST BLACK.png"
                alt="TST Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain dark:invert"
                unoptimized
              />
              <span className="hidden sm:inline-block text-sm font-heading font-bold uppercase tracking-[0.15em] text-[#111827] dark:text-[#F1F5F9]">
                ASIAN TACTICAL SECURITY
              </span>
            </div>
            <p className="text-sm text-[#111827]/85 dark:text-[#F1F5F9]/70">
              Empowering individuals and organizations with practical, effective, and ethical tactical training.
            </p>
            <p className="text-xs font-heading uppercase tracking-[0.5em] text-[#B8860B]">Strength · Precision · Integrity</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F1F5F9]">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("why-us")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("clients")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F1F5F9]">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Law Enforcement Training
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Close Protection
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Krav Maga
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-[#111827]/85 dark:text-[#F1F5F9]/70 transition-colors hover:text-[#B8860B]"
                >
                  Risk Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F1F5F9]">Contact</h3>
            <ul className="space-y-3 text-sm text-[#111827]/85 dark:text-[#F1F5F9]/70">
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                  className="transition-colors hover:text-[#B8860B]"
                >
                  Get in Touch
                </Link>
              </li>
              <li>Email: info@tst-training.com</li>
              <li>Phone: +94 70 123 4567</li>
              <li>Location: Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 text-center text-sm text-[#111827]/85 dark:text-[#F1F5F9]/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Asian Tactical Security Training Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="transition-colors hover:text-[#B8860B]"
            >
              Privacy Policy
            </Link>
            <span className="text-[#D1D5DB] dark:text-[#404040]">|</span>
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="transition-colors hover:text-[#B8860B]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
