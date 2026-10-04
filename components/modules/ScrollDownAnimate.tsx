import { cn } from "@/lib/utils"
import React from "react"

type ScrollDownAnimateProps = {} & React.HTMLAttributes<HTMLDivElement>

const ScrollDownAnimate = ({ ...props }: ScrollDownAnimateProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-5 h-10 border-2 border-solid rounded-md flex justify-center pt-2 border-[var(--dark-background)] dark:border-[var(--light-background)]",
        props.className,
      )}
    >
      <div className="size-2 rounded-full bg-[var(--dark-background)] dark:bg-[var(--light-background)] animate-bounce" />
    </div>
  )
}

export default ScrollDownAnimate
