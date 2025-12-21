"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, MapPinIcon, PhoneIcon, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="bg-white dark:bg-[#2a2a2a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <div className="text-center mb-12">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Contact</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
                Get in Touch with Our Team
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#111827]/90 dark:text-[#F1F5F9]/80">
            We&apos;d love to hear from you. Please fill out this form or reach out to us directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl">
            <Card className="border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a]">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center bg-white dark:bg-[#2a2a2a] text-[#B8860B] border border-[#B8860B]/30 dark:border-[#B8860B]/20 rounded-xl shadow-sm">
                  <MailIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#111827] dark:text-[#F1F5F9]">Email</h3>
                <p className="my-2.5 text-[#111827]/80 dark:text-[#F1F5F9]/70">
                  Send us an email anytime.
                </p>
                <Link
                  className="font-medium text-[#B8860B] hover:text-[#9A7209] transition-colors"
                  href="mailto:info@tst-training.com"
                >
                  info@tst-training.com
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a]">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center bg-white dark:bg-[#2a2a2a] text-[#B8860B] border border-[#B8860B]/30 dark:border-[#B8860B]/20 rounded-xl shadow-sm">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#111827] dark:text-[#F1F5F9]">Phone</h3>
                <p className="my-2.5 text-[#111827]/80 dark:text-[#F1F5F9]/70">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  className="font-medium text-[#B8860B] hover:text-[#9A7209] transition-colors"
                  href="tel:+94701234567"
                >
                  +94 70 123 4567
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a]">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center bg-white dark:bg-[#2a2a2a] text-[#B8860B] border border-[#B8860B]/30 dark:border-[#B8860B]/20 rounded-xl shadow-sm">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#111827] dark:text-[#F1F5F9]">Office</h3>
                <p className="my-2.5 text-[#111827]/80 dark:text-[#F1F5F9]/70">
                  Visit our headquarters.
                </p>
                <p className="font-medium text-[#B8860B]">
                  Colombo, Sri Lanka
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a]">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center bg-white dark:bg-[#2a2a2a] text-[#B8860B] border border-[#B8860B]/30 dark:border-[#B8860B]/20 rounded-xl shadow-sm">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#111827] dark:text-[#F1F5F9]">Inquiry</h3>
                <p className="my-2.5 text-[#111827]/80 dark:text-[#F1F5F9]/70">
                  Fill out the form to get started.
                </p>
                <Link
                  className="font-medium text-[#B8860B] hover:text-[#9A7209] transition-colors"
                  href="#contact"
                >
                  Submit Inquiry
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border border-[#E5E7EB] dark:border-[#404040] bg-[#F9FAFB] dark:bg-[#1a1a1a] w-full max-w-lg lg:ms-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-[#1F2937] dark:text-[#F1F5F9]">Send us a Message</CardTitle>
              <CardDescription className="text-[#1F2937]/70 dark:text-[#F1F5F9]/70">
                Share your mission requirements and we will craft a tactical training roadmap.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="firstName" className="text-[#111827] dark:text-[#F1F5F9]">First Name</Label>
                        <Input
                          placeholder="First name"
                          id="firstName"
                          name="firstName"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="lastName" className="text-[#111827] dark:text-[#F1F5F9]">Last Name</Label>
                    <Input
                      placeholder="Last name"
                      id="lastName"
                      name="lastName"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                        <Label htmlFor="email" className="text-[#111827] dark:text-[#F1F5F9]">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                        <Label htmlFor="organization" className="text-[#111827] dark:text-[#F1F5F9]">Organization</Label>
                    <Input
                      placeholder="Organization (optional)"
                      id="organization"
                      name="organization"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="message" className="text-[#111827] dark:text-[#F1F5F9]">Mission Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your training requirements..."
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      rows={6}
                      required
                    />
                  </div>
                  <div className="col-span-2 flex items-start gap-2">
                    <Checkbox id="acceptTerms" className="mt-1 border-[#E5E7EB] dark:border-[#334155]" />
                        <Label htmlFor="acceptTerms" className="text-sm text-[#111827]/80 dark:text-[#F1F5F9]/70 cursor-pointer">
                      You agree to our
                      <Link href="#" className="underline ml-1 text-[#B8860B] hover:text-[#9A7209]">
                        terms and conditions
                      </Link>
                      .
                    </Label>
                  </div>
                </div>
                <Button type="submit" className="mt-6 w-full bg-[#B8860B] hover:bg-[#9A7209]" size="lg">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
