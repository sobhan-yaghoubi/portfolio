import type { Metadata, Viewport } from "next"

import "./globals.css"

import ScrollSmooth from "../components/templates/ScrollSmooth"
import { Toaster } from "@/components/ui/toaster"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Sobhan Yaghoubi | Front-End & Full-Stack Developer",
  description:
    "Portfolio of Sobhan Yaghoubi - Front-End & Full-Stack Developer, Team Lead specializing in Next.js, React, TypeScript, and Scalable Web Architecture.",
  keywords:
    "Sobhan Yaghoubi, frontend developer, hire developer, portfolio, React, Next.js, TypeScript, contact developer, web developer",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://sobhan-yaghobi.ir",
    title: "Sobhan Yaghoubi | Frontend Developer Portfolio",
    description:
      "Sobhan Yaghoubi, a skilled frontend developer specializing in React, Next.js, and TypeScript.",
    siteName: "Sobhan Yaghoubi Portfolio",
    images: [
      {
        url: "https://sobhan-yaghoubi.ir/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobhan Yaghoubi Frontend Developer Portfolio",
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="rtl" lang="fa" className="dark" data-theme="dark">
      <body className="overflow-x-hidden bg-background text-foreground">
        <ScrollSmooth>
          {children}
          <Toaster />
        </ScrollSmooth>
      </body>
    </html>
  )
}
