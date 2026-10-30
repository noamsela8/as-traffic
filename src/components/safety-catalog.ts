interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  images: string[];  // נתיבים לתמונות
}

const safetyProducts: Product[] = [
  {
    id: 'cones',
    name: 'קונוסים',
    description: 'קונוסים לתיחום אזורי עבודה ונתיבי תנועה. עמידים בתנאי שטח קשים, זמינים במגוון גדלים.',
    tags: ['סימון','הכוונה','תיחום'],
    images: [
      '/assets/images/catalog/safety/cones/cones-1.webp',
      '/assets/images/catalog/safety/cones/cones-2.webp',
    ],
  },
  {
    id: 'barriers',
    name: 'עמודי מחסום',
    description: 'עמודי מחסום מתכתיים לתיחום מתחמים, כניסות וחניונים. מספקים הפרדה ברורה בין אזורי תנועה להולכי רגל, ומותאמים לעמידה בתנאי שטח קשים לאורך זמן.',
    tags: ['הפרדה','תיחום','אתרי עבודה'],
    images: [
      '/assets/images/catalog/safety/barriers/barriers-1.webp',
      '/assets/images/catalog/safety/barriers/barriers-2.webp',
      '/assets/images/catalog/safety/barriers/barriers-3.webp',
      '/assets/images/catalog/safety/barriers/barriers-4.webp',
      '/assets/images/catalog/safety/barriers/barriers-5.webp',
    ],
  },
  {
    id: 'barriers-base',
    name: 'חבקים לעמודי מחסום',
    description: 'חבקים מתכתיים לחיבור ויצוב עמודי מחסום. מאפשרים הרכבה מהירה ויציבות מרבית גם בתנאי עומס.',
    tags: ['חיבור','עמודי מחסום','מתכת'],
    images: [
      '/assets/images/catalog/safety/barriers-base/barriers-base-1.webp',
      '/assets/images/catalog/safety/barriers-base/barriers-base-2.webp',
    ],
  },
  {
    id: 'plastic-fence',
    name: 'גדר פלסטיק',
    description: 'גדרות פלסטיק קלות ועמידות לתיחום שטחים, הפרדת אזורים ואבטחת אתרי עבודה. קלות להרכבה ולפירוק.',
    tags: ['תיחום','פלסטיק','אתרי עבודה'],
    images: ['/assets/images/catalog/safety/plastic-fence.webp'],
  },
  {
    id: 'seperation-fence',
    name: 'גדר הפרדה',
    description: 'גדרות הפרדה ניידות לתיחום ואבטחת אתרי עבודה, אירועים ושטחים ציבוריים. חיבור מהיר בין יחידות לקו רציף.',
    tags: ['הפרדה','תיחום','ניידות'],
    images: [
      '/assets/images/catalog/safety/seperation-fence/separation-fence-1.webp',
      '/assets/images/catalog/safety/seperation-fence/separation-fence-2.webp',
    ],
  },
  {
    id: 'fence-base',
    name: 'בסיס גומי לגדר הפרדה',
    description: 'בסיסי גומי כבדים לייצוב גדרות הפרדה על משטחים חלקים. מונעים הפלה ומאפשרים עמידה יציבה ללא עיגון לקרקע.',
    tags: ['ייצוב','גומי','גדרות'],
    images: ['/assets/images/catalog/safety/fence-base.webp'],
  },
  {
    id: 'bridge',
    name: 'גשר להולכי רגל',
    description: 'גשר מתכתי נייד להולכי רגל, מיועד למעבר מעל תשתיות פתוחות באתרי עבודה. מבטיח בטיחות מרבית ומעבר נוח ללא הפרעה לעבודות.',
    tags: ['גשר','הולכי רגל','אתרי עבודה'],
    images: [
      '/assets/images/catalog/safety/bridge/bridge-1.webp',
      '/assets/images/catalog/safety/bridge/bridge-2.webp',
      '/assets/images/catalog/safety/bridge/bridge-3.webp',
    ],
  },
  {
    id: 'wheel-stops',
    name: 'מעצורי חניה',
    description: 'מעצורי גומי לתיחום מדויק של חניות. מונעים נזק לרכוש ומשפרים סדר בחניון.',
    tags: ['חניון','תיחום','גומי'],
    images: ['/assets/images/catalog/safety/wheel-stops.webp'],
  },
  {
    id: 'mirrors',
    name: 'מראות פנורמיות',
    description: 'מראות לשיפור הראות בצמתים עיוורים, יציאות חניונים ופינות מסוכנות.',
    tags: ['ראות','צמתים','בטיחות'],
    images: ['/assets/images/catalog/safety/mirrors.webp'],
  },
  {
    id: 'cat-eyes',
    name: 'עיני חתול / מחזירי אור',
    description: 'מחזירי אור לסימון גבולות נתיבים ומסלולי תנועה בשעות החשכה. עמידים לדריסה.',
    tags: ['לילה','נתיבים','סימון'],
    images: ['/assets/images/catalog/safety/cat-eyes.webp'],
  },
  {
    id: 'delineators',
    name: 'עמודוני הכוונה',
    description: 'עמודונים גמישים לתיחום ולהכוונת תנועה. חוזרים לצורתם לאחר פגיעה.',
    tags: ['הכוונה','גמיש','תיחום'],
    images: ['/assets/images/catalog/safety/delineators.webp'],
  },
  {
    id: 'warning-lights',
    name: 'פנסי אזהרה',
    description: 'פנסים מהבהבים לאזהרת נהגים באתרי עבודה ובמצבי חירום. סוללה נטענת.',
    tags: ['אזהרה','נראות','לילה'],
    images: ['/assets/images/catalog/safety/warning-lights.webp'],
  },
  {
    id: 'speed-bumps',
    name: 'פסי האטה מגומי',
    description: 'פסי האטה עשויים גומי איכותי לשליטה במהירות במתחמים, חניונים ואזורים עירוניים. קלים להתקנה וזמינים במגוון אורכים.',
    tags: ['האטה','מהירות','גומי'],
    images: ['/assets/images/catalog/safety/speed-bumps.webp'],
  },
  {
    id: 'spike-barrier',
    name: 'מחסום דוקרנים',
    description: 'מחסום דוקרנים לבקרת כניסת רכבים לאזורים מאובטחים. מאפשר מעבר חד-כיווני ומונע חדירה לא מורשית בצורה אפקטיבית.',
    tags: ['אבטחה','בקרת כניסה','חנייה'],
    images: ['/assets/images/catalog/safety/spike-barrier.webp'],
  },
];

function renderProductCard(product: Product, index: number): string {
  const mainImg = product.images[0];
  const hasGallery = product.images.length > 1;
  const galleryId = `sg-${product.id}`;

  const gallerySlides = product.images.map((src, i) => `
    <div id="sgslide-${galleryId}-${i}"
      style="position:absolute;inset:0;transition:opacity 0.4s;opacity:${i === 0 ? '1' : '0'};z-index:${i === 0 ? '1' : '0'};">
      <img src="${src}" alt="${product.name}"
        style="width:100%;height:100%;object-fit:cover;display:block;">
    </div>`).join('');

  const dots = hasGallery ? `
    <div style="position:absolute;bottom:0.5rem;left:50%;transform:translateX(-50%);display:flex;gap:5px;z-index:10;">
      ${product.images.map((_, i) => `
        <button id="sgdot-${galleryId}-${i}"
          onclick="event.stopPropagation();sgGoTo('${galleryId}',${i})"
          aria-label="הצג תמונה ${i+1}"
          style="width:6px;height:6px;border-radius:50%;border:none;padding:0;background:${i === 0 ? '#F2521B' : 'rgba(255,255,255,0.6)'};cursor:pointer;display:block;"></button>`).join('')}
    </div>` : '';

  const arrows = hasGallery ? `
    <button onclick="event.stopPropagation();sgGoTo('${galleryId}', (window._sgIdx['${galleryId}']||0) - 1)"
      style="position:absolute;top:50%;right:0.4rem;transform:translateY(-50%);background:rgba(0,0,0,0.35);color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:0.8rem;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;" aria-label="תמונה קודמת">›</button>
    <button onclick="event.stopPropagation();sgGoTo('${galleryId}', (window._sgIdx['${galleryId}']||0) + 1)"
      style="position:absolute;top:50%;left:0.4rem;transform:translateY(-50%);background:rgba(0,0,0,0.35);color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:0.8rem;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;" aria-label="תמונה הבאה">‹</button>` : '';

  return `
    <div class="product-card"
      role="article" aria-label="${product.name}"
      style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);transition:transform 0.25s,box-shadow 0.25s;display:flex;flex-direction:column;height:100%;"
      onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,0.12)';"
      onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.07)';">
      <!-- תמונה / גלריה -->
      <div style="height:260px;overflow:hidden;position:relative;cursor:pointer;"
        onclick="openLightbox(document.getElementById('sgslide-${galleryId}-'+((window._sgIdx&&window._sgIdx['${galleryId}'])||0))?.querySelector('img')?.src||'${mainImg}','${product.name}')">
        ${gallerySlides}
        <span style="position:absolute;top:1rem;right:1rem;background:rgba(242,82,27,0.9);color:#fff;font-size:0.7rem;font-weight:700;padding:0.2rem 0.6rem;border-radius:4px;z-index:10;">${String(index + 1).padStart(2,'0')}</span>
        <span style="position:absolute;bottom:0.7rem;left:2.5rem;background:rgba(0,0,0,0.45);color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;z-index:10;">🔍</span>
        ${arrows}
        ${dots}
      </div>
      <!-- תוכן -->
      <div style="padding:1.25rem;display:flex;flex-direction:column;flex:1;">
        <h3 style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:#272424;margin:0 0 0.5rem;">${product.name}</h3>
        <p style="color:#666;font-size:0.88rem;line-height:1.65;margin:0 0 1rem;">${product.description}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem;">
          ${product.tags.map(t => `<span style="background:#f5f5f5;color:#777;font-size:0.72rem;padding:0.2rem 0.55rem;border-radius:4px;">${t}</span>`).join('')}
        </div>
        <a href="/contact.html"
          style="display:block;text-align:center;margin-top:auto;background:#F2521B;color:#fff;padding:0.6rem 1rem;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.85rem;transition:opacity 0.2s;"
          onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          לפרטים ומחיר
        </a>
      </div>
    </div>`;
}

export function createSafetyCatalog(): string {
  const cards = safetyProducts.map((p, i) => renderProductCard(p, i)).join('');

  return `
    <!-- LIGHTBOX -->
    <div id="safety-lightbox"
      role="dialog" aria-modal="true" aria-label="תצוגת תמונה מוגדלת"
      onclick="closeLightbox()"
      style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:9999;align-items:center;justify-content:center;padding:1rem;">
      <div style="position:relative;max-width:90vw;max-height:90vh;" onclick="event.stopPropagation()">
        <img id="lightbox-img" src="" alt=""
          style="max-width:90vw;max-height:85vh;object-fit:contain;border-radius:8px;display:block;">
        <p id="lightbox-title"
          style="color:#fff;text-align:center;font-family:'Rubik',sans-serif;font-weight:700;font-size:1rem;margin:0.75rem 0 0;"></p>
        <button onclick="closeLightbox()"
          style="position:absolute;top:-1rem;left:-1rem;background:#F2521B;color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>
      </div>
    </div>

    <!-- HERO -->
    <section id="main-content" role="main" style="background:#272424;padding:5rem 2rem 3.5rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <a href="/products.html" style="color:rgba(255,255,255,0.5);font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:1.5rem;">
          → חזרה למוצרים
        </a>
        <p style="color:#F2521B;font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 0.75rem;">קטלוג מוצרים</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin:0 0 1rem;line-height:1.2;">
          אביזרי בטיחות
        </h1>
        <p style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7;margin:0;">
          מגוון מוצרי בטיחות לתשתיות הכביש, לחניונים ולאתרי עבודה — הכל בפריסה ארצית.
        </p>
      </div>
    </section>

    <!-- GRID -->
    <section aria-label="קטלוג מוצרי בטיחות" style="background:#f9f9f9;padding:3rem 2rem 5rem;">
      <div style="max-width:1200px;margin:0 auto;">
        <div id="products-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;align-items:stretch;">
          ${cards}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="background:#272424;padding:4rem 2rem;text-align:center;">
      <div style="max-width:600px;margin:0 auto;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.4rem,3vw,2rem);font-weight:900;color:#fff;margin:0 0 0.75rem;">
          לא מצאתם את מה שחיפשתם?
        </h2>
        <p style="color:rgba(255,255,255,0.6);margin:0 0 1.5rem;">
          יש לנו מגוון נוסף — צרו קשר ונמצא עבורכם את הפתרון המתאים.
        </p>
        <a href="/contact.html"
          style="display:inline-block;background:#F2521B;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:700;font-size:1rem;">
          צרו קשר
        </a>
      </div>
    </section>`;
}

export function initSafetyCatalog(): void {
  // גלריה פר כרטיסייה
  (window as any)._sgIdx = {};
  (window as any).sgGoTo = (id: string, idx: number) => {
    const counts: Record<string, number> = {
      'sg-cones': 2, 'sg-barriers': 5, 'sg-barriers-base': 2,
      'sg-bridge': 3, 'sg-seperation-fence': 2,
    };
    const total = counts[id];
    if (!total) return;
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    (window as any)._sgIdx[id] = idx;
    for (let i = 0; i < total; i++) {
      const slide = document.getElementById(`sgslide-${id}-${i}`);
      if (slide) { slide.style.opacity = i === idx ? '1' : '0'; slide.style.zIndex = i === idx ? '1' : '0'; }
      const dot = document.getElementById(`sgdot-${id}-${i}`);
      if (dot) dot.style.background = i === idx ? '#F2521B' : 'rgba(255,255,255,0.6)';
    }
  };

  // lightbox
  (window as any).openLightbox = (src: string, title: string) => {
    const lb = document.getElementById('safety-lightbox') as HTMLElement;
    const img = document.getElementById('lightbox-img') as HTMLImageElement;
    const ttl = document.getElementById('lightbox-title') as HTMLElement;
    if (!lb || !img || !ttl) return;
    img.src = src;
    img.alt = title;
    ttl.textContent = title;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  (window as any).closeLightbox = () => {
    const lb = document.getElementById('safety-lightbox') as HTMLElement;
    if (lb) lb.style.display = 'none';
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') (window as any).closeLightbox();
  });
}
