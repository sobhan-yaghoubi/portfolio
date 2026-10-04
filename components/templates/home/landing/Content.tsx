import React from "react"
import { getProfile } from "@/services/profile"

import faMessages from "@/messages/fa.json"

import Title from "@/components/modules/Title"
import Image from "next/image"

const ContentLanding: React.FC = async () => {
  const { title } = faMessages.heroSection
  const profile = await getProfile()

  const titleText = title
    .replace(
      /Head of Frontend/gi,
      `<span class="highlight-title">Head of Frontend</span>`
    )
    .replace(
      /Full-Stack/gi,
      `<span class="highlight-title">Full-Stack</span>`
    )
  return (
    <>
      <div id="landing-content-wrapper" className="center flex-col lg:mt-12">
        <Image
          id="landing-profile"
          width={200}
          height={200}
          className="bg-neutral size-40 mb-4 rounded-full object-cover"
          draggable={false}
          src={profile?.image || ""}
          alt="profile"
        />

        <Title id="landing-title" size="lg" className="text-center lg:whitespace-pre">
          <h1 dangerouslySetInnerHTML={{ __html: titleText }} />
        </Title>

        <p
          id="landing-description"
          className="w-full text-center px-5 my-6 md:px-24 lg:px-56 xl:px-80"
        >
          {profile?.bio}
        </p>
      </div>
    </>
  )
}

export default ContentLanding
