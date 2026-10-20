"use client"

import React, { useEffect } from "react"
import Link from "next/link"

import { Home, RotateCcw } from "lucide-react"

import ErrorState from "@/components/templates/ErrorState"

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("[error-boundary]", error)
  }, [error])

  return (
    <ErrorState
      code="خطا"
      title="مشکلی پیش آمد"
      description="در نمایش این بخش خطایی رخ داد. می‌توانید دوباره تلاش کنید یا به صفحه اصلی برگردید."
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className="btn btn-primary btn-md gap-2"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
            <span>تلاش دوباره</span>
          </button>
          <Link href="/" className="btn btn-outline btn-md gap-2">
            <Home aria-hidden="true" className="size-4" />
            <span>صفحه اصلی</span>
          </Link>
        </>
      }
      footnote={
        error.digest ? (
          <p className="text-[11px] font-mono text-base-content/50 dir-left">
            error id: {error.digest}
          </p>
        ) : null
      }
    />
  )
}

export default ErrorPage
