import { asset } from "@/lib/assets"
import {
  linkedinFeedSchema,
  linkedinItemSchema,
  TypeLinkedinFeed,
  TypeLinkedinItem,
} from "./linkedin.schema"

export const LINKEDIN_FEED_URL = asset("linkedin-posts/posts.json")

export const LINKEDIN_FEED_LIMIT = 4

const EMPTY_FEED: TypeLinkedinFeed = { items: [] }

const warn = (message: string, detail?: unknown) =>
  console.warn(`[linkedin] ${message}`, detail ?? "")

const parseLinkedinFeed = (raw: unknown): TypeLinkedinFeed => {
  const feed = linkedinFeedSchema.safeParse(raw)

  if (!feed.success) {
    warn("ساختار فید معتبر نیست", feed.error.issues)
    return EMPTY_FEED
  }

  const items = feed.data.items.reduce<TypeLinkedinItem[]>(
    (valid, candidate) => {
      const item = linkedinItemSchema.safeParse(candidate)

      if (item.success) valid.push(item.data)
      else warn("یک آیتم نامعتبر نادیده گرفته شد", item.error.issues)

      return valid
    },
    [],
  )

  return {
    updatedAt: feed.data.updatedAt,
    profileUrl: feed.data.profileUrl,
    items,
  }
}

const byNewest = (a: TypeLinkedinItem, b: TypeLinkedinItem) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()

export const resolveLinkedinMedia = (path?: string) => {
  if (!path) return undefined
  return /^https?:\/\//i.test(path) ? path : asset(path)
}

export const getLinkedinFeed = async (
  limit: number = LINKEDIN_FEED_LIMIT,
): Promise<TypeLinkedinFeed> => {
  try {
    const response = await fetch(LINKEDIN_FEED_URL)

    if (!response.ok) {
      warn(`دریافت فید ناموفق بود (${response.status})`)
      return EMPTY_FEED
    }

    const feed = parseLinkedinFeed(await response.json())

    return {
      ...feed,
      items: [...feed.items].sort(byNewest).slice(0, limit),
    }
  } catch (error) {
    warn("خطا در دریافت فید", error)
    return EMPTY_FEED
  }
}
