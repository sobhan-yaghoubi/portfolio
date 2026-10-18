"use client"

import React, { useEffect } from "react"
import useTechnicalSkill from "@/hooks/store/useTechnicalSkill"

import { TechnicalSkillListProps } from "@/types/TechnicalSkill"

import Link from "next/link"
import SkillButton from "./SkillButton"

const TechnicalSkillList: React.FC<TechnicalSkillListProps> = ({
  technicalSkills,
}) => {
  const { technicalSkill, setTechnicalSkill } = useTechnicalSkill()
  useEffect(() => {
    const firstTechnicalSkill = technicalSkills.at(0)

    if (!technicalSkill && firstTechnicalSkill)
      setTechnicalSkill(firstTechnicalSkill)
  }, [technicalSkill])

  return (
    <ul id="skill-list" className="h-fit flex flex-wrap gap-3">
      {technicalSkills?.map((skill) => (
        <li className="skill-item" key={skill.id}>
          <Link className="lg:hidden" href={`#${skill.name}`}>
            <SkillButton skill={skill} />
          </Link>

          <SkillButton className="max-lg:hidden" skill={skill} />
        </li>
      ))}
    </ul>
  )
}

export default TechnicalSkillList
