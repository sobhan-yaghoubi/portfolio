. معرفی پروژه (Project Overview)
پلتفرم Expocore یک محصول SaaS برای مدیریت هتل‌ها و کسب‌وکارها است (نسخه زنده در Expocore.com در دسترس است). این پلتفرم به مدیران هتل اجازه می‌دهد تا بدون نیاز به دانش برنامه‌نویسی، وب‌سایت، محتوا و سیستم رزرواسیون خود را از طریق یک Dashboard یکپارچه مدیریت کنند. هسته اصلی این محصول، یک Visual Page Builder اختصاصی است که به کاربران امکان می‌دهد ساختار و ظاهر وب‌سایت خود را به صورت Drag-and-Drop بسازند و مدیریت کنند.

۲. چالش اصلی محصول (The Problem)
بزرگترین چالش مهندسی در این پلتفرم، ایجاد تعادل بین انعطاف‌پذیری برای کاربران نهایی و حفظ پرفورمنس و یکپارچگی سیستم بود. ما باید ابزاری می‌ساختیم که به اپراتورهای هتل اجازه دهد صفحات وب‌سایت خود را به صورت بصری طراحی کنند، تنظیمات المان‌ها را تغییر دهند و استایل‌های دلخواه اعمال کنند، اما همزمان خروجی نهایی باید از نظر ساختار داده کاملاً معتبر (Valid)، از نظر SEO بهینه‌شده و در محیط Storefront دارای بالاترین سرعت Rendering باشد.

۳. نقش و مسئولیت‌های من (My Role & Responsibilities)
در این پروژه، من به همراه تیم مهندسی، معماری و ساختار کلی سیستم را طراحی کردیم. با این حال، توسعه و رهبری موتور رندرینگ (Rendering Engine) و صفحه‌ساز بصری (Visual Page Builder) مستقیماً بر عهده من بود. همچنین پیاده‌سازی بخش‌های مربوط به یکپارچه‌سازی فرانت‌اند (Frontend Integration) برای سیستم مدیریت رزرو و جریان‌های کاری تولید محتوای AI را انجام دادم.

[IMAGE-01: Visual Editor Interface — Demonstrating the desktop view of the visual page builder, showing the workspace where users construct pages using Drag-and-Drop.]

۴. چالش‌های فنی و راهکارهای مهندسی (Technical Challenges & Solutions)

الف) معماری State در صفحه‌ساز و روابط کامپوننت‌ها

    چالش: ساختار صفحات به صورت یک درخت عمیق و تو در تو (Deeply Nested JSON) ذخیره می‌شد. مدیریت Drag-and-Drop روی این ساختار، پیاده‌سازی قوانین مربوط به اینکه هر کامپوننت چه فرزندانی را می‌پذیرد (Element Relations)، و اعتبارسنجی تنظیمات (Settings Schema) بسیار پیچیده بود.

    راهکار: برای مدیریت Drag-and-Drop از dnd-kit استفاده کردم. برای اعتبارسنجی ساختار داده‌ها و تنظیمات هر بلاک از Zod استفاده شد. بدین ترتیب، موتور صفحه‌ساز به صورت هوشمند تشخیص می‌داد که قرار دادن یک المان خاص درون المان دیگر مجاز است یا خیر. این Schema ها به عنوان منبع حقیقت (Source of Truth) عمل می‌کردند.

ب) بهینه‌سازی پرفورمنس در محیط Visual Editor

    چالش: به دلیل ساختار تو در توی کامپوننت‌ها، هر تغییری در State (مثل کشیدن یک المان یا تغییر تنظیمات رنگ) می‌توانست باعث Re-render شدن کل درخت شود که منجر به افت شدید فریم‌ریت (FPS) در مرورگر می‌شد.

    راهکار: با استفاده از Zustand برای State Management و بهینه‌سازی دقیق چرخه Re-render در React، موتور رندرینگ را به گونه‌ای توسعه دادم که فقط کامپوننت‌های هدف و گره‌های (Nodes) درگیر در تغییرات Re-render شوند و از رندرهای اضافی در کل سیستم جلوگیری شود. این موضوع پرفورمنس Editor را در حالت بهینه نگه داشت.

[IMAGE-02: Element Theme & Settings — Showing the configuration panels and schema-based visual settings that dictate how blocks are rendered.]

ج) استراتژی Rendering و یکپارچگی با Storefront

    چالش: ساختار JSON تولید شده در داشبورد باید در سمت کاربر (Storefront) با بالاترین سرعت نمایش داده می‌شد، در حالی که برخی از داده‌ها ماهیت داینامیک داشتند (مثل وضعیت رزروها).

    راهکار: معماری سمت Storefront بر اساس Next.js SSG بنا شد. صفحات به صورت Static ساخته می‌شوند تا سرعت بارگذاری حداکثری را تجربه کنند. سیستم مجهز به On-demand Revalidation (Trigger) است؛ به این معنی که با هر بار اعمال تغییرات و ذخیره در Visual Editor، کش (Cache) صفحات مربوطه منقضی شده و در درخواست بعدی کاربر، صفحه مجدداً تولید (Revalidate) می‌شود. بخش‌هایی که به شدت نیازمند داده‌های لحظه‌ای بودند، به صورت داینامیک (SSR/CSR) مدیریت شدند.

۵. امکانات سفارشی‌سازی: Custom CSS
برای کاربرانی که نیاز به تغییرات ظاهری پیشرفته‌‌تری داشتند، قابلیت ادیت Custom CSS را فراهم کردم. این بخش در داشبورد با استفاده از CodeMirror پیاده‌سازی شده است که Syntax Highlighting را برای کدهای CSS ارائه می‌دهد و استایل‌های نوشته شده به صورت امن به المان‌های مربوطه در Storefront تزریق می‌شوند.

[IMAGE-03: Custom CSS Integration — Highlighting the CodeMirror-based custom CSS editing feature for advanced users.]

۶. معماری Monorepo (pnpm workspaces)
برای حفظ هماهنگی کامل بین اپلیکیشن Dashboard (توسعه یافته با Vite) و Storefront (توسعه یافته با Next.js)، از معماری Monorepo بر بستر ابزار pnpm استفاده کردیم.
استفاده از پکیج‌های اشتراکی در فضای کاری (Workspace) مزایای مهندسی بزرگی داشت:

    پکیج @hotel-saas/schema: شامل Zod Schema ها که اطمینان می‌داد داشبورد دقیقاً همان ساختاری را تولید می‌کند که موتور Next.js انتظار رندر کردن آن را دارد.

    پکیج @hotel-saas/page-builder: منطق پایه و تایپ‌های مشترک بین محیط ادیتور و رندر نهایی را به اشتراک می‌گذاشت.

    پکیج‌های @hotel-saas/config و @hotel-saas/ui برای اشتراک‌گذاری تنظیمات استاندارد و کامپوننت‌های پایه.

[IMAGE-04: Live Storefront Rendering — Showing the final output rendered by the Next.js storefront based on the deeply nested JSON schema.]

۷. یکپارچه‌سازی فرانت‌اند (Booking & AI Content)
علاوه بر صفحه‌ساز، فرانت‌اند سیستم مدیریت رزرو و جریان‌های کاری هوش مصنوعی نیز در داشبورد پیاده‌سازی شد. سیستم AI به کاربران اجازه می‌دهد تولید محتوای پست‌های وب‌سایت را زمان‌بندی (Schedule) کرده و در شبکه‌های اجتماعی توزیع کنند. من وظیفه توسعه رابط کاربری و اتصال این بخش‌ها به APIهای بک‌اند را بر عهده داشتم تا تجربه‌ای یکپارچه برای مدیران هتل خلق شود. داشبورد به طور کامل برای نمایش Responsive در نماهای Desktop، Tablet و Mobile پیاده‌سازی شده است.

[IMAGE-05: Responsive Device Views — Demonstrating the mobile view capability of the dashboard for content management on-the-go.]

۸. بهینه‌سازی موتورهای جستجو (Technical SEO)
با توجه به اینکه صفحات به صورت ساختاریافته توسط موتور ما رندر می‌شوند، SEO تکنیکال پایه در Storefront در نظر گرفته شد. خروجی نهایی Next.js شامل تگ‌های Semantic HTML استاندارد و تولید Meta Title و Meta Description‌های ضروری برای ایندکس شدن صحیح سایت هتل‌ها است.

۹. تکنولوژی‌های استفاده شده (Tech Stack)

    معماری: Monorepo (pnpm workspaces), Shared Workspace Packages

    بخش Dashboard: React, Vite, TypeScript, Zustand, React Query, React Router

    بخش Storefront: Next.js, React, TypeScript

    موتور صفحه‌ساز: dnd-kit (Drag-and-Drop), Zod (Schema Validation), CodeMirror, Tiptap

    رابط کاربری و استایل: Tailwind CSS, Radix UI, React Hook Form

    ابزارها: Biome

۱۰. دستاوردها و نتیجه‌گیری (Impact & Lessons Learned)
بزرگترین دستاورد من در این پروژه، مهندسی و پیاده‌سازی موفقیت‌آمیز یک سیستم Rendering قدرتمند و متناسب با نیازمندی‌های یک ساختار SaaS بود. طراحی مکانیزمی که در آن روابط بین کامپوننت‌ها به شکل ایزوله از طریق Schema کنترل می‌شود، و مدیریت همزمانِ کش Next.js با Revalidation 트리گرها، باعث شد پلتفرم پایداری بالایی در برابر خطاهای کاربری داشته باشد و در عین حال سرعت لود فوق‌العاده‌ای در سمت کاربر نهایی ارائه دهد.
