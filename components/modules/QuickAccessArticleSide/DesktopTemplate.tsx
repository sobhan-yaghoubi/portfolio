"use client"

import React from "react"
import { DesktopTemplateProps } from "@/types/Article"

import { SquareArrowOutUpRight } from "lucide-react"

import CopyToClipboard from "../CopyToClipboard"

import { cn } from "@/lib/utils"

const DesktopTemplate: React.FC<DesktopTemplateProps> = ({ headlineList, headlineReadLength }) => {
  return (
    <>
      <div className="bg-base-200 rounded-xl p-2 border border-white/5">
        <CopyToClipboard value="article url" className="btn w-full outline-active">
          <SquareArrowOutUpRight className="icon" />
          اشتراک گذاری
        </CopyToClipboard>
      </div>
      <div className="bg-base-200 rounded-xl p-4 border border-white/5">
        <h3 className="font-dana font-bold text-sm mb-3">سر تیترها</h3>
        <ul className="flex flex-col gap-3">
          {headlineList?.map((headline, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-xs transition-colors",
                index < headlineReadLength ? "text-primary font-medium" : "text-neutral-400"
              )}
            >
              <span
                className={cn(
                  "size-2 rounded-full shrink-0",
                  index < headlineReadLength ? "bg-primary" : "bg-neutral-600"
                )}
              />
              <span className="truncate">{headline.textContent}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DesktopTemplate
