"use client"

import React, { ReactNode, useState } from "react"
import faMessages from "@/messages/fa.json"

import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import ChangeThemeButton from "../../modules/ChangeThemeButton"
import Link from "next/link"
import Indicator from "@/components/modules/Indicator"
import { useActiveNavItem } from "@/hooks/useActiveNavItem"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type MobileNavbarProps = {
  menuList: { href: string; title: string; isSoon: boolean }[]
  ShareButtonComponent: ReactNode
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  menuList,
  ShareButtonComponent,
}) => {
  const [isMenu, setIsMenu] = useState(false)
  const { utils } = faMessages
  const isActive = useActiveNavItem()

  return (
    <div className="mobile w-full h-full center flex-row-reverse justify-between lg:hidden">
      <div>{ShareButtonComponent}</div>

      <Sheet open={isMenu} onOpenChange={setIsMenu}>
        <SheetTrigger
          aria-label="باز کردن منو"
          className="btn btn-ghost btn-sm p-2"
        >
          <MenuIcon aria-hidden="true" className="icon" />
        </SheetTrigger>

        <SheetContent
          side="right"
          dir="rtl"
          hideClose
          aria-describedby={undefined}
          className="p-6 flex flex-col"
        >
          <SheetHeader className="flex-row items-center justify-between pb-4 border-b border-white/10 space-y-0">
            <SheetTitle>منو</SheetTitle>
            <div className="flex items-center gap-2">
              <ChangeThemeButton className="btn btn-outline btn-sm" />
              <SheetClose
                aria-label="بستن منو"
                className="btn btn-outline btn-sm"
              >
                <span aria-hidden="true">✕</span>
              </SheetClose>
            </div>
          </SheetHeader>

          <ul className="flex flex-col gap-2 overflow-y-auto flex-1 mt-4">
            {menuList.map((item, index) => {
              const active = isActive(item.href)

              return (
                <li key={index} className="relative w-full">
                  {item.isSoon && (
                    <Indicator className="-top-1">{utils.soon}</Indicator>
                  )}
                  <SheetClose asChild>
                    <Link
                      className={cn(
                        "block py-2.5 px-3 rounded-xl transition-colors font-medium",
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-white/5",
                      )}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
