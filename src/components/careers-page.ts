interface Job {
  id: string;
  title: string;
  type: string;
  area: string;
  hours: string;
  summary: string;
  description: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 'traffic-inspector',
    title: 'פקח תנועה',
    type: 'משרה מלאה / חלקית',
    area: 'אזור המרכז',
    hours: 'יום / לילה',
    summary: 'מפקח ומכווין תנועה באתרי עבודה במשמרות יום ולילה. משרה זו פונה לנשים וגברים כאחד.',
    description: [
      'מפקח ומכווין תנועה באתרי עבודה',
      'משמרות יום / לילה',
      'משרה זו פונה לנשים וגברים כאחד',
    ],
    requirements: [
      'ללא עבר פלילי',
      'ללא שלילה',
      'הסמכה בתוקף',
      'במידה ואין הסמכה בתוקף — נכונות וזמינות להתחיל קורס הכשרה מקצועית',
    ],
  },
  {
    id: 'truck-driver',
    title: 'נהג C1 / C',
    type: 'משרה מלאה / חלקית',
    area: 'אזור המרכז',
    hours: 'יום / לילה',
    summary: 'נהג משאית לצורך משא ושינוע ציוד והובלת צוות התקנות בשטח. משמרות יום/לילה.',
    description: [
      'נהג משאית לצורך משא ושינוע ציוד',
      'הובלת צוות התקנות בשטח',
      'משמרות יום / לילה',
      'משרה זו פונה לגברים ונשים כאחד',
    ],
    requirements: [
      'ותק רישיון שנתיים ומעלה',
      'גיל 24+',
      'ללא שלילה',
    ],
  },
  {
    id: 'field-installer',
    title: 'מתקין שטח',
    type: 'משרה מלאה / חלקית',
    area: 'אזור המרכז',
    hours: 'יום / לילה',
    summary: 'הקמה ופירוק הסדרי תנועה, סיוע בעבודות צביעה וסימון. עבודה דינמית בין אתרים שונים.',
    description: [
      'הקמה ופירוק של הסדרי תנועה — הצבה ופינוי של אמצעי בטיחות, גדרות, תמרורים ושלטים באתרי עבודה בהתאם לתוכניות התנועה',
      'סיוע בעבודות צביעה וסימון — עזרה בהכנת השטח וסימון דרך, כבישים, שבילי אופניים וחניונים',
      'שמירה על כללי בטיחות — ביצוע העבודה תוך הקפדה יתרה על נהלי הבטיחות האישיים ושל האתר',
      'ניידות ותפעול — עבודה דינמית ומעבר בין אתרים שונים במהלך המשמרת',
    ],
    requirements: [
      'נכונות לעבודה פיזית מתונה בשטח ובתנאי מזג אוויר משתנים',
      'נכונות לעבודה במשמרות גמישות (יום ולילה)',
      'רישיון נהיגה בתוקף (רישיון ג׳ — יתרון משמעותי)',
      'רצינות, אחריות אישית ויכולת עבודה בצוות',
      'רקע קודם מעולם התשתיות, הבנייה או הסדרי התנועה — יתרון, אך תינתן הכשרה למתאימים',
    ],
  },
  {
    id: 'operations-manager',
    title: 'מנהל/ת מערך תפעול',
    type: 'משרה מלאה',
    area: 'בית עוזיאל',
    hours: 'שעות משרד',
    summary: 'ניהול ושיבוץ צוותי שטח, תיאום מול לקוחות וקבלנים, ניהול לוגיסטי ואספקה בזמן אמת.',
    description: [
      'ניהול ושיבוץ צוותים — ניהול, תזמון ושיבוץ של צוותי השטח ופקחי התנועה באופן שוטף ומרחוק',
      'תיאום וקשר מול לקוחות — ניהול הקשר הישיר מול קבלנים, מנהלי פרויקטים ונציגי רשויות, החל מקבלת ההזמנה ועד סיום העבודה',
      'ניהול לוגיסטי ואספקה — שליחה, ניתוב ותיאום של ציוד ואמצעי בטיחות לכל אתר בהתאם לצורכי הפרויקט',
      'פתרון בעיות בזמן אמת — מתן מענה מהיר, יעיל ויצירתי לשינויים, אילוצים או הקפצות של צוותים',
      'מעקב ובקרה משרדית — פיקוח מרחוק על התקדמות העבודות בשטח, עמידה בזמנים ודיווחים שוטפים',
    ],
    requirements: [
      'יכולת עבודה תחת לחץ וניהול מספר משימות במקביל',
      'יחסי אנוש טובים, תודעת שירות גבוהה ואסרטיביות',
      'יכולת ארגון, סדר ולוגיסטיקה ברמה גבוהה',
      'היכרות עם עולם הבנייה / תשתיות / הסדרי תנועה — יתרון',
    ],
  },
];

// SVG icons inline — all decorative, wrapped in aria-hidden spans
const icons = {
  type: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-2 4h12l-2-4z"/></svg>`,
  area: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  hours: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chevron: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="6 9 12 15 18 9"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2521B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>`,
  dot: `<svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" focusable="false"><circle cx="4" cy="4" r="4" fill="#F2521B"/></svg>`,
};

function renderJob(job: Job, index: number): string {
  const descItems = job.description.map(d =>
    `<li style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.4rem 0;">
      <span style="margin-top:0.35rem;flex-shrink:0;" aria-hidden="true">${icons.dot}</span>
      <span style="color:#444;line-height:1.65;font-size:0.95rem;">${d}</span>
    </li>`
  ).join('');

  const reqItems = job.requirements.map(r =>
    `<li style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.35rem 0;">
      <span style="margin-top:0.15rem;flex-shrink:0;" aria-hidden="true">${icons.check}</span>
      <span style="color:#444;line-height:1.6;font-size:0.95rem;">${r}</span>
    </li>`
  ).join('');

  return `
    <div class="job-card" id="job-${job.id}"
      style="background:#fff;border-radius:14px;box-shadow:0 2px 16px rgba(0,0,0,0.07);overflow:hidden;transition:box-shadow 0.3s;">

      <!-- כותרת הכרטיס — לחיצה לפתיחה -->
      <button
        onclick="toggleJob('${job.id}')"
        aria-expanded="false"
        aria-controls="body-${job.id}"
        style="width:100%;text-align:right;background:none;border:none;cursor:pointer;padding:0;">
        <div style="padding:1.75rem 2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;">
          <!-- צד ימין: מספר + כותרת + תגיות -->
          <div style="display:flex;align-items:flex-start;gap:1.25rem;flex:1;min-width:0;">
            <span style="background:#F2521B;color:#fff;font-size:0.8rem;font-weight:800;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.15rem;" aria-hidden="true">${String(index + 1).padStart(2,'0')}</span>
            <div style="min-width:0;">
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.25rem;font-weight:800;color:#272424;margin:0 0 0.75rem;text-align:right;">${job.title}</h3>
              <div style="display:flex;flex-wrap:wrap;gap:1.25rem;">
                <span style="display:flex;align-items:center;gap:0.4rem;color:#666;font-size:0.85rem;">
                  <span aria-hidden="true" style="color:#F2521B;">${icons.type}</span>${job.type}
                </span>
                <span style="display:flex;align-items:center;gap:0.4rem;color:#666;font-size:0.85rem;">
                  <span aria-hidden="true" style="color:#F2521B;">${icons.area}</span>${job.area}
                </span>
                <span style="display:flex;align-items:center;gap:0.4rem;color:#666;font-size:0.85rem;">
                  <span aria-hidden="true" style="color:#F2521B;">${icons.hours}</span>שעות עבודה: ${job.hours}
                </span>
              </div>
            </div>
          </div>
          <!-- חץ -->
          <span id="chevron-${job.id}" style="color:#F2521B;flex-shrink:0;transition:transform 0.3s;" aria-hidden="true">${icons.chevron}</span>
        </div>
      </button>

      <!-- תוכן מורחב -->
      <div id="body-${job.id}" role="region" aria-label="פרטי תפקיד: ${job.title}" style="display:none;border-top:1px solid #f0f0f0;">
        <div style="padding:1.75rem 2rem 2rem;">

          <!-- תיאור התפקיד -->
          <div style="margin-bottom:1.5rem;">
            <h4 style="font-family:'Rubik',sans-serif;font-size:0.8rem;font-weight:700;color:#F2521B;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 0.75rem;">תיאור התפקיד</h4>
            <ul style="list-style:none;padding:0;margin:0;">
              ${descItems}
            </ul>
          </div>

          <!-- דרישות -->
          <div style="margin-bottom:1.75rem;">
            <h4 style="font-family:'Rubik',sans-serif;font-size:0.8rem;font-weight:700;color:#F2521B;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 0.75rem;">דרישות</h4>
            <ul style="list-style:none;padding:0;margin:0;">
              ${reqItems}
            </ul>
          </div>

          <!-- כפתור שליחת קורות חיים -->
          <a href="mailto:info@as-traffic.co.il?subject=מועמדות לתפקיד: ${job.title}"
            aria-label="שלחו קורות חיים לתפקיד ${job.title}"
            style="display:inline-block;background:#F2521B;color:#fff;padding:0.75rem 2rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:0.95rem;transition:opacity 0.2s;"
            onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
            שלחו קורות חיים
          </a>
        </div>
      </div>
    </div>`;
}

export function createCareersPage(): string {
  const jobCards = jobs.map((job, i) => renderJob(job, i)).join('');

  return `
    <!-- HERO -->
    <section id="main-content" role="main" aria-label="קריירה — הצטרפו לצוות" style="background:#272424;padding:6rem 2rem 4rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <p style="color:#F2521B;font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 1rem;" aria-hidden="true">קריירה</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(2rem,5vw,3.2rem);font-weight:900;color:#fff;margin:0 0 1.25rem;line-height:1.2;">
          מחפשים להצטרף<br>
          <span style="color:#F2521B;">לצוות שלנו?</span>
        </h1>
        <p style="color:rgba(255,255,255,0.65);font-size:1.05rem;line-height:1.75;margin:0;">
          אנחנו תמיד מחפשים אנשים מקצועיים, רציניים ומוכנים לשטח. הצטרפו לצוות של א.ס הסדרי תנועה.
        </p>
      </div>
    </section>

    <!-- JOBS -->
    <section aria-label="משרות פתוחות" style="background:#f7f7f7;padding:4rem 2rem 5rem;">
      <div style="max-width:860px;margin:0 auto;">

        <!-- כותרת קטע -->
        <div style="margin-bottom:2.5rem;">
          <h2 style="font-family:'Rubik',sans-serif;font-size:1.5rem;font-weight:800;color:#272424;margin:0 0 0.4rem;">
            משרות פתוחות
          </h2>
          <p style="color:#888;font-size:0.9rem;margin:0;">לחצו על משרה לפרטים נוספים</p>
        </div>

        <!-- רשימת משרות -->
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          ${jobCards}
        </div>
      </div>
    </section>

    <!-- CTA — לא מצאתם? -->
    <section aria-label="הגשת מועמדות כללית" style="background:#fff;padding:4rem 2rem;text-align:center;border-top:1px solid #eee;">
      <div style="max-width:600px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.5rem;font-weight:800;color:#272424;margin:0 0 0.75rem;">
          לא מצאתם משרה מתאימה?
        </h2>
        <p style="color:#777;margin:0 0 1.5rem;line-height:1.7;">
          שלחו לנו קורות חיים בכל מקרה — נשמח להכיר ולחזור אליכם כשתיפתח הזדמנות מתאימה.
        </p>
        <a href="mailto:info@as-traffic.co.il?subject=הגשת מועמדות כללית"
          aria-label="שלחו קורות חיים — הגשת מועמדות כללית"
          style="display:inline-block;background:#272424;color:#fff;padding:0.85rem 2.25rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:1rem;transition:opacity 0.2s;"
          onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
          שלחו קורות חיים
        </a>
      </div>
    </section>
  `;
}

export function initCareersPage(): void {
  (window as any).toggleJob = (id: string) => {
    const body = document.getElementById(`body-${id}`);
    const chevron = document.getElementById(`chevron-${id}`);
    const card = document.getElementById(`job-${id}`);
    const button = card?.querySelector('button[aria-controls]') as HTMLButtonElement | null;
    if (!body || !chevron || !card) return;

    const isOpen = body.style.display !== 'none';

    if (isOpen) {
      body.style.display = 'none';
      chevron.style.transform = 'rotate(0deg)';
      card.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
      button?.setAttribute('aria-expanded', 'false');
    } else {
      body.style.display = 'block';
      chevron.style.transform = 'rotate(180deg)';
      card.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
      button?.setAttribute('aria-expanded', 'true');
    }
  };
}
