import React from "react"
import type { Metadata } from "next"
import Link from "next/link"

import { Home, FolderGit2, UserRound } from "lucide-react"

import Header from "@/components/templates/Header/Header"
import ErrorState from "@/components/templates/ErrorState"

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: false },
}

const NotFound: React.FC = () => (
  <>
    <Header />
    <ErrorState
      code="۴۰۴"
      title="این صفحه پیدا نشد"
      description="آدرسی که دنبالش بودید وجود ندارد یا جابه‌جا شده است. می‌توانید از این‌جا به بخش‌های اصلی سایت برگردید."
      actions={
        <>
          <Link href="/" className="btn btn-primary btn-md gap-2">
            <Home aria-hidden="true" className="size-4" />
            <span>صفحه اصلی</span>
          </Link>
          <Link href="/#project-list" className="btn btn-outline btn-md gap-2">
            <FolderGit2 aria-hidden="true" className="size-4" />
            <span>پروژه‌ها</span>
          </Link>
          <Link href="/about" className="btn btn-outline btn-md gap-2">
            <UserRound aria-hidden="true" className="size-4" />
            <span>درباره من</span>
          </Link>
        </>
      }
    />
  </>
)

export default NotFound
