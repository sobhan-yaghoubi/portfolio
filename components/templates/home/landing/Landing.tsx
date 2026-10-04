import React from "react"

import PackageList from "./PackageList"
import ContentLanding from "./Content"
import ButtonList from "./ButtonList"

const Landing: React.FC = () => {
  return (
    <section className="center flex-col">
      <div
        id="landing-bulb"
        className="size-10 rounded-full absolute z-0 -top-0"
      />
      <PackageList />
      <ContentLanding />
      <ButtonList />
    </section>
  )
}

export default Landing
