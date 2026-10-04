import gsap from "gsap"
import { createTimeline } from "../animationUtils"

export const aboutMeLandingAnimate = () => {
  animateAboutMeLandingPartOne()
  animateAboutMeLandingPartTwo()
}

const animateAboutMeLandingPartOne = () => {
  const timeLine = gsap.timeline({ delay: 1 })

  timeLine.fromTo(
    "#about-me-landing-title-wrapper",
    { opacity: 0, scale: 0.8, y: 200 },
    { opacity: 1, scale: 1, y: 0, duration: 1 },
  )

  timeLine.fromTo(
    "#about-me-landing-light-bulb",
    { opacity: 0, scale: 0.5 },
    { duration: 1, opacity: 1, scale: 1 },
  )
  timeLine.fromTo(
    "#landing-scroll-down-icon",
    { opacity: 0, delay: 2 },
    { opacity: 1 },
  )
}

const animateAboutMeLandingPartTwo = () => {
  const timeLine = createTimeline("#about-me-landing-description", 0, "+=50%")
  timeLine
    .fromTo(
      "#about-me-landing-description",
      { opacity: 0, y: 10, duration: 0.3 },
      {
        opacity: 1,
        y: 0,
      },
    )
    .fromTo(
      "#about-me-landing-button-list .access-button",
      { y: 100 },
      {
        duration: 0.5,
        ease: "bounce.in",
        y: 0,
        stagger: 0.05,
      },
      "-=.5",
    )
    .fromTo(
      "#about-me-landing-button-list-split",
      { opacity: 0 },
      {
        duration: 0.6,
        opacity: 1,
      },
    )
}
