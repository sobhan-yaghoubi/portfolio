import { TypeProject } from "../types/Project"
import { projectsData } from "@/data/projects"

export const getProjectList = async (): Promise<TypeProject[]> => {
  return projectsData
}

export const getProjectBySlug = async (slugOrId: string): Promise<TypeProject | undefined> => {
  return projectsData.find((p) => p.slug === slugOrId || p.id === slugOrId)
}
