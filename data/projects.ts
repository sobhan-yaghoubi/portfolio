import { TypeProject } from "@/types/Project"
import { asset } from "@/lib/assets"
import { technicalSkillsData } from "./skills"

const getSkill = (id: string) =>
  technicalSkillsData.find((s) => s.id === id) || technicalSkillsData[0]

export const projectsData: TypeProject[] = [
  {
    id: "expocore",
    slug: "expocore",
    title: "پلتفرم SaaS مدیریت هتل و Page Builder اختصاصی (Expocore)",
    shortTitle: "Expocore",
    category: "SaaS & Visual Page Builder",
    domain: "سیستم مدیریت هتل و صفحه‌ساز ابری",
    role: "توسعه‌دهنده و معمار فرانت‌اند (Rendering Engine & Visual Builder Lead)",
    image: asset("saas-hotel/image-01.avif"),
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
        title:
          "معماری State در صفحه‌ساز و روابط کامپوننت‌ها (Element Relations)",
        solution:
          "ساختار صفحات به صورت یک درخت عمیق و تو در تو (Deeply Nested JSON) ذخیره می‌شد. مدیریت Drag-and-Drop، پیاده‌سازی قوانین روابط المان‌ها (اینکه هر کامپوننت چه فرزندانی را می‌پذیرد) و اعتبارسنجی تنظیمات بسیار پیچیده بود. با به‌کارگیری dnd-kit برای درگ اند دراپ و Zod برای اعتبارسنجی ساختار داده‌ها و تنظیمات هر بلاک، موتور صفحه‌ساز به صورت هوشمند تشخیص می‌دهد که قرار دادن یک المان خاص درون المان دیگر مجاز است یا خیر.",
      },
      {
        title:
          "بهینه‌سازی پرفورمنس و جلوگیری از افت فریم (FPS) در Visual Editor",
        solution:
          "به دلیل ساختار تودرتوی درخت کامپوننت‌ها، هر تغییر در State (مانند کشیدن یک المان یا تغییر تنظیمات رنگ) می‌توانست باعث Re-render شدن کل درخت شود که منجر به افت شدید فریم‌ریت در مرورگر می‌شد. با استفاده از Zustand برای State Management و بهینه‌سازی دقیق چرخه Re-render در React، موتور رندرینگ به گونه‌ای توسعه داده شد که فقط کامپوننت‌های هدف و گره‌های درگیر در تغییرات Re-render شوند و پرفورمنس ادیتور همیشه در بالاترین حد باقی بماند.",
      },
      {
        title:
          "استراتژی Rendering و یکپارچگی با Storefront با داده‌های داینامیک و استاتیک",
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
        title:
          "رابط کاربری ادیتور بصری و ساختار درختی درگ اند دراپ (Visual Editor Interface)",
        subtitle: "IMAGE-01 · Drag-and-Drop Workspace & Scoped CSS Panel",
        tag: "Visual Page Builder",
        image: asset("saas-hotel/image-01.avif"),
        description:
          "نمای دسکتاپ صفحه‌ساز بصری اختصاصی، ساختار درختی المان‌ها (Layers Tree)، فضای کاری تعاملی Drag-and-Drop جهت ساخت صفحات بدون نیاز به کدنویسی، و دسترسی سریع به پنل استایل و تنظیمات.",
      },
      {
        title:
          "کنترل‌های تم، استایل‌بندی و تنظیمات مبتنی بر Schema (Element Theme & Settings)",
        subtitle: "IMAGE-02 · Configuration Panels & Source-of-Truth Settings",
        tag: "Theme & Settings",
        image: asset("saas-hotel/image-02.avif"),
        description:
          "پنل‌های پیکربندی بصری و تنظیمات تم برند (لوگوی لایت/دارک، رنگ‌های سازمانی، فاوآیکون) که بر پایه Zod Schema به عنوان منبع حقیقت داده‌ها عمل کرده و استایل هر بلاک را دیکته می‌کنند.",
      },
      {
        title:
          "قابلیت ادیت پیشرفته Custom CSS با یکپارچه‌سازی CodeMirror (Custom CSS Integration)",
        subtitle: "IMAGE-03 · Advanced Developer Tooling & Scoped CSS",
        tag: "Custom CSS Engine",
        image: asset("saas-hotel/image-03.avif"),
        description:
          "یکپارچه‌سازی ادیتور CodeMirror در داشبورد برای توسعه‌دهندگان و کاربران حرفه‌ای، مجهز به Syntax Highlighting زنده و اعمال استایل‌های سفارشی با دامنه ایزوله (:scope) به المان‌ها در Storefront.",
      },
      {
        title:
          "رندر زنده Storefront و سیستم رزرواسیون در Next.js (Live Storefront Rendering)",
        subtitle: "IMAGE-04 · High-Speed SSG & On-Demand Revalidation",
        tag: "Live Storefront",
        image: asset("saas-hotel/image-04.avif"),
        description:
          "خروجی نهایی رندرشده در استورفرانت Next.js بر اساس ساختار JSON، شامل ماژول رزرواسیون آنلاین اتاق (Check-in/Check-out/Guests)، و بهره‌گیری از SSG برای دستیابی به حداکثر سرعت بارگذاری و سئو.",
      },
      {
        title:
          "پیش‌نمایش واکنش‌گرا و ویرایشگر Context-Aware (Responsive Device Views)",
        subtitle: "IMAGE-05 · Mobile & Tablet Content Management",
        tag: "Responsive Design",
        image: asset("saas-hotel/image-05.avif"),
        description:
          "قابلیت مدیریت محتوا در نمای موبایل و تبلت برای اپراتورهای هتل، هماهنگی کامل سلسله‌مراتب درختی المان‌ها و ویرایشگر هوشمند متناسب با کانتکست صفحه.",
      },
    ],
  },
  {
    id: "royal-creations",
    slug: "royal-creations",
    title:
      "فروشگاه بین‌المللی فرش و دکوراسیون با تجربه سه‌بعدی و واقعیت افزوده (Royal Creations)",
    shortTitle: "Royal Creations",
    category: "B2C E-Commerce & Interactive 3D/AR",
    domain: "محصولات لوکس دکوراسیون داخلی، بازارهای سوئیس و آلمان",
    role: "توسعه‌دهنده فرانت‌اند End-to-End",
    image: asset("royal-creations/royal-image-01.avif"),
    link: "https://royal-creations.ch",
    source: "",
    description:
      "Royal Creations یک فروشگاه اینترنتی B2C در حوزه فرش و محصولات دکوراسیون داخلی است که برای بازارهای سوئیس و آلمان توسعه داده شد. هدف پروژه، ساخت تجربه‌ای فراتر از یک فروشگاه سنتی بود؛ تجربه‌ای که در آن مشتری می‌تواند محصول را به صورت تعاملی سه‌بعدی ببیند، آن را با واقعیت افزوده (AR) در فضای واقعی خانه خود پیش‌نمایش کند، فرش دلخواهش را بر اساس شکل، رنگ، روش تولید، نوع الیاف و ابعاد پیکربندی کند و در نهایت خرید آنلاین را با Stripe تکمیل کند یا برای مشاوره حضوری درخواست ثبت کند. توسعه کامل Front-End این پلتفرم از پایه بر عهده من بود.",
    theProblem:
      "انتخاب فرش تا حد زیادی به درک بصری و تناسب محصول با فضای واقعی خانه وابسته است و در یک فروشگاه متکی بر تصاویر ثابت، بخش بزرگی از این ارزیابی به تصور ذهنی مشتری واگذار می‌شود؛ این محدودیت وقتی محصول قابل سفارشی‌سازی باشد و کاربر بخواهد ترکیب‌های مختلفی از ویژگی‌ها را بررسی کند، جدی‌تر هم می‌شود. چالش محصول، پر کردن فاصله میان مشاهده محصول در وب‌سایت و تصور آن در محیط واقعی بود؛ آن هم بدون اینکه هزینه عملکردی محتوای تعاملی سه‌بعدی و AR، سرعت بارگذاری و پاسخ‌گویی صفحات فروشگاه را از بین ببرد.",
    myRole:
      "توسعه Front-End فروشگاه از پایه با تمرکز بر تجربه خرید، قابلیت‌های تعاملی و Performance. دامنه کار من شامل صفحات کاتالوگ، دسته‌بندی و جست‌وجو، صفحه جزئیات محصول با نمایش سه‌بعدی و دسترسی به تجربه AR، ماژول اختصاصی پیکربندی فرش و پیش‌نمایش AR محصول پیکربندی‌شده، جریان ثبت درخواست مشاوره حضوری، پیاده‌سازی تجربه چندزبانه (i18n)، یکپارچه‌سازی پرداخت Stripe از طریق Next.js API Routes، صفحات Checkout و پرداخت و مشاهده سفارش‌ها در داشبورد مشتری، و در نهایت به‌کارگیری Lazy Loading و Rendering بهینه‌شده به همراه ارزیابی مستمر صفحات با PageSpeed Insights بود.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
    ],
    highlights: [
      "توسعه کامل فرانت‌اند فروشگاه B2C از پایه برای بازارهای سوئیس و آلمان",
      "نمایش تعاملی سه‌بعدی محصول و تجربه واقعیت افزوده (AR) بر پایه مدل‌های GLB و USDZ",
      "ماژول اختصاصی پیکربندی فرش بر اساس Shape، Color، Production Method، Fiber Type و Dimensions",
      "امکان مشاهده محصولِ پیکربندی‌شده در تجربه AR و اتصال مستقیم سفارشی‌سازی به Visualization",
      "جریان ثبت درخواست مشاوره حضوری (In-Home Consultation) همراه با انتخاب زمان، ارسال فایل و پرداخت آنلاین",
      "یکپارچه‌سازی پرداخت بین‌المللی Stripe از طریق Next.js API Routes و صفحه سفارش‌ها در داشبورد مشتری",
      "پشتیبانی از تجربه چندزبانه (i18n) متناسب با مخاطبان بازارهای هدف",
      "به‌کارگیری Lazy Loading و Rendering بهینه‌شده برای مهار هزینه عملکردی محتوای تعاملی سه‌بعدی",
      "ثبت امتیاز ۹۰+ در PageSpeed Insights برای موبایل و دسکتاپ بر اساس گزارش‌های پیوست‌شده پروژه",
    ],
    challenges: [
      {
        title: "مدیریت هزینه عملکردی محتوای سه‌بعدی و واقعیت افزوده",
        solution:
          "قابلیت‌های 3D و AR علاوه بر انتقال حجم قابل توجهی از منابع، هزینه پردازشی هم ایجاد می‌کنند: دریافت و آماده‌سازی فایل‌های مدل، Rendering محتوای تعاملی، مصرف منابع دستگاه حین تعامل و رقابت عملیات سنگین با کارهای ضروری رابط کاربری روی Main Thread که می‌تواند به افت Frame Rate و کند شدن بارگذاری اولیه منجر شود. راهبرد پروژه، ترکیب Lazy Loading برای به‌تعویق‌انداختن دریافت منابع تا لحظه نیاز واقعی کاربر و Rendering بهینه‌شده برای جلوگیری از مسدود شدن Main Thread بود؛ به این ترتیب بار اولیه صفحه سبک می‌ماند و منابع سنگین فقط در مسیر تعامل واقعی کاربر وارد می‌شوند.",
      },
      {
        title: "ارائه مدل‌های سه‌بعدی و اجرای تجربه AR با فرمت‌های GLB و USDZ",
        solution:
          "تجربه سه‌بعدی و AR بر پایه مدل‌های GLB و USDZ ارائه شد؛ دو قالب دارایی سه‌بعدی که مسیرهای نمایش وب و واقعیت افزوده را پوشش می‌دهند. تفکیک دقیق میان «قالب دارایی» و «موتور رندر» در این پروژه اهمیت داشت: انتخاب فرمت‌ها باید با مسیرهای پشتیبانی‌شده نمایش روی دستگاه‌های مختلف هم‌خوان می‌ماند تا کاربر در هر دستگاه بتواند به مناسب‌ترین شکل محصول را ببیند.",
      },
      {
        title: "اتصال تجربه سفارشی‌سازی به Visualization",
        solution:
          "Configurator صرفاً یک فرم انتخاب ویژگی نیست؛ ارزش آن در پیوند میان گزینه‌های انتخاب‌شده و تجربه بصری محصول است. از منظر فرانت‌اند، این تجربه نیازمند هماهنگی دقیق میان کنترل‌های رابط کاربری و نمایش محصول بود و وقتی پیش‌نمایش AR هم به مسیر اضافه می‌شود، پیوستگی میان پیکربندی و پیش‌نمایش اهمیت بیشتری پیدا می‌کند؛ کاربر باید اثر هر انتخاب را بلافاصله در ظاهر محصول ببیند تا تصمیم‌گیری برایش ملموس شود.",
      },
      {
        title: "یکپارچه‌سازی جریان‌های متفاوت در یک فروشگاه واحد",
        solution:
          "در این محصول چند نوع تعامل کاملاً متفاوت کنار هم قرار می‌گیرند: کشف و بررسی محصول، مشاهده سه‌بعدی و AR، سفارشی‌سازی، ثبت درخواست مشاوره حضوری، Checkout و پرداخت، مشاهده سفارش‌ها و تجربه چندزبانه. چالش فقط ساخت صفحات مجزا نبود، بلکه حفظ انسجام تجربه برای کاربری بود که ممکن است از کشف محصول به سفارشی‌سازی، از آنجا به پرداخت و سپس به داشبورد سفارش‌ها برسد.",
      },
    ],
    keyFeatures: [
      {
        tag: "Discovery",
        title: "کاتالوگ، دسته‌بندی و جست‌وجوی محصولات",
        description:
          "نقطه ورود تجربه خرید؛ مشتری از طریق صفحات دسته‌بندی و جست‌وجو محصولات را مرور می‌کند و برای بررسی جزئیات به صفحه محصول می‌رود. حتی قابلیت‌های پیشرفته‌ای مثل 3D و AR زمانی ارزش پیدا می‌کنند که کاربر ابتدا بتواند محصول متناسب با نیازش را پیدا کند.",
      },
      {
        tag: "3D & AR",
        title: "صفحه محصول با نمایش سه‌بعدی و واقعیت افزوده",
        description:
          "به‌جای محدود کردن مشتری به تصاویر ثابت، صفحه محصول امکان بررسی تعاملی مدل سه‌بعدی فرش را فراهم می‌کند و با قابلیت AR، پیش‌نمایش محصول در فضای فیزیکی کاربر در دسترس قرار می‌گیرد. مدل‌ها با فرمت‌های GLB و USDZ ارائه می‌شوند.",
      },
      {
        tag: "Customization",
        title: "پیکربندی اختصاصی فرش (Custom Rug Configurator)",
        description:
          "اگر مشتری محصول مناسبی میان گزینه‌های آماده پیدا نکند، می‌تواند فرش موردنظرش را بر اساس Shape، Color، Production Method، Fiber Type و Dimensions پیکربندی کند، نتیجه را به صورت تعاملی ببیند و همان پیکربندی را در تجربه AR بررسی کند.",
      },
      {
        tag: "Hybrid Service",
        title: "رزرو مشاوره حضوری (In-Home Consultation Booking)",
        description:
          "مشتری می‌تواند از طریق فرم اختصاصی برای بازدید و مشاوره حضوری درخواست ثبت کند، زمان مناسب را انتخاب کند، پرداخت آنلاین انجام دهد و اطلاعات یا فایل‌های لازم را پیش از بازدید در اختیار تیم بگذارد؛ جریانی که فروشگاه دیجیتال را به یک سرویس واقعی خارج از وب متصل می‌کند.",
      },
      {
        tag: "Localization",
        title: "بومی‌سازی تجربه خرید برای بازارهای هدف (i18n)",
        description:
          "با توجه به اینکه بازار هدف پروژه سوئیس و آلمان است، پشتیبانی از تجربه چندزبانه یکی از بخش‌های کلیدی فروشگاه محسوب می‌شود و امکان ارائه تجربه‌ای متناسب با مخاطبان زبان‌های مختلف را فراهم می‌کند.",
      },
      {
        tag: "Payments",
        title: "Checkout، پرداخت Stripe و داشبورد سفارش‌های مشتری",
        description:
          "مسیر خرید با صفحات Checkout و پرداخت ادامه پیدا می‌کند و یکپارچه‌سازی Stripe از طریق Next.js API Routes انجام شده است. تجربه مشتری با تکمیل خرید تمام نمی‌شود؛ صفحه سفارش‌ها در داشبورد، دسترسی به اطلاعات سفارش‌های ثبت‌شده را پس از خرید فراهم می‌کند.",
      },
    ],
    techStackBreakdown: [
      {
        category: "چارچوب و لایه فرانت‌اند",
        items: ["Next.js", "React", "TypeScript", "Next.js API Routes"],
      },
      {
        category: "تجربه سه‌بعدی و واقعیت افزوده",
        items: [
          "GLB (3D Model Format)",
          "USDZ (AR Model Format)",
          "Interactive 3D Product Viewer",
          "AR In-Room Preview",
        ],
      },
      {
        category: "پرداخت و بومی‌سازی",
        items: [
          "Stripe (International Payment)",
          "Payment Integration via API Routes",
          "i18n (Multi-language Experience)",
        ],
      },
      {
        category: "عملکرد و بهینه‌سازی",
        items: [
          "Lazy Loading",
          "Optimized Rendering",
          "Main Thread Protection",
          "PageSpeed Insights Auditing",
        ],
      },
    ],
    impact:
      "نتیجه پروژه، یک فروشگاه اینترنتی B2C با تجربه‌ای فراتر از کاتالوگ و Checkout سنتی بود: صفحه محصول دیگر فقط محل نمایش اطلاعات نیست و قابلیت‌های 3D و AR به مشتری امکان بررسی تعاملی محصول را می‌دهند، Configurator دامنه انتخاب را از محصولات آماده فراتر می‌برد و مشاوره حضوری، فروشگاه دیجیتال را به یک سرویس واقعی متصل می‌کند. مهم‌ترین آموخته مهندسی من در این پروژه این بود که افزودن قابلیت‌های تعاملی سنگین باید همواره همراه با مدیریت هزینه Rendering، بارگذاری منابع و پاسخ‌گویی رابط کاربری انجام شود؛ Lazy Loading و Rendering بهینه‌شده راهبردهای اصلی مهار این پیچیدگی بودند و PageSpeed Insights بخشی از فرایند مستمر ارزیابی عملکرد باقی ماند. بر اساس گزارش‌های پیوست‌شده پروژه، امتیازهای ۹۰+ در موبایل و دسکتاپ ثبت شده‌اند و تصاویر گزارش‌ها در ادامه همین صفحه قابل بررسی هستند.",
    gallery: [
      {
        title: "صفحه اصلی فروشگاه و ساختار کلی تجربه خرید (Landing Page)",
        subtitle: "IMAGE-01 · Public Landing Page · Desktop (EN)",
        tag: "Landing Experience",
        image: asset("royal-creations/royal-image-01.avif"),
        description:
          "نمای دسکتاپ صفحه اصلی Royal Creations؛ معرفی ارزش پیشنهادی «فرش دست‌ساز سفارشی، ساخت سوئیس»، دسترسی مستقیم به Configurator و رزرو مشاوره، جست‌وجوی محصولات و انتخاب‌گر زبان در نوار بالایی.",
      },
      {
        title: "صفحه دسته‌بندی و مرور کاتالوگ محصولات (Category Page)",
        subtitle: "IMAGE-02 · Category Page · Product Discovery",
        tag: "Catalog & Discovery",
        image: asset("royal-creations/royal-image-02.avif"),
        description:
          "ساختار کشف محصول در فروشگاه؛ مرور کاتالوگ از طریق صفحات دسته‌بندی به‌عنوان نقطه ورود کاربر به صفحات محصول و تجربه‌های تعاملی سه‌بعدی.",
      },
      {
        title: "صفحه کامل جزئیات محصول در دسکتاپ (Product Detail Page)",
        subtitle: "IMAGE-03 · Product Detail · Desktop Viewport",
        tag: "Product Experience",
        image: asset("royal-creations/royal-image-03.avif"),
        description:
          "نمای کامل صفحه محصول با تمرکز بر ارائه محصول و نقاط ورود قابل مشاهده به تجربه نمایش سه‌بعدی و واقعیت افزوده.",
      },
      {
        title: "نسخه موبایل صفحه محصول (Mobile Product View)",
        subtitle: "IMAGE-04 · Product Detail · Mobile Viewport",
        tag: "Responsive Design",
        image: asset("royal-creations/royal-image-04.avif"),
        description:
          "ارائه همان تجربه محصول در Viewport کوچک‌تر؛ حفظ دسترسی به اطلاعات محصول و مسیر ورود به تجربه تعاملی در موبایل، جایی که محدودیت منابع دستگاه بیشتر است.",
      },
      {
        title: "پیش‌نمایش فرش در فضای واقعی با واقعیت افزوده (AR Preview)",
        subtitle: "IMAGE-05 · Augmented Reality · In-Room Preview",
        tag: "Augmented Reality",
        image: asset("royal-creations/royal-image-05.avif"),
        description:
          "تجربه AR روی دستگاه موبایل؛ قرارگیری مدل سه‌بعدی فرش روی کف اتاق کاربر برای ارزیابی بصری ظاهر و تناسب محصول پیش از خرید.",
      },
      {
        title: "ویدیوی دموی قابلیت واقعیت افزوده (AR Feature Demo)",
        subtitle: "VIDEO-01 · Augmented Reality · Live Interaction",
        tag: "Video Demo",
        image: asset("royal-creations/ar_feature_video.mp4"),
        mediaType: "video",
        poster: asset("royal-creations/royal-image-05.avif"),
        description:
          "ضبط زنده تعامل کاربر با قابلیت AR؛ برخلاف تصویر ثابت، این ویدیو رفتار واقعی قرارگیری، جابه‌جایی و چرخش مدل سه‌بعدی در فضای فیزیکی را نشان می‌دهد.",
      },
      {
        title: "رابط پیکربندی اختصاصی فرش در دسکتاپ (Rug Configurator)",
        subtitle: "IMAGE-06 · Custom Rug Configurator · Desktop",
        tag: "Product Configurator",
        image: asset("royal-creations/royal-image-06.avif"),
        description:
          "محیط Configurator برای انتخاب شکل، رنگ، روش تولید، نوع الیاف و ابعاد فرش، در کنار پیش‌نمایش بصری نتیجه پیکربندی.",
      },
      {
        title: "نسخه موبایل ابزار پیکربندی فرش (Mobile Configurator)",
        subtitle: "IMAGE-07 · Custom Rug Configurator · Mobile",
        tag: "Responsive Design",
        image: asset("royal-creations/royal-image-07.avif"),
        description:
          "تجربه سفارشی‌سازی در صفحه کوچک‌تر؛ ورودی ابعاد، پیش‌نمایش تعاملی محصول پیکربندی‌شده و دکمه مستقیم «نمایش در فضای شما» برای ورود به تجربه AR.",
      },
      {
        title:
          "ویدیوی دموی پیکربندی محصول و مشاهده آن در AR (Configurator + AR)",
        subtitle: "VIDEO-02 · Configurator to AR · End-to-End Flow",
        tag: "Video Demo",
        image: asset("royal-creations/configurator_feature_ar.mp4"),
        mediaType: "video",
        poster: asset("royal-creations/royal-image-06.avif"),
        description:
          "نمایش ویدیویی مسیر کامل سفارشی‌سازی تا پیش‌نمایش؛ انتخاب ویژگی‌ها در Configurator و سپس مشاهده همان محصول پیکربندی‌شده در تجربه واقعیت افزوده.",
      },
      {
        title: "صفحه رزرو مشاوره حضوری (In-Home Consultation Booking)",
        subtitle: "IMAGE-08 · Consultation Booking · Desktop Viewport",
        tag: "Service Booking",
        image: asset("royal-creations/royal-image-08.avif"),
        description:
          "فرم ثبت درخواست بازدید و مشاوره حضوری؛ جریانی که انتخاب زمان، ارائه اطلاعات موردنیاز تیم و پرداخت آنلاین را در یک مسیر واحد کنار هم قرار می‌دهد.",
      },
      {
        title: "تجربه چندزبانه و انتخاب‌گر زبان فروشگاه (Localization)",
        subtitle: "IMAGE-09 · Internationalization · Language Switcher",
        tag: "i18n",
        image: asset("royal-creations/royal-image-09.avif"),
        description:
          "بخش قابل مشاهده بومی‌سازی در رابط کاربری؛ انتخاب‌گر زبان برای ارائه تجربه متناسب با مخاطبان بازارهای سوئیس و آلمان.",
      },
      {
        title: "صفحه تکمیل خرید (Checkout Flow)",
        subtitle: "IMAGE-10 · Checkout · Desktop Viewport",
        tag: "Checkout",
        image: asset("royal-creations/royal-image-10.avif"),
        description:
          "رابط کاربری مرحله تکمیل خرید؛ نقطه اتصال تجربه خرید به لایه یکپارچه‌سازی پرداخت.",
      },
      {
        title: "صفحه پرداخت آنلاین با Stripe (Payment Page)",
        subtitle: "IMAGE-11 · Stripe Payment · Next.js API Routes",
        tag: "Stripe Integration",
        image: asset("royal-creations/royal-image-11.avif"),
        description:
          "تجربه پرداخت آنلاین بین‌المللی؛ یکپارچه‌سازی Stripe از طریق Next.js API Routes، با تفکیک روشن میان رابط Checkout و لایه پردازش پرداخت.",
      },
      {
        title: "داشبورد مشتری و فهرست سفارش‌ها (Customer Dashboard)",
        subtitle: "IMAGE-12 · Customer Dashboard · My Orders",
        tag: "Post-Purchase",
        image: asset("royal-creations/royal-image-12.avif"),
        description:
          "صفحه سفارش‌های مشتری در داشبورد؛ تجربه پس از خرید با امکان مراجعه مجدد کاربر برای مشاهده وضعیت و جزئیات سفارش‌های ثبت‌شده.",
      },
      {
        title: "گزارش PageSpeed Insights صفحه اصلی — دسکتاپ",
        subtitle: "REPORT-01 · PageSpeed Insights · Home · Desktop",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/home_desktop.avif",
        ),
        description:
          "گزارش رسمی PageSpeed Insights صفحه اصلی در حالت دسکتاپ؛ سند عملکردی سنگین‌ترین صفحه ورودی فروشگاه.",
      },
      {
        title: "گزارش PageSpeed Insights صفحه اصلی — موبایل",
        subtitle: "REPORT-02 · PageSpeed Insights · Home · Mobile",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/home_mobile.avif",
        ),
        description:
          "گزارش PageSpeed Insights صفحه اصلی در موبایل؛ معیار سخت‌گیرانه‌تر ارزیابی عملکرد به دلیل محدودیت منابع پردازشی و شبکه دستگاه‌های موبایل.",
      },
      {
        title: "گزارش PageSpeed Insights صفحه محصول — دسکتاپ",
        subtitle: "REPORT-03 · PageSpeed Insights · Product Page · Desktop",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/product_single_page_desktop.avif",
        ),
        description:
          "سند عملکرد صفحه‌ای که سنگین‌ترین محتوای تعاملی پروژه (نمایش سه‌بعدی و ورودی AR) را میزبانی می‌کند؛ شاهد اصلی اثربخشی راهبرد Lazy Loading.",
      },
      {
        title: "گزارش PageSpeed Insights صفحه محصول — موبایل",
        subtitle: "REPORT-04 · PageSpeed Insights · Product Page · Mobile",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/product_single_page_mobile.avif",
        ),
        description:
          "وضعیت عملکرد صفحه محصول روی دستگاه‌های موبایل؛ جایی که هزینه پردازشی محتوای سه‌بعدی بیشترین اثر را بر تجربه کاربر دارد.",
      },
      {
        title: "گزارش PageSpeed Insights ابزار پیکربندی — دسکتاپ",
        subtitle: "REPORT-05 · PageSpeed Insights · Configurator · Desktop",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/configurator_desktop.avif",
        ),
        description:
          "گزارش عملکرد Configurator در دسکتاپ؛ صفحه‌ای که ترکیب کنترل‌های تعاملی و پیش‌نمایش زنده محصول را همزمان مدیریت می‌کند.",
      },
      {
        title: "گزارش PageSpeed Insights ابزار پیکربندی — موبایل",
        subtitle: "REPORT-06 · PageSpeed Insights · Configurator · Mobile",
        tag: "Performance Evidence",
        image: asset(
          "royal-creations/royal-creation-page-speed-report/configurator_mobile.avif",
        ),
        description:
          "گزارش عملکرد Configurator در موبایل؛ تکمیل‌کننده مجموعه شواهد عملکردی پروژه در کنار صفحه اصلی و صفحه محصول.",
      },
    ],
  },
  {
    id: "sohotel",
    slug: "sohotel",
    title: "پلتفرم B2B تأمین و خرید عمده تجهیزات و محصولات هتلی (Sohotel)",
    shortTitle: "Sohotel",
    category: "B2B Marketplace & Supply Chain",
    domain: "تأمین عمده و زنجیره دیجیتال هتلداری",
    role: "معمار و توسعه‌دهنده ارشد فرانت‌اند (Front-End Architect & Lead)",
    image: asset("sohotel/image-01.avif"),
    link: "https://sohotel.ir",
    source: "",
    description:
      "پلتفرم sohotel.ir یک سامانه جامع B2B برای ارتباط مستقیم میان خریداران هتلی و تأمین‌کنندگان تجهیزات و محصولات تخصصی هتل‌ها است. این سامانه با هدف فراهم‌کردن بستری یکپارچه برای مدیریت فرایندهای خرید عمده، بررسی کاتالوگ محصولات، ارسال و پیگیری پیشنهادهای قیمت (Quotes) و تعامل تجاری میان هتل‌ها و تولیدکنندگان توسعه یافته است.",
    theProblem:
      "فرایندهای سنتی خرید و تأمین تجهیزات هتلی همواره با چالش‌هایی چون مذاکرات پراکنده، صدور دستی پیش‌فاکتورها، عدم شفافیت در قیمت‌گذاری عمده و دشواری رهگیری پیشنهادها مواجه بود. چالش اصلی، مهندسی پلتفرمی بود که ضمن تفکیک کامل نیازمندی‌های خریداران و فروشندگان با سطوح دسترسی چندگانه (RBAC)، جریان پیچیده مذاکره و گردش پیشنهاد قیمت (Quote Workflow) را به شکلی ساختاریافته، بلادرنگ و با بالاترین کارایی رابط کاربری پیاده‌سازی کند.",
    myRole:
      "معماری و توسعه کامل لایه Front-End بر پایه Next.js App Router و React، طراحی و پیاده‌سازی داشبوردهای مجزای خریدار و تأمین‌کننده، پیاده‌سازی ماشین وضعیت گردش پیشنهادهای قیمت، ارتباط داده‌ای با GraphQL و TanStack Query، یکپارچه‌سازی سیستم چندزبانه (i18next) و پیاده‌سازی تکنیک‌های بهینه‌سازی عملکرد نظیر Partial Pre-Rendering (PPR) و React Compiler.",
    technicalSkillList: [
      getSkill("nextjs"),
      getSkill("react"),
      getSkill("typescript"),
      getSkill("graphql"),
      getSkill("zustand"),
      getSkill("tailwind"),
    ],
    highlights: [
      "معماری رابط‌های کاربری کاملاً مجزا برای خریداران هتلی و تأمین‌کنندگان کالا با تجارب کاربری تخصصی",
      "طراحی و پیاده‌سازی ماشین وضعیت گردش چندمرحله‌ای استعلام و پیشنهاد قیمت (Quotes Workflow)",
      "یکپارچه‌سازی لایه ارتباط داده‌ای با GraphQL، تولید خودکار تایپ‌ها با GraphQL Code Generator و کش هوشمند با TanStack Query",
      "سیستم مدیریت اعضای تیم و کنترل دسترسی بر پایه نقش (Role-Based Access Control یا RBAC)",
      "به‌کارگیری قابلیت‌های پیشرفته Next.js نظیر Partial Pre-Rendering (PPR)، Cache Components و React Compiler",
      "پیام‌رسانی داخلی پیرامون سفارش، تبادل فایل و مدارک، تولید پیش‌فاکتور (Proforma Invoice) و ذخیره فهرست‌های خرید عمده",
      "طراحی کاملاً واکنش‌گرا (Responsive) برای نماهای دسکتاپ، تبلت و موبایل با پشتیبانی از سیستم چندزبانه i18next",
    ],
    challenges: [
      {
        title:
          "مدیریت وضعیت‌های پیچیده و چرخه‌ی حیات گردش پیشنهاد قیمت (Quote Workflow)",
        solution:
          "فرایند مذاکره شامل وضعیت‌های متعددی نظیر ارسال پیشنهاد، مذاکره، پذیرش و رد پیشنهاد قیمت میان خریدار و تأمین‌کننده بود. با پیاده‌سازی استیت‌ماشین کلاینت و ترکیب Zustand با کش سلسله‌مراتبی TanStack Query و اعتبارسنجی فرم‌ها با Zod، تمامی وضعیت‌ها بدون تداخل و با صحت کامل داده‌ها مدیریت شدند.",
      },
      {
        title:
          "بهینه‌سازی لود و سرعت پاسخ‌دهی در صفحات پرداده (Performance Optimization)",
        solution:
          "با بهره‌گیری از Partial Pre-Rendering (PPR) جهت ترکیب شل استاتیک با استریمینگ داده‌های لحظه‌ای، استفاده از Cache Components و کامپایل بهینه‌شده با React Compiler، بهبود تقریبی ۲۰ درصدی در سرعت پاسخ‌دهی و زمان بارگذاری صفحات گزارش شد.",
      },
      {
        title:
          "جداسازی معماری دسترسی و پنل‌ها با Role-Based Access Control (RBAC)",
        solution:
          "تأمین‌کنندگان نیازمند تعریف نقش‌های سازمانی با مجوزهای تفکیک‌شده برای مشاهده سفارش‌ها، ویرایش محصولات یا پاسخ به پیشنهادها بودند. لایه محافظت از مسیرها (Route Guards) و رندرینگ شرطی اجزای UI بر پایه پرمیشن‌ها، امنیت و سادگی استفاده را تضمین کرد.",
      },
    ],
    keyFeatures: [
      {
        tag: "Buyer Experience",
        title: "پنل جامع خریدار، کاتالوگ محصولات و کشف تأمین‌کنندگان",
        description:
          "محیط اختصاصی برای مدیران خرید هتل شامل داشبورد آماری، مرور کاتالوگ با دسته‌بندی‌های پیشرفته، صفحه تفصیلی محصول و امکان کشف مستقیم تولیدکنندگان برتر صنعت هتلداری.",
      },
      {
        tag: "B2B Negotiation",
        title: "سیستم استعلام و گردش پیشنهادهای قیمت (Quote Workflow)",
        description:
          "فرایند ثبت استعلام خرید عمده، ارسال پیشنهادهای قیمت متقابل، چت و پیام‌رسانی داخلی پیرامون سفارش، تبادل مدارک و تولید پیش‌فاکتور رسمی (Proforma Invoice) در وضعیت‌های مختلف.",
      },
      {
        tag: "Seller Operations",
        title: "پنل تأمین‌کننده، مدیریت سفارش‌ها و اعضای تیم (RBAC)",
        description:
          "داشبورد عملیاتی فروشندگان برای مدیریت موجودی و کاتالوگ کالاها، پردازش و پیگیری وضعیت سفارش‌ها، مدیریت اعضای تیم فروش و پیکربندی دقیق نقش‌ها و مجوزهای سازمانی.",
      },
    ],
    techStackBreakdown: [
      {
        category: "فریم‌ورک و هسته اصلی فرانت‌اند",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Partial Pre-Rendering (PPR)",
          "Cache Components",
          "React Compiler",
        ],
      },
      {
        category: "ارتباط با داده‌ها و API",
        items: [
          "GraphQL",
          "TanStack React Query",
          "GraphQL Code Generator",
          "GraphQL Polling / Subscriptions",
        ],
      },
      {
        category: "مدیریت وضعیت و فرم‌ها",
        items: [
          "Zustand",
          "React Hook Form",
          "Zod Schema Validation",
          "i18next (Internationalization)",
        ],
      },
      {
        category: "طراحی و کامپوننت‌های رابط کاربری",
        items: [
          "Tailwind CSS",
          "Radix UI Primitives",
          "Responsive Layouts (Desktop/Tablet/Mobile)",
        ],
      },
    ],
    impact:
      "پلتفرم sohotel.ir بستری پایدار و توسعه‌پذیر برای مبادلات عمده زنجیره تأمین هتل‌ها فراهم کرده است. پیاده‌سازی موفق پنل‌های تفکیک‌شده خریدار و تأمین‌کننده، اتوماسیون جریان مذاکره قیمت (Quotes) و بهبود عملکرد با استفاده از مدرن‌ترین قابلیت‌های اکوسیستم React و Next.js، ساختار این سامانه را برای پاسخ‌گویی به نیازهای مقیاس‌پذیر تجارت B2B مهیا ساخته است.",
    gallery: [
      {
        title: "صفحه اصلی پلتفرم و تجربه عمومی خریداران (Landing Page)",
        subtitle: "IMAGE-01 · Public Landing Page · Desktop Viewport",
        tag: "Landing Experience",
        image: asset("sohotel/image-01.avif"),
        description:
          "نمای دسکتاپ لندینگ‌پیج رسمی Sohotel؛ معرفی ارزش‌های خرید عمده مستقیم از تولیدکننده، دسته‌بندی‌های تجهیزات هتلی و دسترسی سریع به کاتالوگ و ورود به پنل‌ها.",
      },
      {
        title: "نمای کلی داشبورد خریدار (Buyer Dashboard Overview)",
        subtitle: "IMAGE-02 · Buyer Dashboard · Desktop Viewport",
        tag: "Buyer Portal",
        image: asset("sohotel/image-02.avif"),
        description:
          "محیط تعاملی پنل خریدار شامل مسیر راهنمای شروع سریع، خلاصه سفارش‌های فعال، استعلام‌های قیمت و میانبرهای دسترسی به کاتالوگ.",
      },
      {
        title: "کاتالوگ و مرور پیشرفته محصولات (Product Catalog)",
        subtitle: "IMAGE-03 · Customer Catalog View · Category Navigation",
        tag: "Catalog Navigation",
        image: asset("sohotel/image-03.avif"),
        description:
          "سازمان‌دهی ساختاریافته کاتالوگ محصولات با دسته‌بندی‌های تخصصی هتلداری، امکان جستجوی سریع کالاها و بررسی گزینه‌های موجود در پلتفرم.",
      },
      {
        title: "صفحه تفصیلی محصول و مشخصات فنی (Product Detail Page)",
        subtitle: "IMAGE-04 · Single Product View · Procurement Specs",
        tag: "Product Details",
        image: asset("sohotel/image-04.avif"),
        description:
          "نمای اختصاصی محصول برای خریدار شامل تصاویر، مشخصات فنی، اطلاعات تأمین‌کننده و پیش‌نیازهای ادامه فرایند خرید عمده.",
      },
      {
        title: "گردش پیشنهاد قیمت: وضعیت ارسال پیشنهاد (Quote: Offer Sent)",
        subtitle: "IMAGE-05 · Quote Negotiation · Offer Sent State",
        tag: "Quote Workflow",
        image: asset("sohotel/image-05.avif"),
        description:
          "نمایش وضعیت ارسال پیشنهاد قیمت در پنل خریدار، ثبت مشخصات استعلام، پیام‌های تعاملی و آخرین رقم پیشنهادی برای تصمیم‌گیری.",
      },
      {
        title: "گردش پیشنهاد قیمت: وضعیت پذیرش پیشنهاد (Quote: Accepted)",
        subtitle: "IMAGE-06 · Quote Negotiation · Accepted Status",
        tag: "Quote Workflow",
        image: asset("sohotel/image-06.avif"),
        description:
          "مرحله توافق و پذیرش پیشنهاد قیمت میان خریدار و تأمین‌کننده جهت ادامه فرایند صدور پیش‌فاکتور و نهایی‌سازی سفارش.",
      },
      {
        title: "گردش پیشنهاد قیمت: وضعیت رد پیشنهاد (Quote: Declined)",
        subtitle: "IMAGE-07 · Quote Negotiation · Declined Status",
        tag: "Quote Workflow",
        image: asset("sohotel/image-07.avif"),
        description:
          "مستندسازی وضعیت رد پیشنهاد قیمت در رابط کاربری و امکان ارزیابی مجدد شرایط یا بازنگری در پیشنهادهای متقابل. این سه وضعیت، نماهای مجزای گردش پیشنهاد قیمت هستند و نباید به‌عنوان یک رابط کاربری ترکیبی تفسیر شوند.",
      },
      {
        title: "نمای کلی پنل تأمین‌کننده و فروشگاه (Seller Dashboard Overview)",
        subtitle: "IMAGE-08 · Seller Dashboard · Operations Hub",
        tag: "Seller Portal",
        image: asset("sohotel/image-08.avif"),
        description:
          "محیط کاری تأمین‌کننده و نقطه ورود به بخش‌های مدیریت کاتالوگ، بررسی درخواست‌های قیمت جدید، وضعیت سفارش‌ها و اعضای تیم.",
      },
      {
        title: "مدیریت کاتالوگ و محصولات تأمین‌کننده (Product Management)",
        subtitle: "IMAGE-09 · Seller Products View · Catalog Control",
        tag: "Inventory & Products",
        image: asset("sohotel/image-09.avif"),
        description:
          "بخش مدیریت محصولات فروشنده برای تعریف کالاهای جدید، ویرایش قیمت‌های عمده، تنظیم مشخصات فنی و وضعیت موجودی کالا.",
      },
      {
        title: "مدیریت و پیگیری سفارش‌های عمده (Order Management)",
        subtitle: "IMAGE-10 · Seller Orders · Processing & Status",
        tag: "Order Management",
        image: asset("sohotel/image-10.avif"),
        description:
          "محیط پیگیری و نظارت بر سفارش‌های ثبت‌شده، بررسی وضعیت پرداخت و ارسال، و هماهنگی تدارکاتی میان خریدار و فروشنده.",
      },
      {
        title: "سیستم مدیریت نقش‌ها و مجوزها (Roles & Permissions)",
        subtitle: "IMAGE-11 · RBAC Security · Access Control",
        tag: "RBAC & Security",
        image: asset("sohotel/image-11.avif"),
        description:
          "پیکربندی سطوح دسترسی سازمانی (RBAC) برای تفکیک اختیارات پرسنل نظیر کارشناس فروش، مدیر مالی و ادمین سیستم.",
      },
      {
        title: "مدیریت اعضای تیم فروشگاه (Team Management)",
        subtitle: "IMAGE-12 · Seller Team · Member Administration",
        tag: "Team Management",
        image: asset("sohotel/image-12.avif"),
        description:
          "محیط مدیریت اعضای تیم در پنل تأمین‌کننده با قابلیت دعوت همکاران جدید، انتساب نقش‌ها و رصد فعالیت‌های سازمانی.",
      },
      {
        title: "رابط کاربری ریسپانسیو در تبلت (Tablet View)",
        subtitle: "IMAGE-13 · Tablet Viewport · Responsive Adaptation",
        tag: "Responsive Design",
        image: asset("sohotel/image-13.avif"),
        description:
          "تطبیق بهینه اجزای داشبورد تأمین‌کننده برای صفحات نمایش با ابعاد متوسط (تبلت) با حفظ دسترسی‌پذیری و چیدمان استاندارد.",
      },
      {
        title: "رابط کاربری ریسپانسیو در موبایل (Mobile View)",
        subtitle: "IMAGE-14 · Mobile Viewport · On-the-Go Management",
        tag: "Responsive Design",
        image: asset("sohotel/image-14.avif"),
        description:
          "بهینه‌سازی کامل پنل و منوها برای تلفن‌های همراه جهت نظارت سریع بر استعلام‌ها و پاسخ‌دهی به مشتریان در هر زمان و مکان.",
      },
      {
        title:
          "کشف تولیدکنندگان و برندهای مرجع (Manufacturer & Supplier Discovery)",
        subtitle: "IMAGE-15 · Supplier Directory · B2B Networking",
        tag: "Supplier Discovery",
        image: asset("sohotel/image-15.avif"),
        description:
          "دایرکتوری جامع معرفی تولیدکنندگان و تأمین‌کنندگان معتبر هتلی با امکان مشاهده پروفایل برند، محصولات عرضه‌شده و ارتباط تجاری.",
      },
    ],
  },
  {
    id: "cursor-navigation-vscode",
    slug: "cursor-navigation-vscode",
    title:
      "اکستنشن camelCase Navigator برای VS Code (انتشار رسمی در Marketplace)",
    shortTitle: "camelCase Navigator",
    category: "Developer Productivity Tool",
    domain: "ابزار متن‌باز توسعه‌دهندگی · VS Code Marketplace",
    role: "ایده‌پرداز، توسعه‌دهنده و نگهدارنده (Solo Developer)",
    image: asset("camel-case-extension/image-01.avif"),
    link: "https://marketplace.visualstudio.com/items?itemName=sobhanYaghobi.camel-case-navigator",
    source: "https://github.com/sobhan-yaghoubi/camel-case-navigation",
    description:
      "camelCase Navigator یک اکستنشن متن‌باز برای Visual Studio Code است که ناوبری مبتنی بر صفحه‌کلید را درون شناسه‌های ترکیبی هوشمند می‌کند. این ابزار به‌جای رفتار با شناسه‌هایی مانند handleAuthenticationRequest به‌عنوان یک بلوک متنی واحد، آن‌ها را به اجزای سازنده‌شان تجزیه می‌کند و امکان جابه‌جایی، انتخاب و حذف دقیق کلمات داخلی در الگوهای camelCase و PascalCase را بدون نیاز به ماوس یا فشردن مکرر کلیدهای جهت‌دار فراهم می‌کند. این اکستنشن به صورت Open Source در GitHub منتشر شده و در مارکت‌پلیس رسمی VS Code به بیش از ۴۰۰ نصب فعال رسیده است.",
    theProblem:
      "استفاده از نام‌های توصیفی و طولانی برای متغیرها، توابع و کلاس‌ها یک استاندارد مهندسی است؛ اما رفتار پیش‌فرض ناوبری VS Code این شناسه‌ها را یک واحد متنی کامل در نظر می‌گیرد. برای مثال در شناسه handleAuthenticationRequest، اگر مکان‌نما در انتهای Request باشد و توسعه‌دهنده بخواهد آن را به ابتدای Authentication ببرد، یا باید ۱۷ بار کلید جهت‌دار را فشار دهد یا با Ctrl+Arrow به ابتدای کل شناسه برود و دوباره برگردد. این وقفه هرچند کوچک، وقتی در طول روز صدها بار تکرار شود، تمرکز و سرعت توسعه را کاهش می‌دهد. انگیزه ساخت این ابزار، حل همین چالش با یک تجربه ناوبری روان و دقیق بود که با الگوی ذهنی برنامه‌نویسان در مدیریت شناسه‌های ترکیبی هم‌خوانی داشته باشد.",
    myRole:
      "به‌عنوان ایده‌پرداز و تنها توسعه‌دهنده، تمام چرخه محصول را خودم پیش بردم: طراحی و پیاده‌سازی اکستنشن با TypeScript و VS Code Extension API، تعریف و ثبت فرمان‌های اختصاصی در package.json، دسترسی به ادیتور فعال از طریق vscode.window.activeTextEditor و محاسبه موقعیت مکان‌نما، پیاده‌سازی الگوریتم پارسینگ متن برای تشخیص مرز کلمات با Regex، طراحی کلیدهای میانبر غیرمخرب و محدود به دامنه editorTextFocus، و در نهایت مستندسازی، نسخه‌بندی، متن‌باز کردن پروژه و عبور از فرایند تأیید و انتشار در VS Code Marketplace.",
    technicalSkillList: [getSkill("typescript"), getSkill("vscode-api")],
    highlights: [
      "بیش از ۴۰۰ نصب فعال از سوی توسعه‌دهندگان بین‌المللی در مارکت‌پلیس رسمی VS Code",
      "پیمایش سریع میان کلمات درون شناسه‌های طولانی با تشخیص هوشمند الگوهای camelCase و PascalCase",
      "سه دسته فرمان مکمل: ناوبری (Navigation)، انتخاب (Selection) و حذف (Deletion) کلمات داخلی",
      "کلیدهای میانبر هم‌راستا با الگوی پیش‌فرض VS Code (Alt برای جابه‌جایی و Shift برای انتخاب) و محدود به editorTextFocus",
      "الگوریتم پارسینگ مبتنی بر Regex با مدیریت Edge Caseهایی مانند اعداد و اختصارات متوالی",
      "معماری فوق‌العاده سبک با زمان اجرای میلی‌ثانیه‌ای و بدون کوچک‌ترین اثر روی پرفورمنس ویرایشگر",
      "کد کاملاً متن‌باز (Open Source) روی GitHub و توسعه‌یافته با TypeScript خالص",
    ],
    challenges: [
      {
        title:
          "تشخیص دقیق مرز کلمات درون شناسه‌های ترکیبی (Word Boundary Detection)",
        solution:
          "چالش اصلی مهندسی، تشخیص درست مرز کلمات بود. الگوریتم پارسینگ متنی‌ای پیاده‌سازی شد که با استفاده از Regular Expressions متن اطراف مکان‌نما را تحلیل می‌کند و تغییر وضعیت از حروف کوچک به بزرگ را به‌عنوان مرز کلمه شناسایی می‌کند؛ مثلاً مرز میان e و A در handleAuthenticationRequest.",
      },
      {
        title: "مدیریت Edge Caseهای شناسه‌های غیرمتعارف",
        solution:
          "شناسه‌هایی که حاوی عدد هستند (مانند product123Id) یا اختصارات متوالی دارند (مانند HTMLValidationError)، الگوی ساده «تغییر حروف کوچک به بزرگ» را می‌شکنند. الگوریتم باید در این حالت‌ها هم دقیقاً تشخیص دهد مرز منطقی میان کلمات داخلی کجاست تا رفتار ابزار در تمام سناریوها قابل پیش‌بینی بماند.",
      },
      {
        title: "تداخل میانبرهای صفحه‌کلید و یکپارچگی با رفتار ادیتور",
        solution:
          "بایندینگ‌ها به شکل غیرمخرب و کاملاً قابل سفارشی‌سازی طراحی شدند و دامنه اثرشان با شرط editorTextFocus محدود شد تا تنها زمانی فعال باشند که تمرکز روی ادیتور متنی است. انتخاب Alt+Arrow برای جابه‌جایی و Shift+Alt+Arrow برای انتخاب، تجربه را با الگوی ذهنی موجود در ناوبری پیش‌فرض VS Code هم‌راستا نگه می‌دارد تا موقعیت نهایی مکان‌نما برای توسعه‌دهنده غافلگیرکننده نباشد.",
      },
    ],
    keyFeatures: [
      {
        tag: "Navigation",
        title: "جابه‌جایی مکان‌نما میان کلمات داخلی",
        description:
          "فرمان‌های moveCamelCaseLeft و moveCamelCaseRight مکان‌نما را به ابتدای کلمه بعدی یا قبلی درون یک شناسه ترکیبی منتقل می‌کنند؛ به‌جای پرش روی کل شناسه، حرکت منطقی میان handle، Authentication و Request انجام می‌شود.",
      },
      {
        tag: "Selection",
        title: "انتخاب دقیق یک یا چند کلمه داخلی",
        description:
          "فرمان‌های selectCamelCaseLeft و selectCamelCaseRight با میانبرهای Shift+Alt+Arrow امکان انتخاب بخشی از یک شناسه را می‌دهند؛ قابلیتی که برای تغییر نام بخشی از یک متغیر طولانی بدون انتخاب کل آن ضروری است.",
      },
      {
        tag: "Deletion",
        title: "حذف کلمه داخلی با یک میانبر واحد",
        description:
          "فرمان deleteCamelCaseLeft با میانبر Alt+Backspace کلمه داخلیِ سمت چپ مکان‌نما را مستقیماً حذف می‌کند و ویرایش بخش‌های کوچک شناسه‌های طولانی را به یک حرکت ساده تبدیل می‌کند.",
      },
    ],
    techStackBreakdown: [
      {
        category: "زبان و API",
        items: [
          "TypeScript",
          "VS Code Extension API",
          "vscode.window.activeTextEditor",
          "Command Registration (package.json)",
        ],
      },
      {
        category: "منطق پردازش متن",
        items: [
          "Regular Expressions (Regex)",
          "Word Boundary Detection",
          "camelCase / PascalCase Parsing",
          "Cursor Position Calculation",
        ],
      },
      {
        category: "تجربه کاربری و کلیدهای میانبر",
        items: [
          "Alt + Arrow (Navigation)",
          "Shift + Alt + Arrow (Selection)",
          "Alt + Backspace (Deletion)",
          "editorTextFocus Scope",
        ],
      },
      {
        category: "انتشار و نگهداری",
        items: [
          "VS Code Marketplace Publishing",
          "Open Source (GitHub)",
          "Semantic Versioning",
          "Extension Documentation",
        ],
      },
    ],
    impact:
      "camelCase Navigator به‌عنوان یک پروژه شخصی که برای حل یک مشکل مشخص در گردش کار روزانه توسعه‌دهندگان ساخته شد، به بیش از ۴۰۰ نصب فعال در VS Code Marketplace رسیده است؛ عددی که نشان می‌دهد این ابزار یک نیاز واقعی را در جامعه برنامه‌نویسان شناسایی و برطرف کرده است. ارزش این پروژه برای من فراتر از خود ابزار بود: تسلط عملی بر VS Code Extension API و مدیریت مکان‌نما و انتخاب متن، تجربه طراحی و بهینه‌سازی الگوریتم‌های پارسینگ متن برای Edge Caseهای پیچیده، و از همه مهم‌تر طی کردن چرخه کامل محصول از شناسایی یک مسئله در گردش کار شخصی تا پیاده‌سازی، تست، انتشار در یک مارکت‌پلیس رسمی و نگهداری یک پروژه متن‌باز.",
    gallery: [
      {
        title: "فرمان‌ها و کلیدهای میانبر اکستنشن در محیط واقعی VS Code",
        subtitle: "IMAGE-01 · Registered Commands · Keybindings & Scope",
        tag: "Extension Commands",
        image: asset("camel-case-extension/image-02.avif"),
        description:
          "فهرست فرمان‌های ثبت‌شده توسط اکستنشن در Keyboard Shortcuts؛ شامل extension.deleteCamelCaseLeft با Alt+Backspace، فرمان‌های moveCamelCaseLeft و moveCamelCaseRight با Alt+Arrow و فرمان‌های selectCamelCaseLeft و selectCamelCaseRight با Shift+Alt+Arrow. ستون When نشان می‌دهد دامنه اثر همه فرمان‌ها به editorTextFocus محدود شده است تا هیچ تداخلی با سایر بخش‌های ادیتور ایجاد نشود.",
      },
      {
        title: "ویدیوی دموی عملکرد اکستنشن در جریان واقعی کدنویسی",
        subtitle: "VIDEO-01 · 30-Second Live Demonstration",
        tag: "Video Demo",
        image: asset("camel-case-extension/camelCase-navigation-guide.mp4"),
        mediaType: "video",
        poster: asset("camel-case-extension/image-02.avif"),
        description:
          "دموی کوتاه عملکرد ابزار؛ مکان‌نما به‌جای پرش روی کل شناسه، به صورت منطقی میان کلمات داخلی مانند handle، Authentication و Request جابه‌جا می‌شود. همین رفتار است که وابستگی به ماوس را در ویرایش متون فنی به شدت کاهش می‌دهد.",
      },
      {
        title: "هویت بصری پروژه و لوگوی اکستنشن (Visual Identity)",
        subtitle: "IMAGE-02 · Project Branding · Marketplace Logo",
        tag: "Branding",
        image: asset("camel-case-extension/image-01.avif"),
        description:
          "هویت بصری و لوگوی camelCase Navigator که در صفحه اکستنشن در VS Code Marketplace استفاده شده است.",
      },
    ],
  },
]
