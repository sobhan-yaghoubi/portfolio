import React from "react"
import faMessages from "@/messages/fa.json"

import { FileText, FolderDown } from "lucide-react"

import Link from "next/link"

const ButtonList: React.FC = () => {
  const { readOnline, download } = faMessages.about.buttons
  return (
    <div
      id="about-me-landing-button-list"
      className="h-fit my-8 sm:my-12 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-0 overflow-hidden"
    >
      <Link href={"/cv"}>
        <button className="access-button btn btn-primary btn-sm sm:btn-md whitespace-nowrap">
          <span className="hidden sm:inline">{readOnline}</span>
          <span className="sm:hidden">رزومه آنلاین</span>
          <FileText className="icon" />
        </button>
      </Link>

      <div
        id="about-me-landing-button-list-split"
        className="divider divider-horizontal mx-2 hidden sm:block"
      />

      <Link href="/sobhan-yaghoubi-resume.pdf" target="_blank" download>
        <button className="access-button btn btn-ghost btn-sm sm:btn-md whitespace-nowrap border border-white/10 sm:border-transparent">
          <FolderDown className="icon" />
          <span className="hidden sm:inline">{download}</span>
          <span className="sm:hidden">دانلود رزومه</span>
        </button>
      </Link>
    </div>
  )
}

export default ButtonList
