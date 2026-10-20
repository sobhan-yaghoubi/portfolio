import gsap from "gsap"
import { withMotion } from "../animationUtils"

const ROOT = "#error-page"
const CODE = `${ROOT} .error-code`
const REVEAL = `${ROOT} .error-reveal`

export const errorPageAnimate = () =>
  withMotion(() => {
    const code = gsap.utils.toArray<HTMLElement>(CODE)
    const reveal = gsap.utils.toArray<HTMLElement>(REVEAL)

    const timeLine = gsap.timeline()

    if (code.length) {
      timeLine.fromTo(
        code,
        { opacity: 0, scale: 0.8, y: -30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" },
      )
    }

    if (reveal.length) {
      timeLine.fromTo(
        reveal,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        code.length ? "-=0.3" : 0,
      )
    }

    if (code.length) {
      gsap.to(code, {
        y: -12,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.9,
      })
    }
  })
