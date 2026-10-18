import { projectAnimate } from "@/animation/template/projectList"
import { landingAnimate as homeLandingAnimate } from "@/animation/template/homeLanding"
import { technicalGrowthListAnimate } from "@/animation/template/technicalGrowthList"
import { articleListAnimate } from "@/animation/template/articleList"
import { aboutMeLandingAnimate } from "@/animation/template/aboutMeLanding"
import { lifeGlimpseAndSoftSkillsAnimate } from "@/animation/template/lifeGlimpseAndSoftSkills"
import { technicalSkillListAnimate } from "@/animation/template/technicalSkillList"
import { cvAnimate } from "@/animation/template/cv"
import { projectDetailAnimate } from "@/animation/template/projectDetail"

export const templateAnimations = {
  animateHomeLanding: homeLandingAnimate,
  animateProjectList: projectAnimate,
  animateTechnicalGrowthList: technicalGrowthListAnimate,
  animateArticleList: articleListAnimate,
  animateAboutMeLanding: aboutMeLandingAnimate,
  animateLifeGlimpseAndSoftSkills: lifeGlimpseAndSoftSkillsAnimate,
  animateTechnicalSkillList: technicalSkillListAnimate,
  animateCv: cvAnimate,
  animateProjectDetail: projectDetailAnimate,
}
