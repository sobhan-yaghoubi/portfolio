import React from "react"
import faMessages from "@/messages/fa.json"
import Title from "@/components/modules/Title"
import { ScrollIcon } from "lucide-react"

const Content: React.FC = () => {
  const { title, desc } = faMessages.about
  return (
    <>
      <div
        id="about-me-landing-title-wrapper"
        className="center flex-col relative"
      >
        <div className="liner size-96 mt-12 center rounded-full text-nowrap z-10">
          <Title size="xxl" className="w-auto pt-12">
            <h1>{title}</h1>
          </Title>
        </div>
        <div className="w-5 h-10 border-2 border-solid rounded-md flex justify-center py-1 border-[var(--dark-background)] dark:border-[var(--light-background)]">
          <div className="size-2 rounded-full bg-[var(--dark-background)] dark:bg-[var(--light-background)]" />
        </div>
        <div
          id="about-me-landing-light-bulb"
          className="bg-gradient-to-tr from-primary to-secondary w-72 h-52 rounded-full blur-3xl absolute top-10 -z-10"
        />
      </div>

      <p
        id="about-me-landing-description"
        className="w-full text-center px-5 mt-4 opacity-50 md:px-24 lg:px-56 xl:px-80"
      >
        {desc}
      </p>
    </>
  )
}

export default Content
