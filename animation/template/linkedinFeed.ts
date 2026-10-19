import { createTimeline, withMotion } from "../animationUtils"

export const linkedinFeedAnimate = () =>
  withMotion(() => {
    const timeLine = createTimeline("#linkedin-feed", "-50%")

    timeLine
      .fromTo(
        "#linkedin-feed-title-wrapper .linkedin-feed-title-child",
        {
          opacity: 0,
          y: 50,
          scale: 0.5,
        },
        { opacity: 1, y: 0, scale: 1, stagger: 0.2 },
      )
      .fromTo(
        "#linkedin-feed .linkedin-card",
        {
          opacity: 0,
          y: 100,
        },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=.05",
      )
  })
