import React from "react"
import faMessages from "@/messages/fa.json"

import { getLinkedinFeed } from "@/services/linkedin"

import LinkedinFeedClient from "./LinkedinFeedClient"

const LinkedinFeed: React.FC = async () => {
  const initialFeed = await getLinkedinFeed()

  return (
    <LinkedinFeedClient
      initialFeed={initialFeed}
      messages={faMessages.home.article}
    />
  )
}

export default LinkedinFeed
