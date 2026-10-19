import type { MetadataRoute } from "next"
import { getProjectList } from "@/services/project"
import { absoluteUrl } from "@/lib/seo"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const projects = await getProjectList()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/cv"), changeFrequency: "yearly", priority: 0.7 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/project/${project.slug || project.id}`),
    changeFrequency: "yearly",
    priority: 0.9,
  }))

  return [...staticRoutes, ...projectRoutes]
}

export default sitemap
