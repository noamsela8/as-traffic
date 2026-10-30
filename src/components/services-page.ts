export function createServicesPage(): string {
  const services = [
    {
      id: 'traffic',
      icon: '/assets/images/icons/icon-traffic.svg',
      title: 'הסדרי תנועה',
      subtitle: 'שקט נפשי לפרויקט שלכם, בכל שעות היממה',
      description: `אנחנו מציעים שירותי הסדרי תנועה מקיפים בפריסה ארצית רחבה, המלווים את שלל סוגי הפרויקטים החל משלבי התכנון והייעוץ הראשוניים ועד לביצוע המדויק בשטח. אנחנו מעניקים לכם ביטחון מלא ושקט נפשי – הן בזמן העבודה הדינמית והן בשגרה היומיומית של האתר והסדרי התנועה הזמניים, סביב השעון.`,
      bullets: [
        { title: 'תכנון וייעוץ מקצועי', text: 'ליווי מקצועי והתאמת פתרונות תנועה מול הגורמים הרלוונטיים.' },
        { title: 'ציוד והכוונה בשטח', text: 'פקחי תנועה מוסמכים, עגלות חץ, הצבת גדרות ואמצעי בטיחות שונים.' },
        { title: 'שילוט ותמרור', text: 'אספקה והצבה של תמרור ושילוט זמני או סופי כנדרש בפרויקט.' },
        { title: 'עבודות צבע', text: 'סימון וצביעה מקצועית של כבישים ונתיבים, בין אם צביעה זמנית או קבועה.' },
      ],
      closing: 'אנו מחויבים ליצירת סביבה בטוחה ומתוחזקת היטב, המאפשרת תנועה חיה וזורמת ומעבר חופשי ונקי לעוברי האורח בכל רגע נתון.',
      images: ['/assets/images/services/traffic-management.webp'],
    },
    {
      id: 'marking',
      icon: '/assets/images/icons/icon-marking.svg',
      title: 'צביעה וסימון כבישים',
      subtitle: 'גימור ברמה הגבוהה ביותר',
      description: `אנחנו מבצעים עבודות צביעה וסימון ברמת הגימור הגבוהה ביותר, תוך התחייבות לעבודה מדויקת, אסתטית ויעילה. העבודות מבוצעות תוך שימוש בחומרי צבע איכותיים ועמידים ובציות מלא לתקני הבטיחות והשוק העדכניים. כחלק מהשירות, אנחנו מציעים לכם גם ייעוץ מקצועי מקדים לתכנון אופטימלי של השטח.`,
      bullets: [
        { title: 'סימון וצביעת כבישים', text: 'סימון נתיבים, מעברי חצייה, חצים והכוונות דרך ברמת נראות גבוהה ובדיוק הנדסי.' },
        { title: 'צביעת שבילי אופניים', text: 'סימון וצביעה ייעודית של שבילי אופניים עירוניים ובין-עירוניים, תוך שימוש בצבעים מונעי החלקה לבטיחות מקסימלית של הרוכבים.' },
        { title: 'צביעה וארגון חניונים', text: 'תכנון וסימון תאי חניה (כולל חניות נכים ורכב חשמלי), מספור, חיצים וסימוני אזהרה לניצול מקסימלי של שטח החניון.' },
        { title: 'מחיקת צבע מקצועית', text: 'הסרת סימונים ישנים בצורה נקייה ויסודית באמצעות מקרצפת מתקדמת, ללא פגיעה בתשתית הכביש או האספלט.' },
      ],
      closing: '',
      images: [
        '/assets/images/services/road-marking.webp',
        '/assets/images/services/road-marking-1.webp',
        '/assets/images/services/roadmarking-2.webp',
        '/assets/images/services/road-marking-3.webp',
        '/assets/images/services/road-marking-4.webp',
        '/assets/images/services/road-marking-5.webp',
      ],
    },
    {
      id: 'inspector',
      icon: '/assets/images/icons/icon-inspector.svg',
      title: 'פקחי תנועה',
      subtitle: 'מוסמכים ומאושרים ממשטרת ישראל',
      description: `חברתנו מספקת שירותי פקחי תנועה (מכוונים) מקצועיים לשלל אתרי עבודה, סלילה ובנייה בפריסה ארצית. כל הפקחים מטעמנו מחזיקים באישור ובהסמכה רשמית ובתוקף של מדור התנועה במשטרת ישראל, ומיומנים בניהול השטח בצורה הבטוחה והאחראית ביותר.`,
      bullets: [
        { title: 'בטיחות מקסימלית בשטח', text: 'הגנה ושמירה על שלומם של צוותי העבודה באתר ושל עוברי האורח וכלי הרכב מסביב.' },
        { title: 'רציפות תפעולית', text: 'הבטחת תנאי עבודה רציפים, זורמים ושקטים לקבלן, תוך מניעת עיכובים או סיכונים מיותרים.' },
        { title: 'עבודה כחוק', text: 'שירות העומד בכל דרישות החוק, התקנות ותנאי הביטוח המחמירים ביותר של אתרי עבודה זמניים.' },
      ],
      closing: '',
      images: [
        '/assets/images/services/traffic-inspectors.webp',
        '/assets/images/services/traffic-inspectors-1.webp',
        '/assets/images/services/traffic-inspectors-2.jpg',
      ],
    },
    {
      id: 'signage',
      icon: '/assets/images/icons/icon-signage.svg',
      title: 'שילוט ותמרור',
      subtitle: 'פתרונות שילוט מקצועיים בפריסה ארצית',
      description: `חברתנו מתמחה באספקה והתקנה של מגוון רחב של תמרורים ושלטים, המיוצרים כולם בהתאמה מלאה לתקנים הארציים ומותאמים לעמידות מקסימלית בכל תנאי השטח. אנו מספקים מענה מקיף ומקצועי למגוון רחב של לקוחות, ביניהם: עיריות, מועצות מקומיות, חברות קבלניות, גופים עסקיים ולקוחות פרטיים בפריסה ארצית.`,
      bullets: [
        { title: 'תמרור תקני', text: 'אספקה והצבה של כל סוגי התמרורים, החל מתמרורי רחוב עירוניים ועד לתמרור ייעודי לאתרי עבודה וכבישים מהירים.' },
        { title: 'שלטי ענק ותשתיות', text: 'תכנון, ייצור והקמה של שלטי חוצות, שלטי הכוונה ענקיים וקונסטרוקציות מורכבות.' },
        { title: 'שילוט בהתאמה אישית', text: 'ייצור שלטים בעיצוב אישי ועל פי דרישה, המותאמים בדיוק לצרכים הפונקציונליים או המיתוגיים של הלקוח.' },
        { title: 'התקנה מקצועית', text: 'ביצוע עבודות ההתקנה בשטח על ידי צוותים מיומנים ותוך הקפדה יתרה על כללי הבטיחות.' },
      ],
      closing: '',
      images: ['/assets/images/services/signage.webp'],
    },
    {
      id: 'safety',
      icon: '/assets/images/icons/icon-safety.svg',
      title: 'אביזרי בטיחות',
      subtitle: 'פתרונות להגנה ולהכוונת התנועה',
      description: `חברתנו מספקת מגוון רחב של אביזרי בטיחות המיועדים לתשתיות הכבישים ולהגנה על הולכי הרגל, הנהגים והמשתמשים במרחב הציבורי. אנו מעניקים מענה לפרויקטים בתחום התשתיות, עבודות הכביש והפיתוח העירוני, לצד פתרונות לחניונים, למתחמים פרטיים ולשטחים תפעוליים.`,
      bullets: [
        { title: 'אביזרי סימון והכוונה', text: 'קונוסים, עיני חתול ומחזירי אור לשיפור הנראות ולהבלטת גבולות ונתיבי תנועה.' },
        { title: 'גדרות ומחסומי הפרדה', text: 'פתרונות לתיחום אזורי עבודה, להפרדה בין נתיבי תנועה ולהכוונת הולכי רגל וכלי רכב.' },
        { title: 'פסי האטה', text: 'פתרונות להאטת מהירות הנסיעה במתחמים ובאזורים שבהם נדרשת בקרת מהירות.' },
        { title: 'מעצורי חניה', text: 'אביזרים להגדרת גבולות החניה, למיקום מדויק של כלי רכב ולשמירה על סדר ובטיחות בחניונים.' },
        { title: 'מראות פנורמיות', text: 'פתרונות לשיפור שדה הראייה בצמתים, ביציאות מחניונים ובנקודות שבהן קיימת ראות מוגבלת.' },
        { title: 'פתרונות בטיחות נוספים', text: 'מגוון אביזרים לתשתיות הכביש ולהולכי הרגל, בהתאמה לצורכי הפרויקט ולתנאי השטח.' },
      ],
      closing: 'אנו שמים דגש על התאמת אביזרי הבטיחות לאופי השימוש ולדרישות הפרויקט, ומספקים ללקוחותינו מעטפת פתרונות המסייעת ביצירת סביבה מסודרת, ברורה ובטוחה יותר לתנועה ולהתנהלות בשטח.',
      images: ['/assets/images/services/safety-equipment.webp'],
    },
    {
      id: 'light',
      icon: '/assets/images/icons/icon-light.svg',
      title: 'עגלות תאורה ניידות',
      subtitle: 'פתרונות תאורה לכל צורך ובכל שטח',
      description: `חברתנו מספקת עגלות תאורה ניידות המיועדות להארת שטחים חשוכים ולמתן מענה מקצועי למגוון רחב של צרכים. פתרונות התאורה שלנו מתאימים לאתרי עבודה, לפרויקטים בתחום התשתיות והבנייה, לאירועים פרטיים ולכל מקום שבו נדרשת תאורה עוצמתית, ניידת ואמינה. אנו מציעים פתרונות גמישים המאפשרים התאמה לתנאי השטח ולאופי הפעילות, תוך דגש על נוחות תפעולית ומענה יעיל לצורכי הלקוח.`,
      bullets: [
        { title: 'אתרי עבודה ותשתיות', text: 'הארה עוצמתית לאתרי בנייה, סלילה ופרויקטי תשתיות הפועלים בשעות הלילה.' },
        { title: 'גמישות תפעולית', text: 'עגלות ניידות המאפשרות התאמה מהירה לכל מיקום וסוג שטח.' },
        { title: 'אירועים ופרויקטים מיוחדים', text: 'פתרון תאורה לאירועים פרטיים ומסחריים הדורשים תאורה ניידת ואמינה.' },
      ],
      closing: '',
      images: [
        '/assets/images/services/lighting.webp',
        '/assets/images/services/lighting-1.webp',
        '/assets/images/services/lighting-2.webp',
        '/assets/images/services/lighting-3.webp',
      ],
    },
  ];

  // Build nav pills
  const navPills = services.map((s) =>
    `<button
      onclick="scrollToService('${s.id}')"
      class="service-nav-pill"
      aria-label="עבור לשירות: ${s.title}"
      style="white-space:nowrap;padding:0.5rem 1.25rem;border-radius:9999px;font-size:0.875rem;font-weight:600;transition:all 0.2s;border:2px solid #F2521B;color:#F2521B;background:transparent;cursor:pointer;font-family:'Rubik',sans-serif;"
      onmouseover="if(!this.classList.contains('active-pill')){this.style.background='#F2521B';this.style.color='#fff';}"
      onmouseout="if(!this.classList.contains('active-pill')){this.style.background='transparent';this.style.color='#F2521B';}"
      id="pill-${s.id}"
    >${s.title}</button>`
  ).join('');

  // Build gallery for each service
  const buildGallery = (images: string[], serviceId: string, serviceTitle: string) => {
    if (images.length === 1) {
      return `
        <div style="border-radius:16px;overflow:hidden;height:420px;">
          <img src="${images[0]}" alt="" aria-hidden="true" style="width:100%;height:100%;object-fit:cover;display:block;" />
        </div>`;
    }

    const total = images.length;

    const dots = images.map((_, idx) =>
      `<button
        onclick="galleryGoTo('${serviceId}',${idx})"
        id="dot-${serviceId}-${idx}"
        aria-label="הצג תמונה ${idx + 1} מתוך ${total} — ${serviceTitle}"
        style="width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:all 0.3s;background:${idx === 0 ? '#F2521B' : 'rgba(255,255,255,0.5)'};"
      ></button>`
    ).join('');

    const slides = images.map((src, idx) =>
      `<div id="slide-${serviceId}-${idx}" style="position:absolute;inset:0;opacity:${idx === 0 ? '1' : '0'};z-index:${idx === 0 ? '1' : '0'};transition:opacity 0.5s ease;pointer-events:none;" aria-hidden="true">
        <img src="${src}" alt="" aria-hidden="true" style="width:100%;height:100%;object-fit:cover;display:block;" />
      </div>`
    ).join('');

    return `
      <div style="border-radius:16px;overflow:hidden;position:relative;height:420px;" role="region" aria-label="גלריית תמונות — ${serviceTitle}">

        ${slides}

        <!-- כפתור שמאל (הקודם) -->
        <button
          onclick="galleryGoTo('${serviceId}', (window._galleryIdx['${serviceId}']||0) - 1)"
          aria-label="תמונה קודמת — ${serviceTitle}"
          style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.45);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);transition:background 0.2s;z-index:10;"
          onmouseover="this.style.background='rgba(242,82,27,0.85)'"
          onmouseout="this.style.background='rgba(0,0,0,0.45)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <!-- כפתור ימין (הבא) -->
        <button
          onclick="galleryGoTo('${serviceId}', (window._galleryIdx['${serviceId}']||0) + 1)"
          aria-label="תמונה הבאה — ${serviceTitle}"
          style="position:absolute;right:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.45);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);transition:background 0.2s;z-index:10;"
          onmouseover="this.style.background='rgba(242,82,27,0.85)'"
          onmouseout="this.style.background='rgba(0,0,0,0.45)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <!-- מונה -->
        <div style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);color:white;font-size:0.75rem;font-family:'Rubik',sans-serif;padding:0.2rem 0.6rem;border-radius:20px;backdrop-filter:blur(4px);z-index:10;" id="gallery-counter-${serviceId}" aria-live="polite" aria-atomic="true">
          1 / ${total}
        </div>

        <!-- נקודות -->
        <div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:10;" role="group" aria-label="ניווט בין תמונות — ${serviceTitle}">
          ${dots}
        </div>

      </div>`;
  };

  // Build service blocks
  const serviceBlocks = services.map((s, i) => {
    const isEven = i % 2 === 0;

    const bulletItems = s.bullets.map(b =>
      `<li style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.75rem;">
        <span style="color:#F2521B;font-size:1.1rem;margin-top:0.1rem;flex-shrink:0;" aria-hidden="true">◆</span>
        <span><strong style="color:#272424;">${b.title}:</strong> ${b.text}</span>
      </li>`
    ).join('');

    const textBlock = `
      <div style="display:flex;flex-direction:column;justify-content:center;gap:1.5rem;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <img src="${s.icon}" alt="" aria-hidden="true" style="width:48px;height:48px;filter:invert(42%) sepia(93%) saturate(1352%) hue-rotate(350deg) brightness(95%) contrast(91%);" onerror="this.style.display='none'">
          <div>
            <p style="color:#F2521B;font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.25rem;" aria-hidden="true">${String(i + 1).padStart(2,'0')}</p>
            <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.6rem,3vw,2.2rem);font-weight:800;color:#272424;margin:0;line-height:1.2;">${s.title}</h2>
          </div>
        </div>
        <p style="font-size:1rem;font-weight:600;color:#F2521B;margin:0;">${s.subtitle}</p>
        <p style="color:#555;line-height:1.75;margin:0;">${s.description}</p>
        <ul style="list-style:none;padding:0;margin:0;">
          ${bulletItems}
        </ul>
        ${s.closing ? `<p style="color:#555;line-height:1.75;margin:0;font-style:italic;">${s.closing}</p>` : ''}
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;">
          <a href="/contact.html" style="display:inline-block;background:#F2521B;color:#fff;padding:0.75rem 2rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.95rem;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
            לפרטים נוספים וצור קשר
          </a>
          ${s.id === 'marking' ? `
          <a href="/marking.html" style="display:inline-flex;align-items:center;gap:0.5rem;background:transparent;color:#F2521B;padding:0.75rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.95rem;border:2px solid #F2521B;transition:all 0.2s;" onmouseover="this.style.background='#F2521B';this.style.color='#fff';" onmouseout="this.style.background='transparent';this.style.color='#F2521B';">
            לכל סוגי עבודות הצבע
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6"/></svg>
          </a>` : ''}
          ${s.id === 'signage' ? `
          <a href="/signage-catalog.html" style="display:inline-flex;align-items:center;gap:0.5rem;background:transparent;color:#F2521B;padding:0.75rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.95rem;border:2px solid #F2521B;transition:all 0.2s;" onmouseover="this.style.background='#F2521B';this.style.color='#fff';" onmouseout="this.style.background='transparent';this.style.color='#F2521B';">
            לקטלוג השילוט והתמרורים
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6"/></svg>
          </a>` : ''}
          ${s.id === 'safety' ? `
          <a href="/safety-catalog.html" style="display:inline-flex;align-items:center;gap:0.5rem;background:transparent;color:#F2521B;padding:0.75rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.95rem;border:2px solid #F2521B;transition:all 0.2s;" onmouseover="this.style.background='#F2521B';this.style.color='#fff';" onmouseout="this.style.background='transparent';this.style.color='#F2521B';">
            לקטלוג אביזרי הבטיחות
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6"/></svg>
          </a>` : ''}
        </div>
      </div>`;

    const galleryBlock = buildGallery(s.images, s.id, s.title);

    return `
      <section id="service-${s.id}" aria-label="${s.title}" style="padding:5rem 0;border-bottom:1px solid #f0f0f0;">
        <div style="max-width:1200px;margin:0 auto;padding:0 2rem;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;">
            ${isEven
              ? `<div>${textBlock}</div><div>${galleryBlock}</div>`
              : `<div>${galleryBlock}</div><div>${textBlock}</div>`
            }
          </div>
        </div>
      </section>`;
  }).join('');

  return `
    <!-- HERO -->
    <section id="main-content" aria-label="השירותים שלנו" style="background:#272424;padding:6rem 2rem 4rem;text-align:center;">
      <div style="max-width:800px;margin:0 auto;">
        <p style="color:#F2521B;font-size:0.9rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;" aria-hidden="true">השירותים שלנו</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(2rem,5vw,3.5rem);font-weight:900;color:#fff;margin:0 0 1.5rem;line-height:1.15;">
          פתרונות מקצועיים לכל<br>
          <span style="color:#F2521B;">צורכי הדרך והתשתית</span>
        </h1>
        <p style="color:rgba(255,255,255,0.7);font-size:1.1rem;line-height:1.75;margin:0 0 2.5rem;">
          א.ס הסדרי תנועה מציעה מגוון שירותים מקצועיים – מהסדרי תנועה ופקחים מוסמכים ועד לשילוט, צביעה ואביזרי בטיחות – הכל תחת קורת גג אחת.
        </p>
        <nav aria-label="ניווט מהיר לפי שירות" style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
          ${navPills}
        </nav>
      </div>
    </section>

    <!-- SERVICE BLOCKS -->
    ${serviceBlocks}

    <!-- CTA -->
    <section aria-label="צרו קשר" style="background:#F2521B;padding:5rem 2rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#fff;margin:0 0 1rem;line-height:1.2;">
          מחפשים שותף מקצועי לפרויקט?
        </h2>
        <p style="color:rgba(255,255,255,0.85);font-size:1.1rem;line-height:1.75;margin:0 0 2rem;">
          נשמח לשמוע על הפרויקט שלכם ולהציע פתרון מותאם. צרו קשר ונחזור אליכם בהקדם.
        </p>
        <a href="/contact.html"
           style="display:inline-block;background:#fff;color:#F2521B;padding:1rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:800;font-size:1.1rem;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 4px 20px rgba(0,0,0,0.15);"
           onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 30px rgba(0,0,0,0.2)'"
           onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.15)'">
          צרו קשר עכשיו
        </a>
      </div>
    </section>`;
}

export function initServicesPage(): void {
  const galleryCounts: Record<string, number> = {
    traffic: 1,
    marking: 6,
    inspector: 3,
    signage: 1,
    safety: 1,
    light: 4,
  };

  (window as any)._galleryIdx = (window as any)._galleryIdx || {};

  Object.keys(galleryCounts).forEach(id => {
    (window as any)._galleryIdx[id] = 0;
  });

  (window as any).galleryGoTo = (id: string, idx: number) => {
    const total = galleryCounts[id];
    if (!total || total <= 1) return;

    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;

    (window as any)._galleryIdx[id] = idx;

    for (let i = 0; i < total; i++) {
      const slide = document.getElementById(`slide-${id}-${i}`);
      if (slide) {
        slide.style.opacity = i === idx ? '1' : '0';
        slide.style.zIndex = i === idx ? '1' : '0';
      }
      const dot = document.getElementById(`dot-${id}-${i}`);
      if (dot) dot.style.background = i === idx ? '#F2521B' : 'rgba(255,255,255,0.5)';
    }

    const counter = document.getElementById(`gallery-counter-${id}`);
    if (counter) counter.textContent = `${idx + 1} / ${total}`;
  };

  // Auto-advance: respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    Object.entries(galleryCounts).forEach(([id, total]) => {
      if (total > 1) {
        setInterval(() => {
          const current = (window as any)._galleryIdx[id] || 0;
          (window as any).galleryGoTo(id, current + 1);
        }, 4000);
      }
    });
  }

  // Scroll to service section
  (window as any).scrollToService = (id: string) => {
    const el = document.getElementById(`service-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Highlight active pill on scroll
  const pills = document.querySelectorAll('.service-nav-pill');
  const sections = document.querySelectorAll('section[id^="service-"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('service-', '');
        pills.forEach(pill => {
          const pillEl = pill as HTMLButtonElement;
          if (pill.id === `pill-${id}`) {
            pillEl.classList.add('active-pill');
            pillEl.style.background = '#F2521B';
            pillEl.style.color = '#fff';
          } else {
            pillEl.classList.remove('active-pill');
            pillEl.style.background = 'transparent';
            pillEl.style.color = '#F2521B';
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}
