import gsap from "gsap"
import { prefersReducedMotion } from "../animationUtils"

export const articlePageAnimate = () => {
  articleHeadlineAnimate()
}

const articleHeadlineAnimate = () => {
  const duration = prefersReducedMotion() ? 0 : 0.24

  gsap.to("#article", {
    scrollTrigger: {
      trigger: "#article",
      start: 0,
      end: "+=40%",
      onLeave: () => {
        gsap.to("#quick-show", {
          height: "3.5rem",
          opacity: 1,
          duration,
          ease: "power1",
        })
      },
      onEnterBack: () => {
        gsap.to("#quick-show", {
          height: 0,
          opacity: 0,
          duration,
          ease: "power1",
        })
      },
    },
  })
}
