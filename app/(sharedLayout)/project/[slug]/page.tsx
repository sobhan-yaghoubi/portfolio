//TODO: clean this page for component and structure
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
  Cpu,
  PlayCircle,
} from "lucide-react"

import { toFaDigits } from "@/lib/utils"
import { TypeProjectSection } from "@/types/Project"

import Title from "@/components/modules/Title"
import AnimateElement from "@/components/modules/Animate/TemplateAnimate"
import ProjectToc from "@/components/templates/project/ProjectToc"

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

const SectionHeading: React.FC<{
  index: number
  title: string
  subtitle?: string
  icon: React.ReactNode
}> = ({ index, title, subtitle, icon }) => (
  <div className="project-reveal flex flex-col gap-2 mb-6">
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="font-mono text-xs tabular-nums text-primary/70 border border-primary/25 rounded-md px-1.5 py-0.5 shrink-0"
      >
        {toFaDigits(index).padStart(2, "۰")}
      </span>
      <span aria-hidden="true" className="text-primary shrink-0">
        {icon}
      </span>
      <h2 className="text-xl md:text-2xl font-dana font-bold">{title}</h2>
    </div>
    {subtitle && <p className="text-body-sm measure">{subtitle}</p>}
  </div>
)

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const hasProblemBlock = Boolean(project.theProblem || project.myRole)
  const hasHighlights = Boolean(project.highlights?.length)
  const hasChallenges = Boolean(project.challenges?.length)
  const hasPackages = Boolean(project.monorepoPackages?.length)
  const hasFeatures = Boolean(project.keyFeatures?.length)
  const hasGallery = Boolean(project.gallery?.length)
  const hasStack = Boolean(project.technicalSkillList?.length)

  const sections: TypeProjectSection[] = [
    hasProblemBlock && { id: "problem", title: "مسئله و نقش من" },
    hasHighlights && { id: "highlights", title: "ویژگی‌های کلیدی" },
    hasChallenges && { id: "challenges", title: "چالش‌های مهندسی" },
    hasPackages && { id: "packages", title: "معماری Monorepo" },
    hasFeatures && { id: "features", title: "امکانات محصول" },
    hasGallery && { id: "gallery", title: "مستندات بصری" },
    project.impact && { id: "impact", title: "دستاوردها" },
    hasStack && { id: "stack", title: "تکنولوژی‌ها" },
  ].filter(Boolean) as TypeProjectSection[]

  const sectionNumber = (id: string) =>
    sections.findIndex((section) => section.id === id) + 1

  const videoCount =
    project.gallery?.filter((item) => item.mediaType === "video").length ?? 0

  const metaFacts = [
    project.role && { label: "نقش من", value: project.role },
    project.category && { label: "نوع محصول", value: project.category },
    hasStack && {
      label: "تکنولوژی‌های کلیدی",
      value: project.technicalSkillList.map((skill) => skill.name).join("، "),
    },
    hasGallery && {
      label: "مستندات بصری",
      value: `${toFaDigits(project.gallery!.length)} نما${
        videoCount ? ` شامل ${toFaDigits(videoCount)} ویدیو` : ""
      }`,
    },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <AnimateElement selectedAnimationName="animateProjectDetail">
      <div id="project-detail" className="py-8 lg:py-12">
        <div className="project-hero-child flex items-center justify-between gap-3 mb-8">
          <Link
            href="/#project-list"
            className="inline-flex items-center gap-2 min-h-11 text-sm text-base-content/70 hover:text-primary transition-colors group"
          >
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
            <span>بازگشت به لیست پروژه‌ها</span>
          </Link>
          {project.category && (
            <span className="badge badge-primary badge-outline text-xs px-3 py-2">
              {project.category}
            </span>
          )}
        </div>

        <section className="mb-10">
          <div className="flex flex-col gap-4">
            <div className="project-hero-child flex flex-wrap items-center gap-2">
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

            <Title size="lg" className="project-hero-child">
              <h1 className="leading-tight">{project.title}</h1>
            </Title>

            <p className="project-hero-child text-lead measure mt-1">
              {project.description}
            </p>

            <div className="project-hero-child flex flex-wrap items-center gap-3 mt-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md gap-2 shadow-lg shadow-primary/20"
                >
                  <span>مشاهده آنلاین وب‌سایت</span>
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-md gap-2"
                >
                  <span>سورس‌کد در گیت‌هاب</span>
                  <Github aria-hidden="true" className="size-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {project.image && (
          <section className="project-hero-child relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 -z-10" />
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-base-200/90 shadow-2xl">
              <Image
                src={project.image}
                alt={`نمای کلی پروژه ${project.shortTitle || project.title}`}
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </section>
        )}

        {metaFacts.length > 0 && (
          <section
            aria-labelledby="at-a-glance"
            className="project-hero-child mb-10"
          >
            <h2 id="at-a-glance" className="sr-only">
              خلاصه پروژه در یک نگاه
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {metaFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-base-200/80 p-4 flex flex-col gap-1.5"
                >
                  <dt className="text-[11px] uppercase tracking-wide text-base-content/55 font-mono">
                    {fact.label}
                  </dt>
                  <dd className="text-[13px] leading-6 text-base-content/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 xl:col-span-9 flex flex-col gap-14">
            {sections.length > 1 && (
              <ProjectToc sections={sections} variant="inline" />
            )}

            {hasProblemBlock && (
              <section id="problem" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("problem")}
                  title="مسئله و نقش من"
                  subtitle="چرا این محصول ساخته شد و دقیقاً کدام بخش‌ها بر عهده من بود."
                  icon={<Target className="size-5" />}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {project.theProblem && (
                    <article className="project-reveal bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-7">
                      <h3 className="flex items-center gap-2 text-base md:text-lg font-dana font-bold mb-3">
                        <Target
                          aria-hidden="true"
                          className="size-5 text-primary shrink-0"
                        />
                        چالش اصلی محصول
                      </h3>
                      <p className="text-body">{project.theProblem}</p>
                    </article>
                  )}
                  {project.myRole && (
                    <article className="project-reveal bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-7">
                      <h3 className="flex items-center gap-2 text-base md:text-lg font-dana font-bold mb-3">
                        <UserCheck
                          aria-hidden="true"
                          className="size-5 text-secondary shrink-0"
                        />
                        نقش و مسئولیت‌های من
                      </h3>
                      <p className="text-body">{project.myRole}</p>
                    </article>
                  )}
                </div>
              </section>
            )}

            {hasHighlights && (
              <section id="highlights" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("highlights")}
                  title="ویژگی‌های کلیدی"
                  subtitle={`${toFaDigits(
                    project.highlights!.length,
                  )} مورد از مهم‌ترین دستاوردهای فنی این پروژه.`}
                  icon={<Layers className="size-5" />}
                />
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3.5">
                  {project.highlights!.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="project-reveal flex items-start gap-3"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-5 text-primary shrink-0 mt-1"
                      />
                      <span className="text-body-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hasChallenges && (
              <section id="challenges" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("challenges")}
                  title="چالش‌های مهندسی و راه‌حل‌ها"
                  subtitle="مسائلی که در مسیر توسعه پیش آمد و تصمیم فنی‌ای که برای هرکدام گرفته شد."
                  icon={<Award className="size-5" />}
                />
                <div className="flex flex-col gap-4">
                  {project.challenges!.map((challenge, idx) => (
                    <article
                      key={idx}
                      className="project-reveal bg-base-200/60 border border-white/10 rounded-2xl p-6 md:p-7 border-r-2 border-r-primary/50"
                    >
                      <h3 className="flex items-start gap-2.5 text-base md:text-lg font-dana font-bold text-primary mb-3">
                        <AlertCircle
                          aria-hidden="true"
                          className="size-5 shrink-0 mt-0.5"
                        />
                        <span className="measure-sm">{challenge.title}</span>
                      </h3>
                      <p className="text-body">{challenge.solution}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {hasPackages && (
              <section id="packages" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("packages")}
                  title="معماری Monorepo و پکیج‌های اشتراکی"
                  subtitle="جداسازی مسئولیت‌ها از طریق پکیج‌های مشترک فضای کاری (pnpm workspaces)."
                  icon={<FolderGit2 className="size-5" />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.monorepoPackages!.map((pkg, idx) => (
                    <article
                      key={idx}
                      className="project-reveal bg-base-200/60 border border-white/10 rounded-2xl p-5 flex flex-col gap-2.5"
                    >
                      <h3 className="flex items-center gap-2">
                        <Box
                          aria-hidden="true"
                          className="size-4 text-primary shrink-0"
                        />
                        <span className="font-mono text-sm font-bold text-primary tracking-wide dir-left">
                          {pkg.name}
                        </span>
                      </h3>
                      <p className="text-body-sm">{pkg.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {hasFeatures && (
              <section id="features" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("features")}
                  title="امکانات کلیدی محصول"
                  subtitle={`${toFaDigits(
                    project.keyFeatures!.length,
                  )} قابلیتی که تجربه کاربری این محصول را شکل می‌دهند.`}
                  icon={<Sparkles className="size-5" />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.keyFeatures!.map((feat, idx) => (
                    <article
                      key={idx}
                      className="project-reveal bg-base-200/60 border border-white/10 rounded-2xl p-6 flex flex-col gap-2.5"
                    >
                      {feat.tag && (
                        <span className="badge badge-secondary badge-outline text-[11px] w-fit">
                          {feat.tag}
                        </span>
                      )}
                      <h3 className="text-base md:text-lg font-dana font-bold">
                        {feat.title}
                      </h3>
                      <p className="text-body-sm">{feat.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {hasGallery && (
              <section id="gallery" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("gallery")}
                  title="مستندات بصری"
                  subtitle={`${toFaDigits(project.gallery!.length)} نما از محیط واقعی محصول${
                    videoCount
                      ? `، شامل ${toFaDigits(videoCount)} ویدیوی دمو`
                      : ""
                  }. برای دیدن اندازه کامل، روی هر تصویر بزنید.`}
                  icon={<Monitor className="size-5" />}
                />

                <div className="columns-1 md:columns-2 gap-5">
                  {project.gallery!.map((item, idx) => {
                    const isVideo = item.mediaType === "video"

                    return (
                      <figure
                        key={idx}
                        className={`project-reveal bg-base-200/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col mb-5 break-inside-avoid ${
                          isVideo ? "[column-span:all]" : ""
                        }`}
                      >
                        <div className="relative bg-base-300/60 border-b border-white/5 group">
                          {isVideo ? (
                            <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] bg-black">
                              <video
                                src={item.image}
                                poster={item.poster}
                                controls
                                // playsInline
                                // preload="metadata"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`مشاهده تصویر «${item.title}» در اندازه کامل`}
                              className="block cursor-zoom-in overflow-hidden"
                            >
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={1600}
                                height={900}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                              />
                            </a>
                          )}
                        </div>

                        <figcaption className="p-5 flex flex-col gap-2.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {item.tag && (
                              <span className="badge badge-primary badge-outline text-[11px]">
                                {isVideo && (
                                  <PlayCircle
                                    aria-hidden="true"
                                    className="size-3 ml-1"
                                  />
                                )}
                                {item.tag}
                              </span>
                            )}
                            <h3 className="text-sm md:text-base font-dana font-bold">
                              {item.title}
                            </h3>
                          </div>
                          {item.subtitle && (
                            <span className="text-[11px] text-base-content/55 font-mono tracking-wide dir-left text-start">
                              {item.subtitle}
                            </span>
                          )}
                          {item.description && (
                            <p className="text-body-sm">{item.description}</p>
                          )}
                        </figcaption>
                      </figure>
                    )
                  })}
                </div>
              </section>
            )}

            {project.impact && (
              <section id="impact" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("impact")}
                  title="دستاوردها و نتایج"
                  icon={<Trophy className="size-5" />}
                />
                <div className="project-reveal relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-base-200/80 to-secondary/10 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <span className="p-3 rounded-2xl bg-primary/20 text-primary shrink-0">
                      <Trophy aria-hidden="true" className="size-6" />
                    </span>
                    <p className="text-body">{project.impact}</p>
                  </div>
                </div>
              </section>
            )}

            {hasStack && (
              <section id="stack" className="project-section scroll-mt-8">
                <SectionHeading
                  index={sectionNumber("stack")}
                  title="تکنولوژی‌ها و ابزارها"
                  icon={<Cpu className="size-5" />}
                />

                <ul className="project-reveal flex flex-wrap gap-2.5 mb-6">
                  {project.technicalSkillList.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center gap-2 bg-base-200/80 px-3.5 py-2 rounded-xl border border-white/5"
                    >
                      <Image
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        className="size-5 object-contain"
                      />
                      <span className="text-sm font-medium font-iran-sans">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {project.techStackBreakdown &&
                  project.techStackBreakdown.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                      {project.techStackBreakdown.map((group, idx) => (
                        <div
                          key={idx}
                          className="project-reveal bg-base-200/60 rounded-xl p-4 border border-white/10 flex flex-col gap-2.5"
                        >
                          <h3 className="font-dana font-bold text-sm text-primary">
                            {group.category}
                          </h3>
                          <ul className="space-y-2 text-[13px] leading-6 text-base-content/85">
                            {group.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-2"
                              >
                                <span
                                  aria-hidden="true"
                                  className="size-1.5 rounded-full bg-secondary shrink-0 mt-2"
                                />
                                <span className="dir-left text-start">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
              </section>
            )}
          </div>

          {sections.length > 1 && (
            <aside className="hidden xl:block xl:col-span-3">
              <div className="sticky top-6">
                <ProjectToc sections={sections} />
              </div>
            </aside>
          )}
        </div>

        <section className="project-section mt-16">
          <div className="project-reveal bg-gradient-to-r from-base-200 to-base-300 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-xl md:text-2xl font-dana font-bold mb-3">
              علاقه‌مند به گفتگو درباره این پروژه یا همکاری هستید؟
            </h2>
            <p className="text-body-sm max-w-lg mx-auto mb-6">
              می‌توانیم پیرامون معماری سیستم، جزئیات فنی و فرصت‌های همکاری گفتگو
              کنیم.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#footer" className="btn btn-primary btn-md">
                ارتباط مستقیم با من
              </Link>
              <a
                href="/sobhan-yaghoubi-resume.pdf"
                target="_blank"
                download
                className="btn btn-outline btn-md"
              >
                دانلود رزومه (PDF)
              </a>
            </div>
          </div>
        </section>
      </div>
    </AnimateElement>
  )
}
