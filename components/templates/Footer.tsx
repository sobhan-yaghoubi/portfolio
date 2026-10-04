import React from "react"
import { getProfile } from "@/services/profile"
import { getSocialMediaList } from "@/services/socialMedia"

import { ArrowUp } from "lucide-react"

import SocialFollowBox from "@/components/modules/social/SocialFollowBox"
import ContactMeButton from "./ContactMeButton"
import ScrollTo from "@/components/modules/ScrollTo"
import Email from "@/components/modules/Email"

const Footer: React.FC = async () => {
  const profile = await getProfile()
  const socialMediaList = await getSocialMediaList()
  return (
    <footer id="footer">
      <div className="mb-3 center">
        <ScrollTo className="btn" scrollToElement={"header"}>
          <ArrowUp />
        </ScrollTo>
      </div>
      <div className="container pb-3 grid grid-cols-1 max-lg:grid-rows-2 gap-3 lg:grid-cols-4">
        {socialMediaList.map((socialMedia) => (
          <SocialFollowBox key={socialMedia.id} socialMedia={socialMedia} />
        ))}
      </div>
      <section className="bg-color *:bg-color-content">
        <div className="container p-6 flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-right gap-6 relative z-20">
          <aside className="flex items-center gap-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <section>
              <p>کلیه حقوق مادی و معنوی سایت برای سازنده محفوظ است.</p>
              <p className="mt-1 text-xs opacity-70">ساخته شده با 🧡 در ایران</p>
            </section>
          </aside>
          <nav className="flex flex-wrap justify-center gap-4 lg:place-self-center lg:justify-self-end">
            <Email email={profile.email} className="btn btn-ghost font-normal" />
            {profile.phone && (
              <ContactMeButton phoneNumber={profile.phone} className="btn btn-ghost font-normal" />
            )}
          </nav>
        </div>
      </section>
    </footer>
  )
}

export default Footer
