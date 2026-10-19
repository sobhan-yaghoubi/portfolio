import React from "react"
import { getTechnicalSkills } from "@/services/technicalSkill"

import AnimateElement from "@/components/modules/Animate/TemplateAnimate"
import Landing from "@/components/templates/about/landing/Landing"
import LifeGlimpseAndSoftSkills from "@/components/templates/about/LifeGlimpseAndSoftSkills"
import TechnicalSkills from "@/components/templates/TechnicalSkill/TechnicalSkills"

import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "مسیر حرفه‌ای، مهارت‌های تخصصی و تجربه‌های سبحان یعقوبی در توسعه فرانت‌اند؛ از معماری سیستم‌های پیچیده تا سرپرستی تیم.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "درباره من | سبحان یعقوبی",
    description: "مسیر حرفه‌ای، مهارت‌های تخصصی و تجربه‌های سبحان یعقوبی در توسعه فرانت‌اند.",
    url: absoluteUrl("/about"),
  },
}


const page: React.FC = async () => {
  const technicalSkills = await getTechnicalSkills()
  return (
    <>
      <AnimateElement selectedAnimationName="animateAboutMeLanding">
        <Landing />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateLifeGlimpseAndSoftSkills">
        <LifeGlimpseAndSoftSkills />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateTechnicalSkillList">
        <TechnicalSkills technicalSkills={technicalSkills} />
      </AnimateElement>
      <div className="mb-40" />
    </>
  )
}

export default page
