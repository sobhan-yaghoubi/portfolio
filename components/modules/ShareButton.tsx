import React from "react"

import { Share2 } from "lucide-react"
import SocialsLinkList from "./social/SocialsLinkList"

const ShareButton: React.FC = () => {
  return (
    <div className="relative group">
      <button
        type="button"
        tabIndex={0}
        aria-label="Share"
        className="btn btn-ghost btn-sm p-2"
      >
        <Share2 className="icon" />
      </button>
      <div className="invisible group-hover:visible group-focus-within:visible opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full pt-2 z-50">
        <ul
          tabIndex={0}
          className="p-2 shadow-2xl bg-base-200 rounded-2xl border border-white/10 min-w-52 flex flex-col [&_a]:inline-block [&_a]:w-full [&_a:hover]:bg-base-300/40 [&_a]:py-2 [&_a]:px-1.5 [&_a]:rounded-md"
        >
          <SocialsLinkList />
        </ul>
      </div>
    </div>
  )
}

export default ShareButton
