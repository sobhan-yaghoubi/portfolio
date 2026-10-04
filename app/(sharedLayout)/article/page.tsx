import React from "react"

import QuickAccessArticleSide from "@/components/modules/QuickAccessArticleSide/QuickAccessArticleSide"
import Article from "@/components/modules/Article"
import RelatedArticleList from "@/components/modules/RelatedArticleList"
import CommentArticle from "@/components/modules/CommentArticle"

const page: React.FC = () => {
  return (
    <>
      <div className="min-h-screen grid grid-cols-4 gap-6">
        <section className="col-span-4 relative xl:col-span-3">
          <QuickAccessArticleSide isMobile />
          <article
            id="article"
            className="bg-base-200 w-full p-6 rounded-xl [&>*]:text-justify [&>*]:mt-6 first:[&>*]:mt-0"
          >
            <Article />
          </article>
        </section>
        <section className="h-fit max-xl:hidden col-span-1 sticky top-6 [&>*]:p-6 [&>*]:mt-6 first:[&>*]:mt-0">
          <QuickAccessArticleSide />
        </section>
      </div>
      <section className="bg-base-200 p-6 mt-6 col-span-4 rounded-xl">
        <RelatedArticleList />
      </section>
      <section className="bg-base-200 p-6 mt-6 col-span-4 rounded-xl">
        <CommentArticle />
      </section>
      <div className="mb-40" />
    </>
  )
}

export default page
