"use client"

import React, { useEffect, useState } from "react"
import gsap from "gsap"

import { cn } from "@/lib/utils"
import { toFaDigits } from "@/lib/utils"
import { TypeProjectSection } from "@/types/Project"

type ProjectTocProps = {
  sections: TypeProjectSection[]
  variant?: "sidebar" | "inline"
}

const ProjectToc: React.FC<ProjectTocProps> = ({ sections, variant = "sidebar" }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    gsap.to(window, {
      scrollTo: { y: target, offsetY: 24 },
      duration: prefersReducedMotion ? 0 : 0.9,
      ease: "power2.inOut",
    })
  }

  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeId),
    0
  )

  return (
    <nav
      aria-label="فهرست مطالب این پروژه"
      className={cn(
        "bg-base-200/60 border border-white/10 rounded-2xl p-5",
        variant === "inline" && "xl:hidden"
      )}
    >
      <div className="flex items-baseline justify-between gap-2 mb-4">
        <h2 className="font-dana font-bold text-sm">فهرست مطالب</h2>
        <span className="text-[11px] text-base-content/60 font-mono tabular-nums">
          {toFaDigits(activeIndex + 1)} / {toFaDigits(sections.length)}
        </span>
      </div>

      <div
        className="h-1 w-full rounded-full bg-base-300/70 overflow-hidden mb-4"
        role="presentation"
      >
        <span
          className="block h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
        />
      </div>

      <ul className={cn("flex flex-col gap-1", variant === "inline" && "sm:grid sm:grid-cols-2")}>
        {sections.map((section, index) => {
          const isActive = section.id === activeId

          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "w-full min-h-11 flex items-center gap-2.5 text-start px-2.5 py-2 rounded-lg transition-colors",
                  "text-[13px] leading-6 hover:bg-white/5",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-base-content/75 hover:text-base-content"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-mono text-[10px] tabular-nums shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-base-content/40"
                  )}
                >
                  {toFaDigits(index + 1).padStart(2, "۰")}
                </span>
                <span className="flex-1">{section.title}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ProjectToc
