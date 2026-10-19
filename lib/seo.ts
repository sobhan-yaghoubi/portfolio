export const SITE = {
  url: "https://sobhan-yaghoubi.ir",
  name: "سبحان یعقوبی",
  nameEn: "Sobhan Yaghoubi",
  title: "سبحان یعقوبی | توسعه‌دهنده ارشد فرانت‌اند",
  description:
    "نمونه‌کار سبحان یعقوبی، توسعه‌دهنده ارشد فرانت‌اند؛ معماری فرانت‌اند، پلتفرم‌های SaaS، فروشگاه‌های B2B و B2C و تجربه‌های تعاملی با Next.js، React و TypeScript.",
  locale: "fa_IR",
  lang: "fa",
  ogImage: "/og-image.png",
  twitter: undefined as string | undefined,
} as const

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/sobhan-yaghoubi",
  "https://github.com/sobhan-yaghoubi",
  "https://gitlab.com/sobhan-yaghoubi",
]

export const absoluteUrl = (path = "/") => {
  const clean = `/${path.replace(/^\/+/, "")}`
  const withSlash =
    clean === "/" ? "/" : clean.endsWith("/") ? clean : `${clean}/`
  return `${SITE.url}${withSlash}`
}
