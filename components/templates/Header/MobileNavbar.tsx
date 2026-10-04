"use client"

import React, { ReactNode, useState } from "react"
import faMessages from "@/messages/fa.json"

import { MenuIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"

import ChangeThemeButton from "../../modules/ChangeThemeButton"
import Link from "next/link"
import Search from "../../modules/Search"
import Indicator from "@/components/modules/Indicator"

type MobileNavbarProps = {
  menuList: { href: string; title: string; isSoon: boolean }[]
  ShareButtonComponent: ReactNode
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuList, ShareButtonComponent }) => {
  const [isMenu, setIsMenu] = useState(false)
  const { utils } = faMessages

  return (
    <div className="mobile w-full h-full center flex-row-reverse justify-between lg:hidden">
      <div>{ShareButtonComponent}</div>
      <div>
        <button
          type="button"
          onClick={() => setIsMenu(true)}
          className="btn btn-ghost btn-sm p-2"
          aria-label="Open menu"
        >
          <MenuIcon className="icon" />
        </button>

        {/* Backdrop Overlay */}
        {isMenu && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenu(false)}
          />
        )}

        {/* Slide-out Sidebar */}
        <aside
          dir="rtl"
          className={cn(
            "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-base-200 text-foreground p-6 shadow-2xl border-l border-white/10 transition-transform duration-300 ease-in-out flex flex-col",
            isMenu ? "translate-x-0" : "translate-x-full pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-dana font-bold text-lg">منو</span>
            <div className="flex items-center gap-2">
              <ChangeThemeButton className="btn btn-outline btn-sm" />
              <button
                type="button"
                onClick={() => setIsMenu(false)}
                aria-label="Close sidebar"
                className="btn btn-outline btn-sm"
              >
                <X className="icon" />
              </button>
            </div>
          </div>

          <div className="my-4">
            <Search />
          </div>

          <ul className="flex flex-col gap-2 overflow-y-auto flex-1">
            {menuList.map((item, index) => (
              <li onClick={() => setIsMenu(false)} key={index} className="relative w-full">
                {item.isSoon && <Indicator className="-top-1">{utils.soon}</Indicator>}
                <Link
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors font-medium"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default MobileNavbar
