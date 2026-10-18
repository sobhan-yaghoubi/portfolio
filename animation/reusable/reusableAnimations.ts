import gsap from "gsap"

import { TypeAnimationUtilParam } from "@/types/animation/Reusable"
import { prefersReducedMotion } from "../animationUtils"

const fadeInUpAnimate = ({
  target,
  duration,
  delay,
}: TypeAnimationUtilParam) => {
  if (prefersReducedMotion()) return

  gsap.fromTo(
    target,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ...(duration && { duration }),
      ...(delay && { delay }),
    },
  )
}

export const reusableAnimations = {
  fadeInUp: fadeInUpAnimate,
}
