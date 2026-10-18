import gsap from "gsap"
import { MEDIA } from "../animationUtils"

const HERO_CHILD = "#project-detail .project-hero-child"
const SECTION = "#project-detail .project-section"
const REVEAL = ".project-reveal"

export const projectDetailAnimate = () => {
  const mm = gsap.matchMedia()

  mm.add(
    {
      isMotionOk: MEDIA.motion,
      isReduced: MEDIA.reduced,
    },
    (context) => {
      const { isReduced } = (context.conditions || {}) as { isReduced?: boolean }

      /* کاربرانی که حرکت کمتر را انتخاب کرده‌اند، محتوا را مستقیماً در حالت نهایی می‌بینند */
      if (isReduced) {
        gsap.set([HERO_CHILD, `${SECTION} ${REVEAL}`], { opacity: 1, y: 0 })
        return
      }

      const heroChildren = gsap.utils.toArray<HTMLElement>(HERO_CHILD)
      if (heroChildren.length) {
        gsap.fromTo(
          heroChildren,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
        )
      }

      /* هر سکشن ScrollTrigger مستقل خودش را دارد تا کل صفحه دوباره اسکن نشود */
      gsap.utils.toArray<HTMLElement>(SECTION).forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(REVEAL)
        if (!items.length) return

        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: { each: 0.08, amount: Math.min(items.length * 0.08, 0.48) },
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          }
        )
      })
    }
  )
}
