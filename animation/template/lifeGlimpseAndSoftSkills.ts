import gsap from "gsap"
import { MEDIA, createTimeline } from "../animationUtils"
import { TypeTimeLine } from "../../types/Utils"

export const lifeGlimpseAndSoftSkillsAnimate = () => {
  const mm = gsap.matchMedia()
  const timeLine = createTimeline("#life-glimpse-and-soft-skills", "-90%")

  mm.add(MEDIA.motionDesktop, () => {
    animateLifeGlimpseAndSoftSkillsShowUpForDesktop(timeLine)
  })

  mm.add(MEDIA.motionMobile, () => {
    animateLifeGlimpseAndSoftSkillsShowUpForMobile(timeLine)
    imageSliderAnimate()
  })

  mm.add(MEDIA.reduced, () => {
    const horizontal = document.querySelector<HTMLElement>("#horizontal")
    if (horizontal) horizontal.style.overflowX = "auto"
  })
}

const animateLifeGlimpseAndSoftSkillsShowUpForDesktop = (
  timeLine: TypeTimeLine,
) => {
  animateLifeGlimpseAndSoftSkillsTitle(timeLine)
}

const animateLifeGlimpseAndSoftSkillsShowUpForMobile = (
  timeLine: TypeTimeLine,
) => {
  animateLifeGlimpseAndSoftSkillsTitle(timeLine)
  timeLine.fromTo(
    "#horizontal .content",
    {
      opacity: 0,
      y: 100,
    },
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=.05",
  )
}

const animateLifeGlimpseAndSoftSkillsTitle = (timeLine: TypeTimeLine) => {
  const contentChildElements = document.querySelectorAll(
    ".life-glimpse-and-soft-skills-content-child",
  )

  timeLine
    .fromTo(
      contentChildElements,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.6 },
    )
    .fromTo(
      "#image-soft-skills-desktop",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0 },
      "-=.5",
    )
}

const imageSliderAnimate = () => {
  let imageElementList = gsap.utils.toArray("#horizontal .content")

  gsap.to(imageElementList, {
    xPercent: -100 * (imageElementList.length - 0.7),
    scrollTrigger: {
      trigger: "#horizontal",
      pin: true,
      scrub: 1,
    },
  })
}
