import gsap from "gsap"
import { MEDIA, createTimeline } from "../animationUtils"

import { TypeTimeLine } from "../../types/Utils"
import { TypeAnimateTechnicalGrowthElementsParams } from "../../types/TechnicalGrowth"

const SELECTORS = {
  TECHNICAL_GROWTH: "#technical-growth",
  TECHNICAL_GROWTH_TITLE: "#technical-growth .technical-growth-list-title-child",
  TECHNICAL_GROWTH_ITEM_WRAPPER: "#technical-growth .technical-growth-item-wrapper",
  TECHNICAL_GROWTH_ITEM_CHILD: ".technical-growth-item-child",
}

export const technicalGrowthListAnimate = () => {
  const timeLine = createTimeline(SELECTORS.TECHNICAL_GROWTH, "-30%")

  const mm = gsap.matchMedia()

  mm.add(MEDIA.motionDesktop, () => {
    animateTechnicalGrowthTitleList(timeLine)
    animateTechnicalGrowthElementsForDesktop()
  })

  mm.add(MEDIA.motionMobile, () => {
    animateTechnicalGrowthTitleList(timeLine)
    animateTechnicalGrowthElementsForMobile()
  })
}

const animateTechnicalGrowthTitleList = (timeLine: TypeTimeLine) =>
  timeLine.fromTo(
    SELECTORS.TECHNICAL_GROWTH_TITLE,
    {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2 }
  )

const animateTechnicalGrowthElementsForDesktop = () => {
  animateTechnicalGrowthElements({ animateElement: animateTechnicalGrowthElementForDesktop })
}

const animateTechnicalGrowthElementsForMobile = () => {
  animateTechnicalGrowthElements({ animateElement: animateTechnicalGrowthElementForMobile })
}

const animateTechnicalGrowthElements = ({
  animateElement,
}: TypeAnimateTechnicalGrowthElementsParams) => {
  const elements = document.querySelectorAll(
    SELECTORS.TECHNICAL_GROWTH_ITEM_WRAPPER
  ) as NodeListOf<HTMLLIElement>

  elements.forEach((element) => {
    const timeline = createTimeline(element, "-120%")
    animateElement(timeline, element)
  })
}

const animateTechnicalGrowthElementForDesktop = (
  timeLine: TypeTimeLine,
  element: HTMLLIElement
) => {
  const hrElement = element.querySelector("hr")
  const childElements = element.querySelectorAll(SELECTORS.TECHNICAL_GROWTH_ITEM_CHILD)
  const isElementTimelineStart = element?.dataset.direction === "start"

  if (isElementTimelineStart) {
    animateTechnicalGrowthElementFromRight(timeLine, childElements)
  } else {
    animateTechnicalGrowthElementFromLeft(timeLine, childElements)
  }
  animateTechnicalGrowthHrElement(timeLine, hrElement)
}

const animateTechnicalGrowthElementForMobile = (timeLine: TypeTimeLine, element: HTMLLIElement) => {
  const hrElement = element.querySelector("hr")
  const childElements = element.querySelectorAll(SELECTORS.TECHNICAL_GROWTH_ITEM_CHILD)

  animateTechnicalGrowthElementFromRight(timeLine, childElements)
  animateTechnicalGrowthHrElement(timeLine, hrElement)
}

const animateTechnicalGrowthElementFromRight = (
  timeLine: TypeTimeLine,
  elementList: NodeListOf<Element>
) =>
  timeLine.fromTo(
    elementList,
    {
      opacity: 0,
      x: 100,
    },
    { opacity: 1, x: 0, stagger: 0.3 }
  )

const animateTechnicalGrowthElementFromLeft = (
  timeLine: TypeTimeLine,
  elementList: NodeListOf<Element>
) =>
  timeLine.fromTo(
    elementList,
    {
      opacity: 0,
      x: -100,
    },
    { opacity: 1, x: 0, stagger: 0.3 }
  )

const animateTechnicalGrowthHrElement = (timeLine: TypeTimeLine, hrElement: HTMLHRElement | null) =>
  timeLine.fromTo(
    hrElement,
    {
      opacity: 0,
    },
    { opacity: 1 }
  )
