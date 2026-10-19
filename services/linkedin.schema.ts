import { z } from "zod"

const parsableDate = z
  .string()
  .refine((value) => !Number.isNaN(Date.parse(value)), {
    message: "تاریخ معتبر نیست",
  })

export const linkedinItemSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["post", "article"]),
  title: z.string().min(1),
  summary: z.string().min(1),
  url: z.url(),
  image: z.string().min(1).optional(),
  publishedAt: parsableDate,
  lang: z.enum(["fa", "en"]).optional(),
  tags: z.array(z.string()).optional(),
  readingMinutes: z.number().int().positive().optional(),
})

export const linkedinFeedSchema = z.object({
  updatedAt: parsableDate.optional(),
  profileUrl: z.url().optional(),
  items: z.array(z.unknown()),
})

export type TypeLinkedinItem = z.infer<typeof linkedinItemSchema>
export type TypeLinkedinItemType = TypeLinkedinItem["type"]

export type TypeLinkedinFeed = {
  updatedAt?: string
  profileUrl?: string
  items: TypeLinkedinItem[]
}
