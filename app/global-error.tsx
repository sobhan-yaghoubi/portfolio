"use client"

import React, { useEffect } from "react"

import "./globals.css"

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("[global-error]", error)
  }, [error])

  return (
    <html dir="rtl" lang="fa" className="dark" data-theme="dark">
      <body className="bg-background text-foreground">
        <main className="min-h-dvh flex flex-col items-center justify-center text-center gap-6 px-6 animate-in fade-in duration-500 motion-reduce:animate-none">
          <p className="font-title text-7xl md:text-8xl leading-none bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent select-none">
            خطا
          </p>

          <h1 className="text-2xl md:text-3xl font-dana font-bold">
            بارگذاری سایت با مشکل مواجه شد
          </h1>

          <p className="text-[15px] leading-[2] text-base-content/80 max-w-[56ch]">
            متأسفانه خطایی غیرمنتظره رخ داد. لطفاً دوباره تلاش کنید؛ اگر مشکل
            ادامه داشت، کمی بعد سر بزنید.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <button
              type="button"
              onClick={reset}
              className="btn btn-primary btn-md"
            >
              تلاش دوباره
            </button>
            <a href="/" className="btn btn-outline btn-md">
              صفحه اصلی
            </a>
          </div>

          {error.digest && (
            <p className="text-[11px] font-mono text-base-content/50 dir-left mt-4">
              error id: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  )
}

export default GlobalError
