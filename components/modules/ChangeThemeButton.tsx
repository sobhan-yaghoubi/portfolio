"use client"

import React, { useLayoutEffect } from "react"
import useTheme from "@/hooks/store/useTheme"
import { cn } from "@/lib/utils"

import { ChangeThemeButtonProps } from "@/types/Utils"

import { Moon, Sun } from "lucide-react"

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  useLayoutEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
      root.setAttribute("data-theme", "dark")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
    }
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors inline-flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {theme === "dark" ? <Sun className="icon text-amber-400" /> : <Moon className="icon text-primary" />}
    </button>
  )
}

export default ChangeThemeButton
