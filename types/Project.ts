import { TypeTechnicalSkill } from "./TechnicalSkill"

export type TypeProjectChallenge = {
  title: string
  solution: string
}

export type TypeProjectGalleryItem = {
  title: string
  subtitle?: string
  tag?: string
  image: string
  description?: string
}

export type TypeProjectPackage = {
  name: string
  description: string
}

export type TypeProjectFeature = {
  title: string
  description: string
  tag?: string
}

export type TypeProjectTechCategory = {
  category: string
  items: string[]
}

export type TypeProject = {
  id: string
  slug?: string
  image: string
  title: string
  shortTitle?: string
  category?: string
  domain?: string
  role?: string
  link: string
  source: string
  description: string
  theProblem?: string
  myRole?: string
  technicalSkillList: TypeTechnicalSkill[]
  highlights?: string[]
  challenges?: TypeProjectChallenge[]
  gallery?: TypeProjectGalleryItem[]
  monorepoPackages?: TypeProjectPackage[]
  keyFeatures?: TypeProjectFeature[]
  techStackBreakdown?: TypeProjectTechCategory[]
  impact?: string
}

export type TypeProjectCardProps = TypeProject

export type TypeProjectCardTitleProps = Pick<TypeProject, "title">

export type TypeProjectCardButtonListProps = Pick<TypeProject, "link" | "source">

export type TypeProjectCardButtonDialogProps = { modalId: string }

export type TypeProjectCardDialogProps = {
  project: Pick<TypeProject, "title" | "description" | "link" | "source" | "technicalSkillList">
  modalId: string
}
