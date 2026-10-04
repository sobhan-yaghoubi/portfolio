import { TypeCv } from "../types/Cv"
import { cvData } from "@/data/cv"

export const getCv = async (): Promise<TypeCv> => {
  return cvData
}
