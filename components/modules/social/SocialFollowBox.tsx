import React from "react"
import { cn } from "@/lib/utils"

import { TypeSocialFollowBoxProps } from "@/types/Utils"

import Image from "next/image"
import CopyToClipboard from "../CopyToClipboard"
import { ArrowUpLeft, AtSign } from "lucide-react"
import Link from "next/link"

const backImagePositionClassName = [
  "size-12 -top-5 -right-2",
  "size-8 top-5 right-5",
  "size-6 -top-3 right-12",
  "size-10 top-5 right-16",
  "size-5 -top-1 right-20",
  "size-4 top-1 right-28",
  "size-3 top-6 right-28",
]

const SocialFollowBox: React.FC<TypeSocialFollowBoxProps> = ({ socialMedia }) => {
  return (
    <div className="max-w-full min-h-48 pt-10 shadow-xl rounded-3xl overflow-hidden relative">
      <div className="glass w-full h-16 absolute top-0 left-0 !backdrop-blur-0">
        {backImagePositionClassName.map((className, index) => (
          <Image
            key={index}
            className={cn("absolute opacity-50", className)}
            width={30}
            height={30}
            src={socialMedia.backImage}
            alt="image"
          />
        ))}
      </div>
      <div className="bg-color *:bg-color-content w-full h-full px-3 pb-2 pt-7 rounded-t-3xl relative z-10">
        <Image
          className="rounded-full absolute -top-6 left-3"
          width={48}
          height={48}
          src={socialMedia.logo}
          alt="telegram"
        />
        <div id="header" className="h-full flex flex-col gap-2 justify-between">
          <div>
            <h5 className="text-xl font-title">{socialMedia.title}</h5>
            <h6 className="text-xs text-neutral-400 font-medium">{socialMedia.subtitle}</h6>
          </div>
          <p className="text-sm flex-1">{socialMedia.description}</p>
          <div className="flex *:gap-1 justify-between">
            <div className="flex flex-1 justify-between overflow-x-auto">
              <CopyToClipboard value={socialMedia.username}>
                <p className="badge badge-sm py-3 gap-1">
                  <AtSign className="icon-sm" />
                  <span className="max-w-32 truncate">{socialMedia.username}</span>
                </p>
              </CopyToClipboard>
              <button className="badge badge-sm py-3 gap-1">
                <Link target="_blank" href={socialMedia.link}>
                  مشاهده
                </Link>
                <ArrowUpLeft className="icon-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialFollowBox
