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
  title: "Sobhan Yaghobi | Front-End & Full-Stack Developer",
  description:
    "Portfolio of Sobhan Yaghobi - Front-End & Full-Stack Developer, Team Lead specializing in Next.js, React, TypeScript, and Scalable Web Architecture.",
  keywords:
    "Sobhan Yaghobi, frontend developer, hire developer, portfolio, React, Next.js, TypeScript, contact developer, web developer",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://sobhan-yaghobi.liara.run/",
    title: "Sobhan Yaghobi | Frontend Developer Portfolio",
    description:
      "Hire Sobhan Yaghobi, a skilled frontend developer specializing in React, Next.js, and TypeScript.",
    siteName: "Sobhan Yaghobi Portfolio",
    images: [
      {
        url: "https://bhnldizjuhewbimjejof.supabase.co/storage/v1/object/public/portfolio/04480685-9f4f-4d3e-83df-8eb0fa8c267f",
        width: 1200,
        height: 630,
        alt: "Sobhan Yaghobi Frontend Developer Portfolio",
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
    <html dir="rtl" lang="fa" data-theme="dark">
      <body className="overflow-x-hidden">
        <ScrollSmooth>
          {children}
          <Toaster />
        </ScrollSmooth>
      </body>
    </html>
  )
}
