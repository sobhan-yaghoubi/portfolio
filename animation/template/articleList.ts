import { createTimeline, withMotion } from "../animationUtils"

export const articleListAnimate = () =>
  withMotion(() => {
  const timeLine = createTimeline("#article-list", "-50%")

  timeLine
    .fromTo(
      "#article-list-title-wrapper .article-list-title-child",
      {
        opacity: 0,
        y: 50,
        scale: 0.5,
      },
      { opacity: 1, y: 0, scale: 1, stagger: 0.2 }
    )
    .fromTo(
      "#article-list .article-card",
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0, stagger: 0.2 },
      "-=.05"
    )
  })
