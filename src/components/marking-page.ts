const topics = [
  {
    id: 'parking',
    title: 'צביעת חניונים',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>`,
    description: `חברתנו מתמחה בצביעה וסימון של חניונים פרטיים, ציבוריים ומסחריים, תוך הקפדה על דיוק, נראות גבוהה וניצול יעיל של שטח החניה. השירות כולל סימון תאי חניה, חניות נכים, עמדות טעינה לרכב חשמלי, חצי הכוונה, מספור וסימוני בטיחות. העבודות מבוצעות באמצעות חומרי צבע איכותיים ועמידים, בהתאמה לתנאי השטח ולצורכי הלקוח.`,
    images: [
      '/assets/images/services/road-marking.webp',
      '/assets/images/services/road-marking-1.webp',
      '/assets/images/services/roadmarking-2.webp',
      '/assets/images/services/marking/parking/parking-1.webp',
      '/assets/images/services/marking/parking/parking-2.webp',
      '/assets/images/services/marking/parking/parking-3.webp',
      '/assets/images/services/marking/parking/parking-4.webp',
    ],
  },
  {
    id: 'cycling',
    title: 'צביעת שבילי אופניים',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="5" cy="16" r="3"/><circle cx="19" cy="16" r="3"/><path d="M5 16l3-8h6l2 4H5"/><path d="M11 8l2 4"/></svg>`,
    description: `אנו מבצעים עבודות צביעה וסימון של שבילי אופניים במרחב העירוני והבין־עירוני, תוך הקפדה על בטיחות הרוכבים והפרדה ברורה בין משתמשי הדרך. העבודות כוללות צביעת משטחי רכיבה, סימון נתיבים, סמלי אופניים והכוונות דרך, תוך שימוש בחומרי צבע ייעודיים בעלי תכונות מונעות החלקה, המותאמים לתנאי השטח ולדרישות הפרויקט.`,
    images: [
      '/assets/images/services/road-marking-4.webp',
      '/assets/images/services/road-marking-5.webp',
      '/assets/images/services/marking/cycling/cycling-1.webp',
      '/assets/images/services/marking/cycling/cycling-2.webp',
      '/assets/images/services/marking/cycling/cycling-3.webp',
      '/assets/images/services/marking/cycling/cycling-4.webp',
    ],
  },
  {
    id: 'roads',
    title: 'צביעת כבישים, מדרכות ואתרי עבודה',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 17l3-10h12l3 10"/><path d="M12 7v10M8 17l1-4M16 17l-1-4"/></svg>`,
    description: `חברתנו מספקת פתרונות צביעה וסימון למגוון תשתיות תחבורה, לרבות כבישים, מדרכות ואתרי עבודה. השירות כולל סימון נתיבי נסיעה, מעברי חצייה, חצי הכוונה, אבני שפה, שטחי הפרדה וסימוני בטיחות זמניים וקבועים. העבודות מבוצעות תוך הקפדה על דיוק, עמידות ונראות גבוהה, בהתאם לתוכניות העבודה ולתקנים הרלוונטיים.`,
    images: [
      '/assets/images/services/road-marking-3.webp',
      '/assets/images/services/marking/roads/road-1.webp',
      '/assets/images/services/marking/roads/road-2.webp',
      '/assets/images/services/marking/roads/road-3.webp',
      '/assets/images/services/marking/roads/road-4.webp',
      '/assets/images/services/marking/roads/road-5.webp',
    ],
  },
  {
    id: 'moto',
    title: 'צביעת מגרשי טסטים לאופנועים',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3V11l4-5h5l2 5h5v4h-2"/><path d="M9 6l2 5"/></svg>`,
    description: `אנו מתמחים בסימון וצביעה של מגרשי מבחני נהיגה לאופנועים, תוך הקפדה על דיוק במידות, במרווחים ובתוואי הסימונים הנדרשים. השירות כולל סימון מסלולי רכיבה, קווי גבול, אזורי תמרון ותרגילי שליטה, בהתאם לתוכניות ולדרישות המקצועיות של המגרש. הביצוע נעשה תוך שימוש בחומרי צבע איכותיים, להבטחת סימון ברור, אחיד ועמיד לאורך זמן.`,
    images: [
      '/assets/images/services/marking/moto/moto-1.webp',
      '/assets/images/services/marking/moto/moto-2.webp',
      '/assets/images/services/marking/moto/moto-3.webp',
      '/assets/images/services/marking/moto/moto-4.webp',
    ],
  },
  {
    id: 'removal',
    title: 'מחיקה והסרת צבע',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 5H9l-7 7 7 7h11a2 2 0 002-2V7a2 2 0 00-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,
    description: `חברתנו מספקת שירותי מחיקה והסרה של סימוני צבע קיימים מכבישים, חניונים ומשטחי אספלט. באמצעות ציוד קרצוף מתקדם, אנו מבצעים הסרה מדויקת ויסודית של סימונים ישנים או כאלה שאינם נדרשים עוד, תוך שמירה מרבית על שלמות התשתית הקיימת. השירות מאפשר חידוש סימוני הדרך והתאמתם להסדרי תנועה ולתוכניות עבודה מעודכנות.`,
    images: [
      '/assets/images/services/marking/removal/removal-1.webp',
    ],
  },
];

export function createMarkingPage(): string {
  // Nav pills
  const pills = topics.map(t =>
    `<button
      onclick="scrollToTopic('${t.id}')"
      id="mpill-${t.id}"
      aria-label="עבור לנושא: ${t.title}"
      style="white-space:nowrap;padding:0.5rem 1.25rem;border-radius:9999px;font-size:0.875rem;font-weight:600;transition:all 0.2s;border:2px solid #F2521B;color:#F2521B;background:transparent;cursor:pointer;font-family:'Rubik',sans-serif;"
      onmouseover="if(!this.classList.contains('active-mpill')){this.style.background='#F2521B';this.style.color='#fff';}"
      onmouseout="if(!this.classList.contains('active-mpill')){this.style.background='transparent';this.style.color='#F2521B';}"
    >${t.title}</button>`
  ).join('');

  // Gallery builder
  const galleryCounts: Record<string, number> = {};
  topics.forEach(t => { galleryCounts[t.id] = t.images.length; });

  const buildGallery = (images: string[], id: string, topicTitle: string) => {
    if (images.length === 1) {
      return `
        <div style="border-radius:16px;overflow:hidden;height:400px;">
          <img src="${images[0]}" alt="" aria-hidden="true" style="width:100%;height:100%;object-fit:cover;display:block;" />
        </div>`;
    }

    const total = images.length;

    const slides = images.map((src, idx) =>
      `<div id="mslide-${id}-${idx}" style="position:absolute;inset:0;opacity:${idx === 0 ? '1' : '0'};z-index:${idx === 0 ? '1' : '0'};transition:opacity 0.5s ease;pointer-events:none;" aria-hidden="true">
        <img src="${src}" alt="" aria-hidden="true" style="width:100%;height:100%;object-fit:cover;display:block;" />
      </div>`
    ).join('');

    const dots = images.map((_, idx) =>
      `<button onclick="markingGalleryGoTo('${id}',${idx})" id="mdot-${id}-${idx}"
        aria-label="הצג תמונה ${idx + 1} מתוך ${total} — ${topicTitle}"
        style="width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:all 0.3s;background:${idx === 0 ? '#F2521B' : 'rgba(255,255,255,0.5)'};"
      ></button>`
    ).join('');

    return `
      <div style="border-radius:16px;overflow:hidden;position:relative;height:400px;" role="region" aria-label="גלריית תמונות — ${topicTitle}">
        ${slides}
        <button onclick="markingGalleryGoTo('${id}', (window._markingIdx['${id}']||0) - 1)"
          aria-label="תמונה קודמת — ${topicTitle}"
          style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.45);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);z-index:10;"
          onmouseover="this.style.background='rgba(242,82,27,0.85)'" onmouseout="this.style.background='rgba(0,0,0,0.45)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onclick="markingGalleryGoTo('${id}', (window._markingIdx['${id}']||0) + 1)"
          aria-label="תמונה הבאה — ${topicTitle}"
          style="position:absolute;right:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.45);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);z-index:10;"
          onmouseover="this.style.background='rgba(242,82,27,0.85)'" onmouseout="this.style.background='rgba(0,0,0,0.45)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);color:white;font-size:0.75rem;font-family:'Rubik',sans-serif;padding:0.2rem 0.6rem;border-radius:20px;backdrop-filter:blur(4px);z-index:10;" id="mgallery-counter-${id}" aria-live="polite" aria-atomic="true">
          1 / ${total}
        </div>
        <div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:10;" role="group" aria-label="ניווט בין תמונות — ${topicTitle}">
          ${dots}
        </div>
      </div>`;
  };

  // Topic sections (alternating layout)
  const topicSections = topics.map((t, i) => {
    const isEven = i % 2 === 0;

    const textBlock = `
      <div style="display:flex;flex-direction:column;gap:1.5rem;justify-content:center;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="width:56px;height:56px;background:rgba(242,82,27,0.1);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;" aria-hidden="true">
            ${t.icon}
          </div>
          <div>
            <p style="color:#F2521B;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 0.2rem;" aria-hidden="true">${String(i + 1).padStart(2,'0')}</p>
            <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.4rem,2.5vw,1.9rem);font-weight:800;color:#272424;margin:0;line-height:1.2;">${t.title}</h2>
          </div>
        </div>
        <p style="color:#555;line-height:1.8;font-size:1rem;margin:0;">${t.description}</p>
        <div>
          <a href="/contact.html"
            style="display:inline-block;background:#F2521B;color:#fff;padding:0.7rem 1.75rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.9rem;transition:opacity 0.2s;"
            onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
            לפרטים ויצירת קשר
          </a>
        </div>
      </div>`;

    const galleryBlock = buildGallery(t.images, t.id, t.title);

    return `
      <section id="topic-${t.id}" aria-label="${t.title}" style="padding:5rem 0;border-bottom:1px solid #f0f0f0;">
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
    <section id="main-content" aria-label="צביעה וסימון כבישים" style="background:#272424;padding:6rem 2rem 4rem;text-align:center;">
      <div style="max-width:800px;margin:0 auto;">
        <a href="/services.html" style="display:inline-flex;align-items:center;gap:0.5rem;color:rgba(255,255,255,0.5);font-size:0.85rem;text-decoration:none;margin-bottom:1.5rem;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M9 18l6-6-6-6"/></svg>
          חזרה לשירותים
        </a>
        <p style="color:#F2521B;font-size:0.9rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:1rem;" aria-hidden="true">צביעה וסימון כבישים</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(2rem,5vw,3.2rem);font-weight:900;color:#fff;margin:0 0 1.5rem;line-height:1.15;">
          גימור ברמה הגבוהה ביותר<br>
          <span style="color:#F2521B;">לכל סוג משטח ופרויקט</span>
        </h1>
        <p style="color:rgba(255,255,255,0.7);font-size:1.05rem;line-height:1.75;margin:0 0 2.5rem;">
          מחניונים ושבילי אופניים ועד כבישים ראשיים ומגרשי טסטים — אנו מספקים פתרונות צביעה וסימון מדויקים, עמידים ומותאמים לכל פרויקט.
        </p>
        <nav aria-label="ניווט מהיר לפי נושא" style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
          ${pills}
        </nav>
      </div>
    </section>

    <!-- TOPIC SECTIONS -->
    ${topicSections}

    <!-- CTA -->
    <section aria-label="צרו קשר לשירות צביעה וסימון" style="background:#F2521B;padding:5rem 2rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;color:#fff;margin:0 0 1rem;line-height:1.2;">
          מחפשים שירות צביעה וסימון?
        </h2>
        <p style="color:rgba(255,255,255,0.85);font-size:1.05rem;line-height:1.75;margin:0 0 2rem;">
          צרו קשר ונשמח להציע הצעת מחיר מותאמת לפרויקט שלכם.
        </p>
        <a href="/contact.html"
           style="display:inline-block;background:#fff;color:#F2521B;padding:1rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:800;font-size:1.05rem;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 4px 20px rgba(0,0,0,0.15);"
           onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 30px rgba(0,0,0,0.2)'"
           onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.15)'">
          צרו קשר עכשיו
        </a>
      </div>
    </section>`;
}

export function initMarkingPage(): void {
  const galleryCounts: Record<string, number> = {
    parking: 7,
    cycling: 6,
    roads: 6,
    moto: 4,
    removal: 1,
  };

  (window as any)._markingIdx = {};
  Object.keys(galleryCounts).forEach(id => {
    (window as any)._markingIdx[id] = 0;
  });

  (window as any).markingGalleryGoTo = (id: string, idx: number) => {
    const total = galleryCounts[id];
    if (!total || total <= 1) return;
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;

    (window as any)._markingIdx[id] = idx;

    for (let i = 0; i < total; i++) {
      const slide = document.getElementById(`mslide-${id}-${i}`);
      if (slide) {
        slide.style.opacity = i === idx ? '1' : '0';
        slide.style.zIndex = i === idx ? '1' : '0';
      }
      const dot = document.getElementById(`mdot-${id}-${i}`);
      if (dot) dot.style.background = i === idx ? '#F2521B' : 'rgba(255,255,255,0.5)';
    }

    const counter = document.getElementById(`mgallery-counter-${id}`);
    if (counter) counter.textContent = `${idx + 1} / ${total}`;
  };

  // Auto-advance: respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    Object.entries(galleryCounts).forEach(([id, total]) => {
      if (total > 1) {
        setInterval(() => {
          const current = (window as any)._markingIdx[id] || 0;
          (window as any).markingGalleryGoTo(id, current + 1);
        }, 4000);
      }
    });
  }

  // Scroll to topic
  (window as any).scrollToTopic = (id: string) => {
    const el = document.getElementById(`topic-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Active pill on scroll
  const pills = document.querySelectorAll('[id^="mpill-"]');
  const sections = document.querySelectorAll('section[id^="topic-"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('topic-', '');
        pills.forEach(pill => {
          const el = pill as HTMLButtonElement;
          if (pill.id === `mpill-${id}`) {
            el.classList.add('active-mpill');
            el.style.background = '#F2521B';
            el.style.color = '#fff';
          } else {
            el.classList.remove('active-mpill');
            el.style.background = 'transparent';
            el.style.color = '#F2521B';
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}
