import Landing from "@/components/templates/home/landing/Landing"
import ProjectList from "@/components/templates/ProjectList"
import TechnicalGrowth from "@/components/templates/TechnicalGrowthList"
import LinkedinFeed from "@/components/templates/LinkedinFeed"
import AnimateElement from "@/components/modules/Animate/TemplateAnimate"

import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
}


export default function Home() {
  return (
    <>
      <AnimateElement selectedAnimationName="animateHomeLanding">
        <Landing />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateProjectList">
        <ProjectList />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateTechnicalGrowthList">
        <TechnicalGrowth />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateLinkedinFeed">
        <LinkedinFeed />
      </AnimateElement>
      <div className="mb-36" />
    </>
  )
}
