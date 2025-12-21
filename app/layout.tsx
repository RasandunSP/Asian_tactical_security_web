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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tst-training.com"),
  title: {
    default: "Asian Tactical Security Training | Elite Tactical Training in Sri Lanka",
    template: "%s | Asian Tactical Security Training",
  },
  description: "Asian Tactical Security Training (TST) provides elite tactical training, Krav Maga, law enforcement training, and close protection services across Sri Lanka and Asia. Expert-led programs for military, police, and security professionals.",
  keywords: [
    "tactical training",
    "Krav Maga",
    "law enforcement training",
    "close protection",
    "security training",
    "tactical defense",
    "Sri Lanka security training",
    "military training",
    "police training",
    "self defense",
    "threat analysis",
    "risk assessment",
    "tactical workshops",
    "Asian Tactical Security",
    "TST training",
  ],
  authors: [{ name: "Asian Tactical Security Training Pvt Ltd" }],
  creator: "Asian Tactical Security Training Pvt Ltd",
  publisher: "Asian Tactical Security Training Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Asian Tactical Security Training",
    title: "Asian Tactical Security Training | Elite Tactical Training in Sri Lanka",
    description: "Elite tactical training, Krav Maga, law enforcement training, and close protection services. Expert-led programs for military, police, and security professionals across Asia.",
    images: [
      {
        url: "/TST logo/TST GOLD.png",
        width: 1200,
        height: 630,
        alt: "Asian Tactical Security Training Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Tactical Security Training | Elite Tactical Training",
    description: "Elite tactical training, Krav Maga, law enforcement training, and close protection services in Sri Lanka.",
    images: ["/TST logo/TST GOLD.png"],
    creator: "@tsttraining",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/TST logo/TST white.png",
    shortcut: "/TST logo/TST white.png",
    apple: "/TST logo/TST white.png",
  },
  alternates: {
    canonical: "/",
  },
  category: "Security Training",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <ThemeScript />
      </head>
      <body className={`${stardosStencil.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="tst-theme"
          disableTransitionOnChange={false}
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
