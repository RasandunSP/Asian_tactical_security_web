"use client"

import { useState } from "react"
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
import { MailIcon, MapPinIcon, PhoneIcon, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Build URL-encoded body for Netlify Forms (must include form-name; Netlify accepts POST to any path)
      const params = new URLSearchParams()
      params.append("form-name", "contact")
      params.append("bot-field", (formData.get("bot-field") as string) ?? "")

      formData.forEach((value, key) => {
        if (key !== "form-name" && key !== "bot-field") params.append(key, value.toString())
      })

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
        setErrorMessage("Something went wrong. Please try again later.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="bg-white dark:bg-[#2a2a2a] text-[#111827] dark:text-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.5em] text-[#B8860B]">Contact</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#111827] dark:text-[#F1F5F9]">
                Get in Touch with Our Team
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-[#111827]/90 dark:text-[#F1F5F9]/80 px-2">
            We&apos;d love to hear from you. Please fill out this form or reach out to us directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full lg:max-w-2xl">
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
                  href="mailto:atdtpvt2025@gmail.com"
                >
                  atdtpvt2025@gmail.com
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
                  href="tel:+94773910907"
                >
                  +9477 391 0907 
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
              <CardTitle className="text-xl sm:text-2xl font-heading text-[#1F2937] dark:text-[#F1F5F9]">Send us a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base text-[#1F2937]/70 dark:text-[#F1F5F9]/70">
                Share your mission requirements and we will craft a tactical training roadmap.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Netlify: form-name required for detection; field order sets submission summary (title=first text input, body=first textarea) */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="bot-field" />

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        Thank you for your inquiry!
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                        We&apos;ve received your message and will get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-red-800 dark:text-red-300">
                        Submission failed
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                        {errorMessage || "Please try again later or contact us directly."}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="firstName" className="text-[#111827] dark:text-[#F1F5F9]">First Name</Label>
                        <Input
                          placeholder="First name"
                          id="firstName"
                          name="firstName"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      required
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="col-span-2">
                        <Label htmlFor="organization" className="text-[#111827] dark:text-[#F1F5F9]">Organization</Label>
                    <Input
                      placeholder="Organization (optional)"
                      id="organization"
                      name="organization"
                          className="mt-2 bg-white dark:bg-[#2a2a2a] border-[#D1D5DB] dark:border-[#404040] focus:border-[#B8860B] focus:ring-[#B8860B]"
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="col-span-2 flex items-start gap-2">
                    <Checkbox id="acceptTerms" name="acceptTerms" className="mt-1 border-[#E5E7EB] dark:border-[#334155]" disabled={isSubmitting} />
                        <Label htmlFor="acceptTerms" className="text-sm text-[#111827]/80 dark:text-[#F1F5F9]/70 cursor-pointer">
                      You agree to our
                      <Link href="#" className="underline ml-1 text-[#B8860B] hover:text-[#9A7209]">
                        terms and conditions
                      </Link>
                      .
                    </Label>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="mt-6 w-full bg-[#B8860B] hover:bg-[#9A7209] disabled:opacity-50 disabled:cursor-not-allowed" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
