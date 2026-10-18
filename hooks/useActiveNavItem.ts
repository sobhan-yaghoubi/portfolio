"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const normalizePath = (path: string) =>
  path !== "/" ? path.replace(/\/+$/, "") : "/"

export const useActiveNavItem = () => {
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash)

    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [pathname])

  return (href: string) => {
    const [rawPath, rawHash] = href.split("#")
    const itemPath = normalizePath(rawPath || "/")
    const itemHash = rawHash ? `#${rawHash}` : ""

    return itemPath === normalizePath(pathname) && itemHash === hash
  }
}
