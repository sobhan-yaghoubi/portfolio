import React from "react"
import Link from "next/link"

import { TypeProjectCardButtonDialogProps, TypeProjectCardDialogProps } from "@/types/Project"

import ProjectCardButtonList from "./ProjectCardButtonList"
import ProjectCardTitle from "./ProjectCardTitle"

export const ProjectCardButtonDialog: React.FC<TypeProjectCardButtonDialogProps> = ({
  modalId,
}) => {
  return (
    <button
      className="block btn btn-sm btn-link p-0 justify-start"
      onClick={() => {
        if (document) {
          const element = document.getElementById(modalId) as HTMLFormElement
          element.showModal()
        }
      }}
    >
      بهتر ببین
    </button>
  )
}

export const ProjectCardDialog: React.FC<TypeProjectCardDialogProps> = ({ project, modalId }) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-base-200 flex flex-col gap-3">
        <ProjectCardTitle title={project.title} />
        <p>{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project?.technicalSkillList?.map((skill) => (
            <li key={skill.id} className="badge">
              {skill.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-2 pt-2 border-t border-white/10">
          <ProjectCardButtonList link={project.link} source={project.source} />
          <Link href={`/project/${modalId}`} className="btn btn-primary btn-sm">
            بررسی کامل معماری و داکیومنت‌ها
          </Link>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>بستن</button>
      </form>
    </dialog>
  )
}
