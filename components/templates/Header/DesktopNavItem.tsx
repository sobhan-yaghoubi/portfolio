"use client"

import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useActiveNavItem } from "@/hooks/useActiveNavItem"

type DesktopNavItemProps = {
  href: string
  title: string
}

/**
 * فقط همین لینک به کلاینت نیاز دارد (تشخیص آیتم فعال).
 * DesktopNavbar عمداً سرور-کامپوننت باقی می‌ماند، چون ShareButton
 * در نهایت یک کامپوننت async سروری را رندر می‌کند.
 */
const DesktopNavItem: React.FC<DesktopNavItemProps> = ({ href, title }) => {
  const isActive = useActiveNavItem()
  const active = isActive(href)

  return (
    <Link
      className={cn(
        "relative group transition-colors",
        active ? "text-primary font-semibold" : "hover:text-primary/90"
      )}
      href={href}
      aria-current={active ? "page" : undefined}
    >
      {title}
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute transition",
          active
            ? "bg-primary visible"
            : "bg-transparent invisible group-hover:bg-primary group-hover:visible"
        )}
      />
    </Link>
  )
}

export default DesktopNavItem
