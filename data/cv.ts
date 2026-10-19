import { TypeCv } from "@/types/Cv"
import { technicalSkillsData } from "./skills"
import { projectsData } from "./projects"

export const cvData: TypeCv = {
  technicalSkillList: technicalSkillsData,
  projectList: projectsData,
  softSkillList: [
    { id: "lead", name: "رهبری فنی تیم و هدایت اسپرینت‌ها", score: 4 },
    { id: "review", name: "نظارت بر کیفیت کد و Code Review", score: 4 },
    { id: "arch", name: "معماری سیستم و ماژولاریتی", score: 5 },
    { id: "comms", name: "تعامل سازنده با مدیران محصول و CTO", score: 4 },
    { id: "perf", name: "تحلیل و بهینه‌سازی پرفورمنس", score: 5 },
  ],
}
