import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaaS Platform - Transform Your Business",
  description:
    "Streamline your workflow, boost productivity, and scale your business with our cutting-edge SaaS platform. Join thousands of companies already transforming their operations.",
  keywords: "SaaS, business software, productivity, workflow, automation",
  authors: [{ name: "SaaS Platform Team" }],
  openGraph: {
    title: "SaaS Platform - Transform Your Business",
    description:
      "Streamline your workflow, boost productivity, and scale your business with our cutting-edge SaaS platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Platform - Transform Your Business",
    description:
      "Streamline your workflow, boost productivity, and scale your business with our cutting-edge SaaS platform.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
