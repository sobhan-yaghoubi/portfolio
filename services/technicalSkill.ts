import { TypeTechnicalSkill } from "../types/TechnicalSkill"
import { technicalSkillsData } from "@/data/skills"

export const getTechnicalSkills = async (): Promise<TypeTechnicalSkill[]> => {
  return technicalSkillsData
}
