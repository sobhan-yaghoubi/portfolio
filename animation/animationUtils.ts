import gsap from "gsap"
import { TypeTimeLine } from "../types/Utils"

export const createTimeline = (
  trigger?: gsap.DOMTarget,
  start?: string | number,
  end?: string | number,
): TypeTimeLine => gsap.timeline({ scrollTrigger: { trigger, start, end } })

export const MEDIA = {
  reduced: "(prefers-reduced-motion: reduce)",
  motion: "(prefers-reduced-motion: no-preference)",
  motionDesktop:
    "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
  motionMobile:
    "(prefers-reduced-motion: no-preference) and (max-width: 767.98px)",
} as const

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(MEDIA.reduced).matches

export const withMotion = (run: () => void, onReducedMotion?: () => void) => {
  const mm = gsap.matchMedia()

  mm.add(MEDIA.motion, () => {
    run()
  })

  if (onReducedMotion) {
    mm.add(MEDIA.reduced, () => {
      onReducedMotion()
    })
  }

  return mm
}
