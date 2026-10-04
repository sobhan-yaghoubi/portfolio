import { TypeProject } from "@/types/Project"
import { technicalSkillsData } from "./skills"

const getSkill = (id: string) => technicalSkillsData.find((s) => s.id === id) || technicalSkillsData[0]

export const projectsData: TypeProject[] = [
  {
    id: "expocore",
    slug: "expocore",
    title: "پلتفرم SaaS مدیریت هتل و Page Builder اختصاصی (Expocore)",
    shortTitle: "Expocore",
    category: "SaaS & Page Builder",
    domain: "مدیریت هتل و وب‌ساز ابری",
    role: "معمار و توسعه‌دهنده فرانت‌اند",
    image: "/image/article-tools.jpg",
    link: "https://expocore.com",
    source: "",
    description:
      "معماری و پیاده‌سازی یک Visual Editor پیشرفته مبتنی بر Drag-and-Drop و ساختار درختی بلاک‌ها (Nested Blocks) با اعتبارسنجی داده‌ها از طریق Zod Schema، همراه پنل تنظیمات بصری و ورودی کد CSS اختصاصی برای شخصی‌سازی کامل المان‌ها. توسعه داشبورد یکپارچه برای مدیریت سیستم رزرواسیون هتل (Booking)، مدیریت صفحات و محتوای سایت، و ماژول تولید خودکار محتوا برای شبکه‌های اجتماعی، همراه با معماری Monorepo جهت اشتراک تایپ‌ها و پکیج‌های مشترک میان داشبورد و موتور Rendering.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
      getSkill("zustand"),
      getSkill("zod"),
      getSkill("tailwind"),
    ],
    highlights: [
      "معماری Visual Drag-and-Drop Page Builder با ساختار درختی بلاک‌های تودرتو (Nested Blocks)",
      "اعتبارسنجی دقیق داده‌ها در سطح Schema با Zod و قابلیت سفارشی‌سازی زنده استایل‌ها با Custom CSS",
      "داشبورد جامع مدیریت رزرواسیون (Booking Engine) و تولید محتوای خودکار برای سوشال‌مدیا",
      "معماری Monorepo جهت همگام‌سازی تایپ‌ها میان پنل مدیریت و موتور رندرینگ سمت کاربر با سئو تکنیکال کامل",
    ],
    challenges: [
      {
        title: "مدیریت State درختی در جابجایی بلادرنگ بلاک‌ها",
        solution:
          "به‌کارگیری dnd-kit در کنار Zustand با استراتژی ایمیوتبل بهینه‌سازی‌شده برای دستیابی به تغییرات بدون افت فریم (۶۰ فریم بر ثانیه) در صفحات با ساختار درختی سنگین.",
      },
      {
        title: "سئو و عملکرد در صفحات خروجی تولیدشده توسط کاربران",
        solution:
          "پیاده‌سازی موتور Rendering ایزوله با Server Components در Next.js App Router برای تولید متادیتای داینامیک و لود فوق‌سریع خروجی نهایی.",
      },
    ],
  },
  {
    id: "royal-creations",
    slug: "royal-creations",
    title: "فروشگاه بین‌المللی فرش و محصولات دکوراسیون (Royal Creations)",
    shortTitle: "Royal Creations",
    category: "B2C Headless E-Commerce",
    domain: "محصولات لوکس، سوئیس و آلمان",
    role: "توسعه‌دهنده فرانت‌اند End-to-End",
    image: "/image/article-vs-code.jpg",
    link: "https://royal-creations.ch",
    source: "",
    description:
      "توسعه صفر تا صد Front-End فروشگاه B2C برای بازارهای سوئیس و آلمان با تمرکز بر Performance پایدار و کسب امتیاز +90 در PageSpeed Insights (موبایل و دسکتاپ). پیاده‌سازی سیستم رندر سه‌بعدی و واقعیت افزوده (AR) با مدل‌های GLB و USDZ با استراتژی بهینه‌سازی رندر و لود تنبل برای جلوگیری از افت فریم و مسدودسازی Main Thread. پیاده‌سازی Module شخصی‌سازی ابعاد و طرح فرش، سیستم رزرو، چندزبانه (i18n) و اتصال مستقیم به درگاه پرداخت بین‌المللی Stripe از طریق Next.js API Routes.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
      getSkill("graphql"),
      getSkill("zustand"),
      getSkill("tailwind"),
    ],
    highlights: [
      "کسب و حفظ امتیاز پایدار +۹۰ در Google PageSpeed Insights در هر دو حالت موبایل و دسکتاپ",
      "سیستم واقعیت افزوده (AR) و رندر مدل‌های سه‌بعدی GLB و USDZ برای تست ابعاد در فضای واقعی خانه",
      "ماژول محاسباتی ابعاد اختصاصی فرش، قیمت‌گذاری پویا و سیستم رزرواسیون مشاوره‌ای",
      "یکپارچه‌سازی درگاه پرداخت بین‌المللی Stripe و پشتیبانی چندزبانه کامل (i18n)",
    ],
    challenges: [
      {
        title: "جلوگیری از افت فریم هنگام لود آبجکت‌های سنگین ۳D و واقعیت افزوده",
        solution:
          "طراحی سیستم Lazy Loading شرطی برای کتابخانه‌های رندرینگ سه‌بعدی و استریم کردن مدل‌های GLB تنها پس از تعامل مستقیم کاربر با ماژول AR.",
      },
      {
        title: "حفظ شاخص‌های Core Web Vitals با وجود مدیاهای باکیفیت و ابعاد بزرگ",
        solution:
          "تولید خودکار فرمت‌های AVIF و WebP در Next.js Image به همراه استفاده از کش سمت سرور برای کوئری‌های تکرارشونده کاتالوگ محصولات.",
      },
    ],
  },
  {
    id: "sohotel",
    slug: "sohotel",
    title: "پلتفرم B2B معاملات عمده و زنجیره تأمین هتل‌ها (Sohotel)",
    shortTitle: "Sohotel",
    category: "B2B Marketplace & Supply Chain",
    domain: "زنجیره تأمین هتل‌ها و مراکز اقامتی",
    role: "معمار و توسعه‌دهنده فرانت‌اند",
    image: "/image/article-team.jpg",
    link: "https://sohotel.ir",
    source: "",
    description:
      "معماری Front-End سامانه B2B ارتباط مستقیم خریداران هتل و تأمین‌کنندگان کالا با داشبوردهای تفکیک‌شده برای خریدار و فروشنده و سیستم مدیریت دسترسی چندسطحی (RBAC). پیاده‌سازی Module استعلام قیمت (Quotes) و سیستم پیام‌رسانی داخلی با GraphQL Subscription / Polling، امکان تبادل فایل و ارسال پیش‌فاکتورهای لحظه‌ای. پیاده‌سازی قابلیت خرید عمده شامل لیست‌های خرید ذخیره‌شده و ساختار دسته‌بندی پیشرفته کالاها، به همراه به‌کارگیری قابلیت‌های Partial Prerendering و React Compiler که به بهبود تقریبی ۲۰ درصدی در سرعت پاسخ‌دهی و بارگذاری صفحات انجامید.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
      getSkill("graphql"),
      getSkill("zustand"),
      getSkill("tailwind"),
    ],
    highlights: [
      "داشبوردهای تخصصی تفکیک‌شده خریداران و تأمین‌کنندگان با سطوح دسترسی پیشرفته (RBAC)",
      "ماژول استعلام آنی قیمت (Quotes)، چت داخلی و صدور و تبادل پیش‌فاکتورهای رسمی در لحظه",
      "قابلیت‌های خرید عمده سازمانی نظیر سبدهای سفارش دوره‌ای و استعلام‌های چندتأمین‌کننده‌ای",
      "پیاده‌سازی Partial Prerendering و React Compiler با بهبود ۲۰ درصدی سرعت لود",
    ],
    challenges: [
      {
        title: "مدیریت لودینگ جداول دیتامحور با صدها رکورد کالای عمده",
        solution:
          "پیاده‌سازی Virtualized Lists به همراه کش‌گذاری سلسله‌مراتبی در TanStack Query جهت مشاهده آنی کاتالوگ بدون کوچک‌ترین مکث در اسکرول.",
      },
      {
        title: "هماهنگی پیش‌فاکتورها و وضعیت‌های متعدد خرید میان خریدار و فروشنده",
        solution:
          "پیاده‌سازی استیت ماشین در سطح کلاینت با اعتبارسنجی وضعیت‌های مجاز در جریان معاملاتی پیچیده B2B.",
      },
    ],
  },
  {
    id: "cursor-navigation-vscode",
    slug: "cursor-navigation-vscode",
    title: "اکستنشن Navigation برای VS Code (انتشار رسمی Marketplace)",
    shortTitle: "VS Code Cursor Navigation",
    category: "Developer Productivity Tool",
    domain: "ابزار متن‌باز توسعه‌دهندگی",
    role: "خالق و توسعه‌دهنده",
    image: "/packages/vscode.svg",
    link: "https://marketplace.visualstudio.com",
    source: "https://github.com/sobhan-yaghoubi",
    description:
      "طراحی و انتشار ابزار توسعه‌دهندگی برای پیمایش سریع Cursor بین مرز کلمات در شناسه‌های camelCase و PascalCase بدون نیاز به استفاده از ماوس یا نگه‌داشتن کلیدهای جهت‌دار. توسعه‌داده‌شده بر بستر VS Code Extension API و متن‌باز کردن ابزار برای حل چالش مشابه در میان برنامه‌نویسان، با جذب بیش از ۴۰۰ نصب فعال در Marketplace رسمی VS Code.",
    technicalSkillList: [
      getSkill("typescript"),
      getSkill("vscode-api"),
    ],
    highlights: [
      "بیش از ۴۰۰ نصب فعال از سوی توسعه‌دهندگان بین‌المللی در مارکت‌پلیس رسمی VS Code",
      "پیمایش سریع میان کلمات درون متغیرهای طولانی با تشخیص هوشمند الگوهای camelCase و PascalCase",
      "معماری فوق‌العاده سبک با زمان اجرای میلی‌ثانیه‌ای و بدون کوچک‌ترین اثر روی پرفورمنس ویرایشگر",
      "کد کاملاً متن‌باز (Open Source) و توسعه‌یافته با TypeScript خالص",
    ],
    challenges: [
      {
        title: "تداخل میانبرهای صفحه‌کلید با دستورات پیش‌فرض ادیتور",
        solution:
          "طراحی بایندینگ‌های غیرمخرب و قابلیت سفارشی‌سازی کامل کلیدها در تنظیمات ادیتور با رعایت استانداردهای رسمی Extension API.",
      },
    ],
  },
]
