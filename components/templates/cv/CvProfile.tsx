import React from "react"

import { TypeCvProfileProps } from "@/types/Cv"

import { MapPin } from "lucide-react"

import Image from "next/image"
import Email from "../../modules/Email"
import Title from "../../modules/Title"
import ContactMeButton from "../ContactMeButton"

const CvProfile: React.FC<TypeCvProfileProps> = ({ profile }) => {
  return (
    <>
      <div className="w-full h-52 flex absolute -top-10 -translate-x-1/2 left-1/2 -z-10">
        <div className="cv-shape bg-primary w-full h-96 blur-3xl rounded-full"></div>
        <div className="cv-shape bg-primary w-full h-52 blur-3xl absolute" />
        <div className="cv-shape bg-primary w-full h-96 blur-3xl rounded-full"></div>
      </div>
      <div className="flex items-center justify-between flex-col gap-6">
        <Image
          width={300}
          height={300}
          className="size-60 bg-neutral rounded-full object-cover"
          src={profile.image || ""}
          alt="profile"
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <p className="btn btn-primary">Front-End & Full-Stack Developer | Team Lead</p>
          <a
            href="/sobhan-yaghoubi-resume.pdf"
            target="_blank"
            download
            className="btn btn-outline btn-sm"
          >
            دانلود رزومه (PDF)
          </a>
        </div>
        <ul className="w-full mt-3 flex justify-between items-center max-lg:flex-col max-lg:gap-6">
          <li className="flex items-center gap-2">
            <Email email={profile.email} className="*:stroke-primary" />
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="icon stroke-primary" />
            <span>{profile.location}</span>
          </li>
          <li className="flex items-center gap-2">
            {profile.phone && (
              <ContactMeButton
                phoneNumber={profile.phone}
                className="flex-row-reverse *:stroke-primary"
              />
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default CvProfile
