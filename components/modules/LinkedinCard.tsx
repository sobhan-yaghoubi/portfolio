import React from "react"

import { ArrowUpLeft, Clock3, FileText, MessagesSquare } from "lucide-react"
import Image from "next/image"

import { TypeLinkedinCardProps } from "@/types/Linkedin"
import { resolveLinkedinMedia } from "@/services/linkedin"
import { formatFaDate, toFaDigits } from "@/lib/utils"

const TYPE_LABEL = {
  article: "مقاله",
  post: "پست",
} as const

const LinkedinCard: React.FC<TypeLinkedinCardProps> = ({ item }) => {
  const cover = resolveLinkedinMedia(item.image)
  const TypeIcon = item.type === "article" ? FileText : MessagesSquare

  return (
    <article className="h-full">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group h-full flex flex-col bg-base-200 rounded-2xl border border-white/5 shadow-xl overflow-hidden transition-colors hover:border-white/20"
      >
        {cover && (
          <div className="relative aspect-video bg-base-300 overflow-hidden shrink-0">
            <Image
              src={cover}
              alt=""
              aria-hidden="true"
              width={600}
              height={338}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="p-4 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-outline text-[11px] gap-1">
              <TypeIcon aria-hidden="true" className="size-3" />
              {TYPE_LABEL[item.type]}
            </span>
            {item.readingMinutes ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-base-content/55">
                <Clock3 aria-hidden="true" className="size-3" />
                {toFaDigits(item.readingMinutes)} دقیقه
              </span>
            ) : null}
          </div>

          <h3 className="text-base font-dana font-bold leading-snug line-clamp-2">{item.title}</h3>

          <p className="text-body-sm line-clamp-3 flex-1">{item.summary}</p>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5">
            <time dateTime={item.publishedAt} className="text-[11px] text-base-content/55">
              {formatFaDate(item.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
              <span>مشاهده در لینکدین</span>
              <ArrowUpLeft
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default LinkedinCard
