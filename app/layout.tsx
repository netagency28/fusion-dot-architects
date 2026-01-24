import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Fusion Dot Architects - Modern Architecture & Design",
  description:
    "Creating exceptional spaces through innovative design and meticulous craftsmanship. Specializing in architecture, interior design, furniture design, and construction.",
  generator: 'v0.dev',
  icons: {
    icon: "https://res.cloudinary.com/dytr7tpmt/image/upload/v1769268290/Logo_a7lxow.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
