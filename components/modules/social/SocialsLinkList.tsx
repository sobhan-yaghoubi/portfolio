import React from "react"

import { getProfile } from "@/services/profile"
import { getSocialMediaList } from "@/services/socialMedia"

import Link from "next/link"
import Email from "../Email"
import ContactMeButton from "../../templates/ContactMeButton"

const SocialLinkList: React.FC = async () => {
  const socialMediaList = await getSocialMediaList()
  const profile = await getProfile()

  return (
    <>
      {socialMediaList.map((socialMedia) => (
        <li key={socialMedia.id}>
          <Link target="_blank" href={socialMedia.link}>
            {socialMedia.title}
          </Link>
        </li>
      ))}
      <div className="divider h-1 my-2" />
      {profile.phone && (
        <li dir="ltr">
          <ContactMeButton phoneNumber={profile.phone} disableIcon />
        </li>
      )}
      <li dir="ltr">
        <Email email={profile.email} disableIcon />
      </li>
    </>
  )
}

export default SocialLinkList
