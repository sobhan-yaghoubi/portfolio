import React from "react"
import faMessages from "@/messages/fa.json"

import { Linkedin } from "lucide-react"

import { getLinkedinFeed } from "@/services/linkedin"
import { socialMediaData } from "@/data/socialMedia"

import Title from "../modules/Title"
import LinkedinCard from "../modules/LinkedinCard"

const FALLBACK_PROFILE_URL =
  socialMediaData.find((social) => social.id === "linkedin")?.link ??
  "https://www.linkedin.com/in/sobhan-yaghoubi"

const LinkedinFeed: React.FC = async () => {
  const { article } = faMessages.home
  const { items, profileUrl } = await getLinkedinFeed()

  const linkedinUrl = profileUrl || FALLBACK_PROFILE_URL

  return (
    <section id="linkedin-feed">
      <Title id="linkedin-feed-title-wrapper" size="lg" className="text-center">
        <h2 className="linkedin-feed-title-child">{article.title}</h2>
        <h4 className="linkedin-feed-title-child w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          {article.desc}
        </h4>
      </Title>

      {items.length ? (
        <>
          <div className="my-12 flex gap-3 md:gap-10 overflow-hidden max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <div
                className="linkedin-card min-w-72 max-w-full flex-1"
                key={item.id}
              >
                <LinkedinCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-md gap-2"
            >
              <Linkedin aria-hidden="true" className="size-4" />
              <span>{article.viewAll}</span>
            </a>
          </div>
        </>
      ) : (
        <div className="linkedin-card my-12 bg-base-200 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
          <span className="p-3 rounded-2xl bg-primary/15 text-primary">
            <Linkedin aria-hidden="true" className="size-6" />
          </span>
          <p className="text-body-sm measure-sm">{article.empty}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md gap-2"
          >
            <Linkedin aria-hidden="true" className="size-4" />
            <span>{article.viewAll}</span>
          </a>
        </div>
      )}
    </section>
  )
}

export default LinkedinFeed
