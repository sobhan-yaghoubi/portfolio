import gsap from "gsap"

export const landingAnimate = () => {
  const mm = gsap.matchMedia()

  mm.add("(min-width: 768px)", () => {
    animateDesktopLandingPartOne()
    animateDesktopLandingPartTwo()
  })

  mm.add("(max-width: 799px)", () => {
    animateMobileLanding()
  })
}

const animateDesktopLandingPartOne = () => {
  const tl = gsap.timeline({ delay: 1 })

  tl.fromTo(
    "#landing-content-wrapper",
    { opacity: 0, scale: 0.8, y: 200 },
    { duration: 1, opacity: 1, scale: 1, y: 0 },
  )

  tl.fromTo(
    ".icon-package",
    { scale: 0 },
    { duration: 0.15, ease: "power1.in", scale: 1, stagger: 0.05 },
    "+=.1",
  )

  animateBulb(tl)
  tl.fromTo(
    "#landing-scroll-down-icon",
    { opacity: 0, delay: 2 },
    { opacity: 1 },
  )

  return tl
}

const animateDesktopLandingPartTwo = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#landing-description",
      start: 0,
      end: "+=50%",
    },
  })

  tl.fromTo(
    "#landing-description",
    { opacity: 0, y: 10, duration: 0.3 },
    {
      opacity: 1,
      y: 0,
    },
  )

  animateButtonList(tl)

  return tl
}

const animateMobileLanding = () => {
  const tl = gsap.timeline({ delay: 1 })

  tl.fromTo(
    "#landing-profile",
    { opacity: 0, y: 100, duration: 0.1 },
    { opacity: 1, y: 0 },
  )
  tl.fromTo(
    ["#landing-title", "#landing-description"],
    { opacity: 0, y: 100, duration: 0.1 },
    { opacity: 1, y: 0 },
  )

  animateButtonList(tl)
  animateBulb(tl)
}

const animateBulb = (tl: gsap.core.Timeline) =>
  tl
    .fromTo(
      "#landing-bulb",
      {
        background: "#fda699",
        y: "-1000%",
        filter: "blur(10px)",
        borderRadius: "50%",
      },
      { y: -100 },
    )
    .to("#landing-bulb", {
      duration: 0.5,
      ease: "circ",
      boxShadow:
        "0 0 60px 30px #ff9888, 0 0 200px 100px #d98a7e, 0 0 400px 350px #b216b275",
      filter: "blur(35px)",
    })

const animateButtonList = (tl: gsap.core.Timeline) => {
  tl.fromTo(
    "#landing-button-list .access-button",
    { y: 100 },
    {
      duration: 0.5,
      ease: "bounce.in",
      y: 0,
      stagger: 0.05,
    },
  )

  tl.fromTo(
    "#landing-button-list #split",
    { opacity: 0 },
    {
      duration: 0.6,
      opacity: 1,
    },
  )
}
