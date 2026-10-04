import React from "react"
import Title from "../../modules/Title"

const CvEducation: React.FC = () => {
  return (
    <section>
      <Title size="md">
        <h3>مدارک تحصیلی</h3>
      </Title>
      <ul className="space-y-3">
        <li className="flex items-center justify-between [&>div]:p-3 rounded-lg bg-base-200/50">
          <div className="flex-1">
            <b className="text-lg">کارشناسی مدیریت کسب‌وکار (BBA)</b>
            <p>دانشگاه پیام نور مشهد</p>
          </div>
        </li>
        <li className="flex items-center justify-between [&>div]:p-3 rounded-lg bg-base-200/50">
          <div className="flex-1">
            <b className="text-lg">شبکه و نرم‌افزار</b>
            <p>دیپلم - هنرستان دکتر علی شریعتی، نیشابور</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default CvEducation
