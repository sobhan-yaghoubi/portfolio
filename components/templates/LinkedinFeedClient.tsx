"use client"

import React, { useEffect, useRef, useState } from "react"
import type faMessages from "@/messages/fa.json"

import { Linkedin } from "lucide-react"
import { useGSAP } from "@gsap/react"

import { useGetLinkedinFeed } from "@/hooks/useGetLinkedinFeed"
import { socialMediaData } from "@/data/socialMedia"
import { createTimeline, withMotion } from "@/animation/animationUtils"
import { TypeLinkedinFeed } from "@/types/Linkedin"

import Title from "../modules/Title"
import LinkedinCard from "../modules/LinkedinCard"

const FALLBACK_PROFILE_URL =
  socialMediaData.find((social) => social.id === "linkedin")?.link ??
  "https://www.linkedin.com/in/sobhan-yaghoubi"

type TypeLinkedinFeedClientProps = {
  initialFeed: TypeLinkedinFeed
  messages: (typeof faMessages)["home"]["article"]
}

const LinkedinFeedClient: React.FC<TypeLinkedinFeedClientProps> = ({
  initialFeed,
  messages,
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  const { data: feed } = useGetLinkedinFeed(initialFeed, isNearViewport)
  const { items, profileUrl } = feed

  const animatedIds = useRef(new Set(initialFeed.items.map((item) => item.id)))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setIsNearViewport(true)
      },
      { rootMargin: "600px 0px" },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useGSAP(
    () => {
      const newIds = items
        .map((item) => item.id)
        .filter((id) => !animatedIds.current.has(id))
      if (!newIds.length) return

      newIds.forEach((id) => animatedIds.current.add(id))
      const targets = newIds
        .map((id) => `[data-linkedin-id="${CSS.escape(id)}"]`)
        .join(",")

      withMotion(() => {
        createTimeline("#linkedin-feed", "-50%").fromTo(
          targets,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, stagger: 0.2 },
        )
      })
    },
    { dependencies: [items], scope: sectionRef },
  )

  const linkedinUrl = profileUrl || FALLBACK_PROFILE_URL

  return (
    <section ref={sectionRef} id="linkedin-feed">
      <Title id="linkedin-feed-title-wrapper" size="lg" className="text-center">
        <h2 className="linkedin-feed-title-child">{messages.title}</h2>
        <h4 className="linkedin-feed-title-child w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          {messages.desc}
        </h4>
      </Title>

      {items.length ? (
        <>
          <div className="my-12 flex gap-3 md:gap-10 overflow-hidden max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <div
                className="linkedin-card min-w-72 max-w-full flex-1"
                data-linkedin-id={item.id}
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
              <span>{messages.viewAll}</span>
            </a>
          </div>
        </>
      ) : (
        <div className="linkedin-card my-12 bg-base-200 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
          <span className="p-3 rounded-2xl bg-primary/15 text-primary">
            <Linkedin aria-hidden="true" className="size-6" />
          </span>
          <p className="text-body-sm measure-sm">{messages.empty}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md gap-2"
          >
            <Linkedin aria-hidden="true" className="size-4" />
            <span>{messages.viewAll}</span>
          </a>
        </div>
      )}
    </section>
  )
}

export default LinkedinFeedClient
