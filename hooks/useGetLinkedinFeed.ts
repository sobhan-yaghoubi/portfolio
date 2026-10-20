import { useQuery } from "@tanstack/react-query"

import { getLinkedinFeed, LINKEDIN_FEED_LIMIT } from "@/services/linkedin"
import { TypeLinkedinFeed } from "@/types/Linkedin"

export const LINKEDIN_FEED_QUERY_KEY = ["linkedin-feed"] as const

export const useGetLinkedinFeed = (
  initialFeed: TypeLinkedinFeed,
  enabled: boolean,
) =>
  useQuery({
    queryKey: LINKEDIN_FEED_QUERY_KEY,
    queryFn: async ({ signal }) => {
      const feed = await getLinkedinFeed(LINKEDIN_FEED_LIMIT, {
        signal,
        cache: "no-cache",
      })

      if (!feed.items.length)
        throw new Error("LinkedIn feed is empty or unavailable")

      return feed
    },
    initialData: initialFeed,

    initialDataUpdatedAt: 0,
    enabled,
  })
