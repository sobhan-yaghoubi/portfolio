import React from "react"
import faMessages from "@/messages/fa.json"

import { TypeDesktopNavbarProps } from "@/types/Utils"

import Magnetic from "../../modules/Magnetic"
import Link from "next/link"
import ShareButton from "../../modules/ShareButton"
import ChangeThemeButton from "../../modules/ChangeThemeButton"
import Indicator from "@/components/modules/Indicator"

const DesktopNavbar: React.FC<TypeDesktopNavbarProps> = ({ menuList }) => {
  const { utils } = faMessages

  return (
    <nav className="h-full hidden !justify-between lg:center">
      <ul className="flex gap-6">
        {menuList.map((item, index) => (
          <Magnetic magnetSize={0.1} key={index}>
            <li className="relative">
              {item.isSoon && <Indicator className="right-3">{utils.soon}</Indicator>}
              <Link className="relative group" href={item.href}>
                {item.title}
                <span className="bg-transparent size-2 rounded-full top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute transition invisible group-hover:bg-primary group-hover:visible"></span>
              </Link>
            </li>
          </Magnetic>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <ShareButton />
        <ChangeThemeButton />
      </div>
    </nav>
  )
}

export default DesktopNavbar
