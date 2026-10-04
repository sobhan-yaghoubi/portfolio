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
      <div className="project-card card bg-base-200 flex-1 min-w-72 max-w-full h-[490px] shadow-xl border border-white/5 hover:border-white/15 transition-all">
        <figure className="h-52 p-2">
          <div className="!bg-base-300 w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              width={300}
              height={300}
              src={image}
              className="w-auto h-full object-cover"
              alt="project-image"
            />
          </div>
        </figure>
        <div className="card-body px-3 py-4 justify-between">
          <div className="flex flex-col gap-1">
            {category && (
              <span className="badge badge-primary badge-outline text-[11px] w-fit">
                {category}
              </span>
            )}
            <ProjectCardTitle title={title} />
          </div>
          <section className="flex-1">
            <p className="h-20 text-xs md:text-sm overflow-hidden text-base-content/80 text-justify">
              {getWords(description, 28)}
              {isModalSupported && <>...</>}
            </p>
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
              <Link
                href={`/project/${slug || id}`}
                className="text-xs text-primary hover:underline font-bold"
              >
                بررسی داکیومنت و معماری ←
              </Link>
              {isModalSupported && <ProjectCardButtonDialog modalId={id} />}
            </div>
          </section>
          <div className="flex gap-3 [&>*]:flex-1">
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
