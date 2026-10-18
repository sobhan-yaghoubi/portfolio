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
  Monitor,
  Target,
  UserCheck,
  FolderGit2,
  Box,
  Sparkles,
  Trophy,
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

      {/* Featured Cover Showcase */}
      {project.image && (
        <section className="relative my-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 -z-10" />
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-base-200/90 shadow-2xl backdrop-blur-md">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              priority
            />
          </div>
        </section>
      )}

      {/* The Problem & My Role */}
      {(project.theProblem || project.myRole) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          {project.theProblem && (
            <div className="bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="size-6 text-primary shrink-0" />
                  <h2 className="text-xl md:text-2xl font-dana font-bold text-base-content">
                    چالش اصلی محصول (The Problem)
                  </h2>
                </div>
                <p className="text-sm md:text-base text-base-content/85 leading-relaxed text-justify">
                  {project.theProblem}
                </p>
              </div>
            </div>
          )}

          {project.myRole && (
            <div className="bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="size-6 text-secondary shrink-0" />
                  <h2 className="text-xl md:text-2xl font-dana font-bold text-base-content">
                    نقش و مسئولیت‌های من (My Role & Responsibilities)
                  </h2>
                </div>
                <p className="text-sm md:text-base text-base-content/85 leading-relaxed text-justify">
                  {project.myRole}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

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

      {/* Monorepo Architecture & Workspace Packages */}
      {project.monorepoPackages && project.monorepoPackages.length > 0 && (
        <section className="my-14">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2">
              <FolderGit2 className="size-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-dana font-bold">
                معماری Monorepo و پکیج‌های اشتراکی (pnpm workspaces)
              </h2>
            </div>
            <p className="text-sm md:text-base text-base-content/70">
              جداسازی مسئولیت‌ها و هماهنگی کامل میان Dashboard (توسعه‌یافته با Vite) و Storefront (توسعه‌یافته با Next.js) از طریق پکیج‌های اشتراکی فضای کاری
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.monorepoPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-base-200/60 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col gap-2.5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <Box className="size-4 text-primary shrink-0" />
                  <span className="font-mono text-sm md:text-base font-bold text-primary tracking-wide">
                    {pkg.name}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-base-content/80 leading-relaxed text-justify">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Features & Capabilities */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="my-14">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="size-6 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-dana font-bold">
                امکانات کلیدی و قابلیت‌های پلتفرم
              </h2>
            </div>
            <p className="text-sm md:text-base text-base-content/70">
              ویرایشگر پیشرفته استایل، اتوماسیون محتوا و رزرواسیون، و زیرساخت استاندارد سئوی تکنیکال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-base-200/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-md"
              >
                <div className="flex flex-col gap-2.5">
                  {feat.tag && (
                    <span className="badge badge-secondary badge-outline text-xs w-fit font-medium">
                      {feat.tag}
                    </span>
                  )}
                  <h3 className="text-base md:text-lg font-dana font-bold text-base-content">
                    {feat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-base-content/80 leading-relaxed text-justify">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visual Documentation & Architecture Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="my-16">
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2">
              <Monitor className="size-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-dana font-bold">
                مستندات بصری و معماری پلتفرم
              </h2>
            </div>
            <p className="text-sm md:text-base text-base-content/70">
              تصاویر واقعی از محیط ویرایشگر بصری، پنل‌های تنظیمات اسکیما، ویرایشگر Scoped CSS، خروجی رندر شده Next.js و پیش‌نمایش ریسپانسیو
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-base-200/60 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col gap-5 shadow-xl hover:border-white/20 transition-all duration-300"
              >
                {/* Header with tags and title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {item.tag && (
                        <span className="badge badge-primary badge-outline text-xs font-semibold">
                          {item.tag}
                        </span>
                      )}
                      <h3 className="text-lg md:text-xl font-dana font-bold text-base-content">
                        {item.title}
                      </h3>
                    </div>
                    {item.subtitle && (
                      <span className="text-xs text-base-content/60 font-mono tracking-wide">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold self-start md:self-auto shrink-0"
                  >
                    <span>
                      {item.mediaType === "video"
                        ? "مشاهده ویدیو در تب جدید"
                        : "مشاهده تصویر تمام‌صفحه"}
                    </span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>

                {/* High-res Media Preview (Image or Video Demo) */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-base-300/60 shadow-lg group">
                  {item.mediaType === "video" ? (
                    <video
                      src={item.image}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto bg-black"
                    />
                  ) : (
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-zoom-in"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1600}
                        height={900}
                        className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      />
                    </a>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-sm md:text-base text-base-content/85 leading-relaxed text-justify bg-base-300/40 p-4 rounded-xl border border-white/5">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Impact & Lessons Learned */}
      {project.impact && (
        <section className="my-14 relative overflow-hidden rounded-2xl md:rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-base-200/80 to-secondary/10 p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="p-3.5 rounded-2xl bg-primary/20 text-primary shrink-0 shadow-inner">
              <Trophy className="size-7 md:size-9" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-dana font-bold text-base-content">
                دستاوردها و نتایج کلیدی پروژه (Impact & Lessons Learned)
              </h2>
              <p className="text-sm md:text-base text-base-content/90 leading-relaxed text-justify">
                {project.impact}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Matrix & Breakdown */}
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

          {/* Detailed Categorized Breakdown */}
          {project.techStackBreakdown && project.techStackBreakdown.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5">
              {project.techStackBreakdown.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-base-300/40 rounded-xl p-4 border border-white/5 flex flex-col gap-2.5"
                >
                  <h3 className="font-dana font-bold text-sm text-primary">
                    {group.category}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-base-content/85 font-iran-sans">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
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
