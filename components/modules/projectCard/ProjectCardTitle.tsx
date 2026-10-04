import React from "react"

import { TypeProjectCardTitleProps } from "@/types/Project"

export const ProjectCardTitle: React.FC<TypeProjectCardTitleProps> = ({ title }) => {
  return (
    <h3
      className="text-lg font-dana font-bold line-clamp-2 min-h-[3.2rem] leading-snug flex items-center"
      title={title}
    >
      {title}
    </h3>
  )
}

export default ProjectCardTitle
