import React from "react"

import AnimateElement from "@/components/modules/Animate/TemplateAnimate"

type ErrorStateProps = {
  code: React.ReactNode
  title: string
  description: string
  actions: React.ReactNode
  footnote?: React.ReactNode
}

const ErrorState: React.FC<ErrorStateProps> = ({
  code,
  title,
  description,
  actions,
  footnote,
}) => (
  <AnimateElement selectedAnimationName="animateErrorPage">
    <main
      id="error-page"
      className="container min-h-[80dvh] flex flex-col items-center justify-center text-center py-16 gap-6 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[36rem] max-w-[90vw] rounded-full bg-primary/20 blur-[120px] -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 size-80 max-w-[70vw] rounded-full bg-secondary/10 blur-[100px] -z-10"
      />

      <p className="error-code font-title text-7xl sm:text-8xl md:text-9xl leading-none bg-gradient-to-b from-primary via-primary to-secondary bg-clip-text text-transparent select-none">
        {code}
      </p>

      <h1 className="error-reveal text-2xl md:text-3xl font-dana font-bold">
        {title}
      </h1>

      <p className="error-reveal text-body measure-sm mx-auto">{description}</p>

      <div className="error-reveal flex flex-wrap items-center justify-center gap-3 mt-2">
        {actions}
      </div>

      {footnote && <div className="error-reveal mt-4">{footnote}</div>}
    </main>
  </AnimateElement>
)

export default ErrorState
