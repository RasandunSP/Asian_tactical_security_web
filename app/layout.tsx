import type { Metadata } from "next"
import { Stardos_Stencil, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "./theme-script"
import "./globals.css"

const stardosStencil = Stardos_Stencil({
  variable: "--font-stardos-stencil",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ASIAN TACTICAL SECURITY",
  description: "Preparedness, protection, and performance through elite tactical training.",
  icons: {
    icon: "/TST logo/TST white.png",
    shortcut: "/TST logo/TST white.png",
    apple: "/TST logo/TST white.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${stardosStencil.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="tst-theme"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
