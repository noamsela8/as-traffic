// ─── helpers ────────────────────────────────────────────────────────────────

function sgGallery(id: string, images: string[]): string {
  if (images.length === 1) {
    return `<img src="${images[0]}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
  }
  const slides = images.map((src, i) => `
    <div id="sng-slide-${id}-${i}" style="position:absolute;inset:0;opacity:${i===0?1:0};z-index:${i===0?1:0};transition:opacity 0.35s;">
      <img src="${src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
    </div>`).join('');

  const dots = images.map((_, i) => `
    <button id="sng-dot-${id}-${i}" onclick="sngGoTo('${id}',${i})" style="width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;background:${i===0?'#F2521B':'rgba(255,255,255,0.55)'};" aria-label="הצג תמונה ${i+1}"></button>`).join('');

  const arrows = `
    <button onclick="event.stopPropagation();sngGoTo('${id}',(((window._sngIdx&&window._sngIdx['${id}'])||0)-1+${images.length})%${images.length})"
      style="position:absolute;top:50%;right:8px;transform:translateY(-50%);background:rgba(0,0,0,0.45);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;z-index:10;" aria-label="תמונה קודמת">›</button>
    <button onclick="event.stopPropagation();sngGoTo('${id}',(((window._sngIdx&&window._sngIdx['${id}'])||0)+1)%${images.length})"
      style="position:absolute;top:50%;left:8px;transform:translateY(-50%);background:rgba(0,0,0,0.45);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;z-index:10;" aria-label="תמונה הבאה">‹</button>`;

  return `
    <div style="position:relative;width:100%;height:100%;">
      ${slides}
      ${arrows}
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;gap:5px;z-index:10;">
        ${dots}
      </div>
    </div>`;
}

// ─── large category card ─────────────────────────────────────────────────────

interface CategoryCard {
  id: string;
  name: string;
  description: string;
  images: string[];
}

function renderCategoryCard(cat: CategoryCard): string {
  const galleryHtml = sgGallery(cat.id, cat.images);
  const mainImg = cat.images[0];
  const hasMultiple = cat.images.length > 1;
  const clickAttr = hasMultiple
    ? `onclick="openSignageLightbox(document.getElementById('sng-slide-${cat.id}-'+((window._sngIdx&&window._sngIdx['${cat.id}'])||0))?.querySelector('img')?.src||'${mainImg}','${cat.name}')"`
    : `onclick="openSignageLightbox('${mainImg}','${cat.name}')"`;

  return `
    <div role="article" aria-label="${cat.name}" style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);transition:transform 0.25s,box-shadow 0.25s;display:flex;flex-direction:column;"
      onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 14px 36px rgba(0,0,0,0.13)';"
      onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 16px rgba(0,0,0,0.08)';">
      <!-- gallery -->
      <div style="height:320px;overflow:hidden;position:relative;" ${clickAttr}>
        ${galleryHtml}
        <button type="button" aria-label="הצג תמונה מוגדלת של ${cat.name}"
          onclick="event.stopPropagation();openSignageLightbox('${cat.id}',${cat.images.length})"
          style="position:absolute;inset:0;z-index:5;background:transparent;border:none;cursor:zoom-in;width:100%;height:100%;outline:none;box-shadow:none;"
          onfocus="this.style.boxShadow='inset 0 0 0 3px #F2521B'"
          onblur="this.style.boxShadow='none'"></button>
      </div>
      <!-- content -->
      <div style="padding:1.5rem;display:flex;flex-direction:column;flex:1;">
        <h3 style="font-family:'Rubik',sans-serif;font-size:1.4rem;font-weight:900;color:#272424;margin:0 0 0.6rem;">${cat.name}</h3>
        <p style="color:#555;font-size:0.92rem;line-height:1.7;margin:0 0 1.25rem;flex:1;">${cat.description}</p>
        <a href="/contact.html"
          style="display:block;text-align:center;background:#F2521B;color:#fff;padding:0.7rem 1rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:1.2rem;transition:opacity 0.2s;margin-top:auto;"
          onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          לפרטים ומחיר
        </a>
      </div>
    </div>`;
}

// ─── small product card ───────────────────────────────────────────────────────

interface SmallProduct {
  id: string;
  name: string;
  description: string;
  images: string[];
}

function renderSmallCard(p: SmallProduct): string {
  const galleryHtml = sgGallery(p.id, p.images);
  const mainImg = p.images[0];
  const hasMultiple = p.images.length > 1;
  const clickAttr = hasMultiple
    ? `onclick="openSignageLightbox(document.getElementById('sng-slide-${p.id}-'+((window._sngIdx&&window._sngIdx['${p.id}'])||0))?.querySelector('img')?.src||'${mainImg}','${p.name}')"`
    : `onclick="openSignageLightbox('${mainImg}','${p.name}')"`;

  return `
    <div role="article" aria-label="${p.name}" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);transition:transform 0.25s,box-shadow 0.25s;display:flex;flex-direction:column;"
      onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 10px 28px rgba(0,0,0,0.11)';"
      onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.07)';">
      <!-- image -->
      <div style="height:200px;overflow:hidden;position:relative;" ${clickAttr}>
        ${galleryHtml}
        <button type="button" aria-label="הצג תמונה מוגדלת של ${p.name}"
          onclick="event.stopPropagation();openSignageLightbox('${p.id}',${p.images.length})"
          style="position:absolute;inset:0;z-index:5;background:transparent;border:none;cursor:zoom-in;width:100%;height:100%;outline:none;box-shadow:none;"
          onfocus="this.style.boxShadow='inset 0 0 0 3px #F2521B'"
          onblur="this.style.boxShadow='none'"></button>
      </div>
      <!-- content -->
      <div style="padding:1.1rem;display:flex;flex-direction:column;flex:1;">
        <h3 style="font-family:'Rubik',sans-serif;font-size:1rem;font-weight:800;color:#272424;margin:0 0 0.4rem;">${p.name}</h3>
        <p style="color:#666;font-size:0.85rem;line-height:1.6;margin:0 0 0.9rem;flex:1;">${p.description}</p>
        <a href="/contact.html"
          style="display:block;text-align:center;background:#272424;color:#fff;padding:0.55rem 1rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.82rem;transition:opacity 0.2s;margin-top:auto;"
          onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
          לפרטים ומחיר
        </a>
      </div>
    </div>`;
}

// ─── data ────────────────────────────────────────────────────────────────────

const categories: CategoryCard[] = [
  {
    id: 'signs',
    name: 'תמרורים',
    description: 'אנו מייצרים ומספקים את כלל סוגי התמרורים הישראליים, בהתאם ללוח התמרורים הרשמי של משרד התחבורה. אנו מציעים פתרון מקיף הכולל רכישה, התקנה והשכרה של תמרורים, בהתאמה לצורכי הפרויקט ולדרישות השטח. <br><br><a href="https://www.gov.il/he/Departments/policies/tamrurim_7924_01_18" target="_blank" rel="noopener" style="color:#F2521B;font-weight:700;text-decoration:underline;">לצפייה בלוח התמרורים הרשמי של משרד התחבורה ←</a>',
    images: [
      '/assets/images/catalog/signage/signs/signs-1.png',
      '/assets/images/catalog/signage/signs/signs-2.webp',
    ],
  },
  {
    id: 'boards',
    name: 'שלטים',
    description: 'אנו מתמחים בייצור ואספקת שלטים תקניים בהתאם לדרישות התקינה הישראלית, לצד שלטים בעיצוב אישי המותאמים לצורכי הלקוח. מגוון פתרונות שילוט לכל מטרה – אתרי עבודה, פרויקטי תשתיות, עסקים, חניונים, מוסדות ושטחים ציבוריים, במבחר גדלים ועיצובים. אנו מציעים פתרונות גמישים הכוללים רכישה, התקנה והשכרה, בהתאם לצורכי הפרויקט.',
    images: [
      '/assets/images/catalog/signage/boards/boards-1.webp',
      '/assets/images/catalog/signage/boards/boards-2.webp',
      '/assets/images/catalog/signage/boards/boards-3.webp',
    ],
  },
];

const smallProducts: SmallProduct[] = [
  {
    id: 'rubber-base',
    name: 'בסיס גומי להצבת תמרור/שלט',
    description: 'בסיס גומי כבד ויציב להצבת תמרורים ושלטים ללא קידוח — מתאים לשימוש זמני ולאירועים.',
    images: [
      '/assets/images/catalog/signage/rubber-base/rubber-base-1.webp',
      '/assets/images/catalog/signage/rubber-base/rubber-base-2.webp',
    ],
  },
  {
    id: 'tripod',
    name: 'חצובה לשלטים',
    description: 'חצובה מתכווננת להצבת שלטים וגוזרים בשטח — קלה לפריסה ומתאימה לכל תנאי שטח.',
    images: [
      '/assets/images/catalog/signage/tripod/tripod-1.webp',
      '/assets/images/catalog/signage/tripod/tripod-2.webp',
    ],
  },
];

// ─── main export ──────────────────────────────────────────────────────────────

export function createSignageCatalog(): string {
  const catCards = categories.map(c => renderCategoryCard(c)).join('');
  const smallCards = smallProducts.map(p => renderSmallCard(p)).join('');

  return `
    <!-- LIGHTBOX -->
    <div id="signage-lightbox" role="dialog" aria-modal="true" aria-label="תצוגת תמונה מוגדלת"
      onclick="closeSignageLightbox()"
      style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:9999;align-items:center;justify-content:center;padding:1rem;">
      <div style="position:relative;max-width:90vw;max-height:90vh;" onclick="event.stopPropagation()">
        <img id="signage-lightbox-img" src="" alt="" style="max-width:90vw;max-height:85vh;object-fit:contain;border-radius:8px;display:block;">
        <p id="signage-lightbox-caption" style="color:#fff;text-align:center;font-family:'Rubik',sans-serif;font-weight:700;font-size:1rem;margin:0.75rem 0 0;"></p>
        <!-- סגור -->
        <button onclick="closeSignageLightbox()" aria-label="סגור תצוגה מוגדלת"
          style="position:absolute;top:-1rem;left:-1rem;background:#F2521B;color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;"><span aria-hidden="true">✕</span></button>
        <!-- חץ ימין — תמונה קודמת -->
        <button id="slb-prev" onclick="slbNav(-1)" aria-label="תמונה קודמת"
          style="position:absolute;top:50%;right:-3rem;transform:translateY(-50%);background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">›</button>
        <!-- חץ שמאל — תמונה הבאה -->
        <button id="slb-next" onclick="slbNav(1)" aria-label="תמונה הבאה"
          style="position:absolute;top:50%;left:-3rem;transform:translateY(-50%);background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">‹</button>
        <!-- מונה -->
        <p id="slb-counter" style="color:rgba(255,255,255,0.8);text-align:center;font-size:0.8rem;margin:0.3rem 0 0;"></p>
      </div>
    </div>

    <!-- HERO -->
    <section id="main-content" role="main" style="background:#272424;padding:5rem 2rem 3.5rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <a href="/products.html" style="color:rgba(255,255,255,0.8);font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:1.5rem;">
          <span aria-hidden="true">←</span> חזרה למוצרים
        </a>
        <p style="color:#F2521B;font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 0.75rem;">קטלוג מוצרים</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin:0 0 1rem;line-height:1.2;">
          שילוט ותמרור
        </h1>
        <p style="color:rgba(255,255,255,0.8);font-size:1rem;line-height:1.7;margin:0;">
          תמרורים תקניים, שלטי ענק ושילוט מותאם אישית — ייצור והתקנה מקצועית בפריסה ארצית.
        </p>
      </div>
    </section>

    <!-- CATEGORY CARDS (2 large) -->
    <section style="background:#f9f9f9;padding:3rem 2rem 2rem;">
      <div style="max-width:1100px;margin:0 auto;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.75rem;">
          ${catCards}
        </div>
      </div>
    </section>

    <!-- SMALL PRODUCTS (accessories) -->
    <section style="background:#f9f9f9;padding:0.5rem 2rem 5rem;">
      <div style="max-width:1100px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1.25rem;padding-top:1rem;border-top:1px solid #e5e5e5;">אביזרי שילוט</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.25rem;">
          ${smallCards}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="background:#272424;padding:4rem 2rem;text-align:center;">
      <div style="max-width:600px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.4rem,3vw,2rem);font-weight:900;color:#fff;margin:0 0 0.75rem;">
          צריכים שילוט מותאם אישית?
        </h2>
        <p style="color:rgba(255,255,255,0.8);margin:0 0 1.5rem;">
          נתכנן ונייצר עבורכם פתרון שילוט מקצועי ומותאם לצרכים שלכם.
        </p>
        <a href="/contact.html"
          style="display:inline-block;background:#F2521B;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:1.2rem;">
          צרו קשר
        </a>
      </div>
    </section>`;
}

export function initSignageCatalog(): void {
  (window as any)._sngIdx = {};

  const galleryCounts: Record<string, number> = {
    'signs': 2,
    'boards': 3,
    'rubber-base': 2,
    'tripod': 2,
  };

  (window as any).sngGoTo = (id: string, idx: number) => {
    const count = galleryCounts[id] || 1;
    const safeIdx = ((idx % count) + count) % count;
    if (!(window as any)._sngIdx) (window as any)._sngIdx = {};
    (window as any)._sngIdx[id] = safeIdx;

    for (let i = 0; i < count; i++) {
      const slide = document.getElementById(`sng-slide-${id}-${i}`);
      const dot = document.getElementById(`sng-dot-${id}-${i}`);
      if (slide) {
        slide.style.opacity = i === safeIdx ? '1' : '0';
        slide.style.zIndex = i === safeIdx ? '1' : '0';
      }
      if (dot) {
        dot.style.background = i === safeIdx ? '#F2521B' : 'rgba(255,255,255,0.55)';
      }
    }
  };

  // lightbox state
  (window as any)._slbId = '';
  (window as any)._slbTotal = 0;
  (window as any)._slbCurIdx = 0;

  function slbShow(idx: number) {
    const id = (window as any)._slbId;
    const total = (window as any)._slbTotal;
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    (window as any)._slbCurIdx = idx;
    const src = document.getElementById(`sng-slide-${id}-${idx}`)?.querySelector('img')?.getAttribute('src')
      || (document.querySelector(`button[onclick*="openSignageLightbox('${id}'"]`) as HTMLElement)?.closest('[role="article"]')?.querySelector('img')?.getAttribute('src') || '';
    const img = document.getElementById('signage-lightbox-img') as HTMLImageElement;
    if (img && src) img.src = src;
    const counter = document.getElementById('slb-counter');
    if (counter) counter.textContent = total > 1 ? `${idx + 1} / ${total}` : '';
    const prev = document.getElementById('slb-prev') as HTMLElement;
    const next = document.getElementById('slb-next') as HTMLElement;
    if (prev) prev.style.display = total > 1 ? 'flex' : 'none';
    if (next) next.style.display = total > 1 ? 'flex' : 'none';
  }

  (window as any).slbNav = (dir: number) => {
    slbShow((window as any)._slbCurIdx + dir);
  };

  (window as any).openSignageLightbox = (id: string, total: number) => {
    const lb = document.getElementById('signage-lightbox') as HTMLElement;
    const cap = document.getElementById('signage-lightbox-caption');
    if (!lb) return;
    const btn = document.querySelector(`button[onclick*="openSignageLightbox('${id}'"]`) as HTMLElement;
    const productName = btn?.getAttribute('aria-label')?.replace('הצג תמונה מוגדלת של ', '') || '';
    if (cap) cap.textContent = productName;
    (window as any)._slbId = id;
    (window as any)._slbTotal = total;
    const curIdx = (window as any)._sngIdx?.[id] || 0;
    slbShow(curIdx);
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => (document.querySelector('#signage-lightbox button[aria-label="סגור תצוגה מוגדלת"]') as HTMLElement)?.focus(), 50);
  };

  (window as any).closeSignageLightbox = () => {
    const lb = document.getElementById('signage-lightbox');
    if (lb) lb.style.display = 'none';
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const lb = document.getElementById('signage-lightbox');
    if (!lb || lb.style.display === 'none') return;
    if (e.key === 'Escape') (window as any).closeSignageLightbox();
    if (e.key === 'ArrowLeft') (window as any).slbNav(1);
    if (e.key === 'ArrowRight') (window as any).slbNav(-1);
  });
}
