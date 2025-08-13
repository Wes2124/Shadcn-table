import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.style.fontFamily};
  --font-inter: ${inter.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
