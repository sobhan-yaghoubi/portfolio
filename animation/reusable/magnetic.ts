import gsap from "gsap"
import { prefersReducedMotion } from "../animationUtils"

export const magneticAnimate = (magnetic: HTMLElement | null, magnetSize?: number) => {
  if (prefersReducedMotion()) return

  const xTo = gsap.quickTo(magnetic, "x", { duration: 1, ease: "elastic.out(1,0.6)" })
  const yTo = gsap.quickTo(magnetic, "y", { duration: 1, ease: "elastic.out(1,0.6)" })

  magnetic?.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = magnetic?.getBoundingClientRect() as DOMRect

    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    xTo(x * (magnetSize ? magnetSize : 0.5))
    yTo(y * (magnetSize ? magnetSize : 0.5))
  })

  magnetic?.addEventListener("mouseleave", () => {
    xTo(0)
    yTo(0)
  })
}
