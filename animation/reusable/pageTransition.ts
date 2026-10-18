import gsap from "gsap"
import { prefersReducedMotion } from "../animationUtils"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const pageInAnimate = () => {
  const bannerElement = document.querySelector("#banner")

  if (bannerElement) {
    if (prefersReducedMotion()) {
      gsap.set(bannerElement, {
        yPercent: 100,
        borderTopLeftRadius: "100vh",
        borderTopRightRadius: "100vh",
      })
      return
    }

    const tl = gsap.timeline()

    tl.set(bannerElement, {
      yPercent: 0,
      delay: 0.3,
    })
      .to(bannerElement, {
        yPercent: 100,
        duration: 1,
      })
      .to(
        bannerElement,
        {
          borderTopLeftRadius: "100vh",
          borderTopRightRadius: "100vh",
          duration: 0.8,
        },
        "<",
      )
  }
}

export const pageOutAnimate = (href: string, router: AppRouterInstance) => {
  const bannerElement = document.querySelector("#banner")

  if (bannerElement) {
    if (prefersReducedMotion()) {
      router.push(href)
      return
    }

    const tl = gsap.timeline()

    tl.set(bannerElement, {
      yPercent: 100,
      delay: 0.3,
      borderTopLeftRadius: "100vh",
      borderTopRightRadius: "100vh",
    })
      .to(bannerElement, {
        onComplete: () => {
          router.push(href)
        },
        yPercent: 0,
        duration: 1,
      })
      .to(
        bannerElement,
        {
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          duration: 0.4,
        },
        "<",
      )
      .to(bannerElement, {
        yPercent: 100,
        borderTopLeftRadius: "100vh",
        borderTopRightRadius: "100vh",
      })
  }
}
