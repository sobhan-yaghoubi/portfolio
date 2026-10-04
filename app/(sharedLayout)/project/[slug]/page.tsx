import React from "react"
import { notFound } from "next/navigation"
import { getProjectBySlug, getProjectList } from "@/services/project"
import type { Metadata } from "next"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Layers,
  Award,
} from "lucide-react"

import Title from "@/components/modules/Title"
import ReusableAnimate from "@/components/modules/Animate/ReusableAnimate"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = await getProjectList()
  return projects.map((p) => ({
    slug: p.slug || p.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) return { title: "پروژه یافت نشد" }

  return {
    title: `${project.shortTitle || project.title} | سبحان یعقوبی`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <ReusableAnimate
      selectedAnimationName="fadeInUp"
      duration={0.8}
      className="py-8 lg:py-12"
    >
      {/* Back button & Breadcrumbs */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/#project-list"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-primary transition-colors group"
        >
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          <span>بازگشت به لیست پروژه‌ها</span>
        </Link>
        {project.category && (
          <span className="badge badge-primary badge-outline text-xs px-3 py-2">
            {project.category}
          </span>
        )}
      </div>

      {/* Hero Header */}
      <section className="relative mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.domain && (
              <span className="badge badge-neutral text-xs font-iran-sans">
                {project.domain}
              </span>
            )}
            {project.role && (
              <span className="badge badge-secondary badge-outline text-xs font-iran-sans">
                {project.role}
              </span>
            )}
          </div>

          <Title size="lg">
            <h1 className="text-3xl md:text-5xl font-dana font-bold leading-tight">
              {project.title}
            </h1>
          </Title>

          <p className="text-base-content/80 text-base md:text-lg leading-relaxed text-justify mt-2 max-w-4xl">
            {project.description}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm md:btn-md gap-2 shadow-lg shadow-primary/20"
              >
                <span>مشاهده آنلاین وب‌سایت</span>
                <ExternalLink className="size-4" />
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm md:btn-md gap-2"
              >
                <span>سورس‌کد در گیت‌هاب</span>
                <Github className="size-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid: Architecture & Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
        {/* Column 1: Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="size-6 text-primary" />
                <h2 className="text-xl md:text-2xl font-dana font-bold">
                  ویژگی‌ها و معماری فنی
                </h2>
              </div>
              <ul className="space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-base-content/90 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Column 2: Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="size-6 text-secondary" />
                <h2 className="text-xl md:text-2xl font-dana font-bold">
                  چالش‌های مهندسی و راه‌حل‌ها
                </h2>
              </div>
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="bg-base-300/40 rounded-xl p-4 border border-white/5"
                  >
                    <h3 className="font-dana font-bold text-sm md:text-base text-primary mb-2 flex items-center gap-2">
                      <AlertCircle className="size-4 shrink-0" />
                      {challenge.title}
                    </h3>
                    <p className="text-xs md:text-sm text-base-content/80 leading-relaxed text-justify">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack Matrix */}
      {project.technicalSkillList && project.technicalSkillList.length > 0 && (
        <section className="bg-base-200/40 border border-white/5 rounded-2xl p-6 md:p-8 my-12">
          <h2 className="text-xl font-dana font-bold mb-6">
            تکنولوژی‌ها و ابزارهای به‌کاررفته
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technicalSkillList.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 bg-base-300/80 hover:bg-base-300 px-4 py-2 rounded-xl border border-white/5 transition-colors"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="size-5 object-contain"
                />
                <span className="text-sm font-medium font-iran-sans">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Contextual CTA */}
      <section className="bg-gradient-to-r from-base-200 to-base-300 border border-white/10 rounded-2xl p-8 text-center my-12">
        <h3 className="text-xl md:text-2xl font-dana font-bold mb-3">
          علاقه‌مند به گفتگو درباره این پروژه یا همکاری هستید؟
        </h3>
        <p className="text-sm text-base-content/70 max-w-lg mx-auto mb-6">
          می‌توانیم پیرامون معماری سیستم، جزئیات فنی و فرصت‌های همکاری گفتگو
          کنیم.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/#footer" className="btn btn-primary btn-sm md:btn-md">
            ارتباط مستقیم با من
          </Link>
          <a
            href="/sobhan-yaghoubi-resume.pdf"
            target="_blank"
            download
            className="btn btn-outline btn-sm md:btn-md"
          >
            دانلود رزومه (PDF)
          </a>
        </div>
      </section>
    </ReusableAnimate>
  )
}
