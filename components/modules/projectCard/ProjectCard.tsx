"use client"

import React from "react"
import { getWords } from "@/lib/utils"

import { TypeProjectCardProps } from "@/types/Project"

import Image from "next/image"
import ProjectCardTitle from "./ProjectCardTitle"
import ProjectCardButtonList from "./ProjectCardButtonList"
import { ProjectCardButtonDialog, ProjectCardDialog } from "./ProjectCardDialog"

import Link from "next/link"

const ProjectCard: React.FC<TypeProjectCardProps> = ({
  id,
  slug,
  category,
  image,
  title,
  link,
  source,
  description,
  technicalSkillList,
}) => {
  const isModalSupported = description !== getWords(description, 35)

  return (
    <>
      <div className="project-card card bg-base-200 flex-1 min-w-72 max-w-full h-[500px] shadow-xl border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between overflow-hidden">
        <figure className="h-48 p-2 shrink-0">
          <div className="bg-base-300 w-full h-full flex items-center justify-center rounded-xl overflow-hidden relative">
            <Image
              width={400}
              height={300}
              src={image}
              className="w-full h-full object-cover"
              alt="project-image"
            />
          </div>
        </figure>
        <div className="card-body p-4 flex-1 flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            {category && (
              <span className="badge badge-primary badge-outline text-[11px] w-fit">
                {category}
              </span>
            )}
            <ProjectCardTitle title={title} />
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2">
            <p className="line-clamp-3 text-xs md:text-sm text-base-content/80 text-start leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <Link
                href={`/project/${slug || id}`}
                className="text-xs text-primary hover:underline font-bold inline-flex items-center gap-1"
              >
                <span>بررسی داکیومنت و معماری</span>
                <span>←</span>
              </Link>
              {isModalSupported && <ProjectCardButtonDialog modalId={id} />}
            </div>
          </div>

          <div className="flex gap-3 [&>*]:flex-1 pt-1">
            <ProjectCardButtonList link={link} source={source} />
          </div>
        </div>
      </div>
      {isModalSupported && (
        <ProjectCardDialog
          project={{ title, description, link, source, technicalSkillList }}
          modalId={id}
        />
      )}
    </>
  )
}

export default ProjectCard
