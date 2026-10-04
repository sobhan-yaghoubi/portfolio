import { TypeTechnicalSkill } from "./TechnicalSkill"

export type TypeProjectChallenge = {
  title: string
  solution: string
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
  technicalSkillList: TypeTechnicalSkill[]
  highlights?: string[]
  challenges?: TypeProjectChallenge[]
}

export type TypeProjectCardProps = TypeProject

export type TypeProjectCardTitleProps = Pick<TypeProject, "title">

export type TypeProjectCardButtonListProps = Pick<TypeProject, "link" | "source">

export type TypeProjectCardButtonDialogProps = { modalId: string }

export type TypeProjectCardDialogProps = {
  project: Pick<TypeProject, "title" | "description" | "link" | "source" | "technicalSkillList">
  modalId: string
}
