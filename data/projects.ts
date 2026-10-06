import { TypeProject } from "@/types/Project"
import { technicalSkillsData } from "./skills"

const getSkill = (id: string) => technicalSkillsData.find((s) => s.id === id) || technicalSkillsData[0]

export const projectsData: TypeProject[] = [
  {
    id: "expocore",
    slug: "expocore",
    title: "پلتفرم SaaS مدیریت هتل و Page Builder اختصاصی (Expocore)",
    shortTitle: "Expocore",
    category: "SaaS & Visual Page Builder",
    domain: "سیستم مدیریت هتل و صفحه‌ساز ابری",
    role: "توسعه‌دهنده و معمار فرانت‌اند (Rendering Engine & Visual Builder Lead)",
    image: "/image/projects/expocore/cover.webp",
    link: "https://expocore.com",
    source: "",
    description:
      "پلتفرم Expocore یک محصول جامع SaaS برای مدیریت هتل‌ها و کسب‌وکارها است که به مدیران هتل امکان می‌دهد بدون نیاز به دانش برنامه‌نویسی، وب‌سایت، محتوا و سیستم رزرواسیون آنلاین خود را از طریق یک داشبورد یکپارچه مدیریت کنند. هسته اصلی این محصول یک Visual Page Builder اختصاصی و پیشرفته است که امکان ساخت و ویرایش ساختار و ظاهر وب‌سایت را به صورت Drag-and-Drop با ساختار درختی عمیق فراهم می‌کند.",
    theProblem:
      "بزرگترین چالش مهندسی در پلتفرم Expocore، ایجاد تعادل میان انعطاف‌پذیری برای کاربران نهایی و حفظ پرفورمنس و یکپارچگی سیستم بود. ما باید ابزاری طراحی می‌کردیم که به اپراتورهای هتل اجازه دهد صفحات وب‌سایت خود را به صورت بصری طراحی کنند، تنظیمات المان‌ها را تغییر دهند و استایل‌های دلخواه اعمال کنند؛ اما همزمان خروجی نهایی باید از نظر ساختار داده کاملاً معتبر (Valid)، از نظر SEO بهینه‌شده و در محیط Storefront دارای بالاترین سرعت Rendering باشد.",
    myRole:
      "در این پروژه به همراه تیم مهندسی، معماری و ساختار کلی سیستم را طراحی کردیم. توسعه و رهبری مستقیم موتور رندرینگ (Rendering Engine) و صفحه‌ساز بصری (Visual Page Builder) مستقیماً بر عهده من بود. همچنین پیاده‌سازی بخش‌های یکپارچه‌سازی فرانت‌اند (Frontend Integration) برای سیستم مدیریت رزرو هتل و جریان‌های کاری تولید محتوای AI را انجام دادم.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
      getSkill("zustand"),
      getSkill("zod"),
      getSkill("tailwind"),
    ],
    highlights: [
      "توسعه موتور رندرینگ اختصاصی و Visual Page Builder با ساختار درختی تو‌در‌تو (Deeply Nested JSON)",
      "اعتبارسنجی یکپارچه ساختار داده‌ها و تنظیمات هر بلاک با Zod Schema به عنوان منبع حقیقت (Source of Truth)",
      "بهینه‌سازی پرفورمنس و ایزولاسیون چرخه Re-render با Zustand جهت حفظ بیشترین نرخ فریم در ادیتور",
      "معماری استورفرانت با Next.js SSG و مکانیزم On-demand Cache Revalidation برای لود فوق‌سریع صفحات",
      "یکپارچه‌سازی ویرایشگر Scoped Custom CSS با CodeMirror برای استایل‌دهی پیشرفته با دامنه امن",
      "معماری Monorepo بر بستر pnpm workspaces با پکیج‌های اشتراکی اسکیما، پیج‌بیلدر، کانفیگ و کامپوننت‌های UI",
    ],
    challenges: [
      {
        title: "معماری State در صفحه‌ساز و روابط کامپوننت‌ها (Element Relations)",
        solution:
          "ساختار صفحات به صورت یک درخت عمیق و تو در تو (Deeply Nested JSON) ذخیره می‌شد. مدیریت Drag-and-Drop، پیاده‌سازی قوانین روابط المان‌ها (اینکه هر کامپوننت چه فرزندانی را می‌پذیرد) و اعتبارسنجی تنظیمات بسیار پیچیده بود. با به‌کارگیری dnd-kit برای درگ اند دراپ و Zod برای اعتبارسنجی ساختار داده‌ها و تنظیمات هر بلاک، موتور صفحه‌ساز به صورت هوشمند تشخیص می‌دهد که قرار دادن یک المان خاص درون المان دیگر مجاز است یا خیر.",
      },
      {
        title: "بهینه‌سازی پرفورمنس و جلوگیری از افت فریم (FPS) در Visual Editor",
        solution:
          "به دلیل ساختار تودرتوی درخت کامپوننت‌ها، هر تغییر در State (مانند کشیدن یک المان یا تغییر تنظیمات رنگ) می‌توانست باعث Re-render شدن کل درخت شود که منجر به افت شدید فریم‌ریت در مرورگر می‌شد. با استفاده از Zustand برای State Management و بهینه‌سازی دقیق چرخه Re-render در React، موتور رندرینگ به گونه‌ای توسعه داده شد که فقط کامپوننت‌های هدف و گره‌های درگیر در تغییرات Re-render شوند و پرفورمنس ادیتور همیشه در بالاترین حد باقی بماند.",
      },
      {
        title: "استراتژی Rendering و یکپارچگی با Storefront با داده‌های داینامیک و استاتیک",
        solution:
          "ساختار JSON تولید شده در داشبورد باید در سمت کاربر (Storefront) با بالاترین سرعت نمایش داده می‌شد، در حالی که برخی از داده‌ها ماهیت داینامیک داشتند (مثل وضعیت رزروها). معماری سمت Storefront بر اساس Next.js SSG بنا شد تا صفحات به صورت Static لود شوند. با پیاده‌سازی سیستم On-demand Revalidation، با هر بار ذخیره در Editor کش صفحات منقضی و Revalidate می‌شود و بخش‌های نیازمند داده‌های لحظه‌ای با رویکرد داینامیک (SSR/CSR) مدیریت شدند.",
      },
    ],
    monorepoPackages: [
      {
        name: "@hotel-saas/schema",
        description:
          "شامل Zod Schemaها که اطمینان می‌دهد داشبورد دقیقاً همان ساختار داده‌ای معتبری را تولید می‌کند که موتور Next.js انتظار رندر کردن آن را دارد.",
      },
      {
        name: "@hotel-saas/page-builder",
        description:
          "منطق پایه رندرینگ، قوانین روابط المان‌ها (Element Relations) و تایپ‌های مشترک میان محیط ویرایشگر و رندر نهایی وب‌سایت.",
      },
      {
        name: "@hotel-saas/config",
        description:
          "پیکربندی‌ها و استانداردهای اشتراکی شامل کانفیگ‌های TypeScript، قوانین لینتر Biome و تنظیمات بیلد.",
      },
      {
        name: "@hotel-saas/ui",
        description:
          "کتابخانه کامپوننت‌های پایه و دیزاین سیستم اشتراکی پلتفرم با استانداردهای دسترسی‌پذیری Radix UI و Tailwind CSS.",
      },
    ],
    keyFeatures: [
      {
        tag: "Advanced Customization",
        title: "امکانات سفارشی‌سازی پیشرفته: Custom CSS با CodeMirror",
        description:
          "برای کاربرانی که نیاز به تغییرات ظاهری پیشرفته‌تری داشتند، قابلیت ادیت Custom CSS در داشبورد با استفاده از CodeMirror پیاده‌سازی شد که Syntax Highlighting زنده ارائه می‌دهد و استایل‌های نوشته شده به صورت امن و ایزوله با دامنه (:scope) به المان‌های مربوطه در Storefront تزریق می‌شوند.",
      },
      {
        tag: "Frontend Integration",
        title: "یکپارچه‌سازی فرانت‌اند سیستم رزرواسیون و جریان‌های کاری AI",
        description:
          "علاوه بر صفحه‌ساز، فرانت‌اند سیستم مدیریت رزرواسیون هتل و جریان‌های کاری هوش مصنوعی در داشبورد پیاده‌سازی شد. سیستم AI به کاربران اجازه می‌دهد تولید محتوای پست‌های وب‌سایت را زمان‌بندی (Schedule) کرده و در شبکه‌های اجتماعی توزیع کنند. رابط کاربری برای نمایش ریسپانسیو در نماهای Desktop، Tablet و Mobile پیاده‌سازی شده است.",
      },
      {
        tag: "Technical SEO",
        title: "بهینه‌سازی ساختاریافته موتورهای جستجو (Technical SEO)",
        description:
          "با توجه به اینکه صفحات به صورت ساختاریافته توسط موتور رندر می‌شوند، SEO تکنیکال پایه در Storefront به صورت توکار پیاده شد. خروجی نهایی Next.js شامل تگ‌های Semantic HTML استاندارد و تولید خودکار Meta Title و Meta Description‌های ضروری برای ایندکس شدن بهینه سایت هتل‌ها در گوگل است.",
      },
    ],
    techStackBreakdown: [
      {
        category: "معماری Monorepo و ابزارها",
        items: [
          "Monorepo (pnpm workspaces)",
          "Shared Workspace Packages (@hotel-saas/*)",
          "Biome (Fast Linter & Formatter)",
        ],
      },
      {
        category: "اپلیکیشن Dashboard (پنل مدیریت)",
        items: [
          "React",
          "Vite",
          "TypeScript",
          "Zustand",
          "TanStack React Query",
          "React Router",
          "React Hook Form",
        ],
      },
      {
        category: "اپلیکیشن Storefront (وب‌سایت هتل)",
        items: [
          "Next.js (SSG & On-demand Revalidation)",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Dynamic SSR/CSR for Booking",
        ],
      },
      {
        category: "موتور Visual Page Builder",
        items: [
          "dnd-kit (Drag-and-Drop Tree)",
          "Zod (Schema Validation & Source of Truth)",
          "CodeMirror (Scoped CSS Editor)",
          "Tiptap (Rich Text)",
          "Radix UI",
        ],
      },
    ],
    impact:
      "بزرگترین دستاورد من در این پروژه، مهندسی و پیاده‌سازی موفقیت‌آمیز یک سیستم Rendering قدرتمند و متناسب با نیازمندی‌های یک ساختار SaaS بود. طراحی مکانیزمی که در آن روابط بین کامپوننت‌ها به شکل ایزوله از طریق Schema کنترل می‌شود، و مدیریت همزمانِ کش Next.js با تریگرهای Revalidation، باعث شد پلتفرم پایداری بالایی در برابر خطاهای کاربری داشته باشد و در عین حال سرعت لود فوق‌العاده‌ای در سمت کاربر نهایی ارائه دهد.",
    gallery: [
      {
        title: "رابط کاربری ادیتور بصری و ساختار درختی درگ اند دراپ (Visual Editor Interface)",
        subtitle: "IMAGE-01 · Drag-and-Drop Workspace & Scoped CSS Panel",
        tag: "Visual Page Builder",
        image: "/image/projects/expocore/expocore-visual-editor.webp",
        description:
          "نمای دسکتاپ صفحه‌ساز بصری اختصاصی، ساختار درختی المان‌ها (Layers Tree)، فضای کاری تعاملی Drag-and-Drop جهت ساخت صفحات بدون نیاز به کدنویسی، و دسترسی سریع به پنل استایل و تنظیمات.",
      },
      {
        title: "کنترل‌های تم، استایل‌بندی و تنظیمات مبتنی بر Schema (Element Theme & Settings)",
        subtitle: "IMAGE-02 · Configuration Panels & Source-of-Truth Settings",
        tag: "Theme & Settings",
        image: "/image/projects/expocore/expocore-theme-settings.webp",
        description:
          "پنل‌های پیکربندی بصری و تنظیمات تم برند (لوگوی لایت/دارک، رنگ‌های سازمانی، فاوآیکون) که بر پایه Zod Schema به عنوان منبع حقیقت داده‌ها عمل کرده و استایل هر بلاک را دیکته می‌کنند.",
      },
      {
        title: "قابلیت ادیت پیشرفته Custom CSS با یکپارچه‌سازی CodeMirror (Custom CSS Integration)",
        subtitle: "IMAGE-03 · Advanced Developer Tooling & Scoped CSS",
        tag: "Custom CSS Engine",
        image: "/image/projects/expocore/expocore-custom-css.webp",
        description:
          "یکپارچه‌سازی ادیتور CodeMirror در داشبورد برای توسعه‌دهندگان و کاربران حرفه‌ای، مجهز به Syntax Highlighting زنده و اعمال استایل‌های سفارشی با دامنه ایزوله (:scope) به المان‌ها در Storefront.",
      },
      {
        title: "رندر زنده Storefront و سیستم رزرواسیون در Next.js (Live Storefront Rendering)",
        subtitle: "IMAGE-04 · High-Speed SSG & On-Demand Revalidation",
        tag: "Live Storefront",
        image: "/image/projects/expocore/expocore-storefront-rendering.webp",
        description:
          "خروجی نهایی رندرشده در استورفرانت Next.js بر اساس ساختار JSON، شامل ماژول رزرواسیون آنلاین اتاق (Check-in/Check-out/Guests)، و بهره‌گیری از SSG برای دستیابی به حداکثر سرعت بارگذاری و سئو.",
      },
      {
        title: "پیش‌نمایش واکنش‌گرا و ویرایشگر Context-Aware (Responsive Device Views)",
        subtitle: "IMAGE-05 · Mobile & Tablet Content Management",
        tag: "Responsive Design",
        image: "/image/projects/expocore/expocore-responsive-views.webp",
        description:
          "قابلیت مدیریت محتوا در نمای موبایل و تبلت برای اپراتورهای هتل، هماهنگی کامل سلسله‌مراتب درختی المان‌ها و ویرایشگر هوشمند متناسب با کانتکست صفحه.",
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
