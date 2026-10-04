import { TypeTechnicalGrowth } from "../types/TechnicalGrowth"
import { technicalGrowthData } from "@/data/growth"

export const getTechnicalGrowthList = async (): Promise<TypeTechnicalGrowth[]> => {
  return technicalGrowthData
}
