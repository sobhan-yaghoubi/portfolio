import React from "react"
import { isEven } from "@/lib/utils"

import { TypeTechnicalGrowthItemProps } from "@/types/TechnicalGrowth"

import { Check } from "lucide-react"

import Title from "./Title"

const TechnicalGrowthItem: React.FC<TypeTechnicalGrowthItemProps> = ({
  title,
  subtitle,
  description,
  index,
  technicalGrowthListLength,
}) => {
  return (
    <li className="technical-growth-item-wrapper" data-direction={isEven(index) ? "start" : "end"}>
      <div className="timeline-middle">
        <div className="technical-growth-item-child bg-primary text-white p-1.5 size-8 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
          <Check className="size-4 stroke-[3]" />
        </div>
        {index + 1 !== technicalGrowthListLength && (
          <hr className="technical-growth-item-hr w-0.5 flex-1 bg-primary/40 border-none mt-2 mb-0 min-h-[3rem]" />
        )}
      </div>
      <div
        className={`technical-growth-item mx-4 mb-12 max-lg:pb-12 ${
          isEven(index) ? "timeline-start md:text-end" : "timeline-end"
        }`}
      >
        <time className="technical-growth-item-child technical-growth-item-subtitle text-xs text-primary font-mono tracking-wider font-semibold block mb-1">
          {subtitle}
        </time>
        <Title className="technical-growth-item-child technical-growth-item-title my-1.5">
          <h3 className="text-xl font-dana font-bold">{title}</h3>
        </Title>
        <p className="technical-growth-item-child technical-growth-item-description text-sm text-base-content/80 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </li>
  )
}

export default TechnicalGrowthItem
