"use client"

// Adapted from @shadcnblocks/navbar1 to match TST single-page navigation.

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50) // Change logo after 50px scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="#home"
          className="flex items-center gap-3"
          onClick={(event) => handleScroll(event, "#home")}
        >
          <Image
            src={isScrolled ? "/TST logo/TST BLACK.png" : "/TST logo/TST GOLD.png"}
            alt="TST Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-opacity duration-300"
            unoptimized
          />
          <span className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1F2937]">
            ASIAN TACTICAL SECURITY
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1F2937] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleScroll(event, link.href)}
              className="transition-colors hover:text-[#B8860B]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact" onClick={(event) => handleScroll(event, "#contact")}>
              Inquire Now
            </Link>
          </Button>
        </nav>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <nav
        className={cn(
          "grid gap-4 border-t border-[#E5E7EB] bg-white px-4 py-6 text-sm font-medium text-[#1F2937] transition-[grid-template-rows,opacity] md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className={cn("overflow-hidden", open ? "max-h-[400px]" : "max-h-0")}>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleScroll(event, link.href)}
                className="transition-colors hover:text-[#B8860B]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="#contact" onClick={(event) => handleScroll(event, "#contact")}>
                Inquire Now
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

