export function createNavbar(): string {
  return `
    <!-- כפתור דלג לתוכן -->
    <a href="#main-content"
      style="position:fixed;top:-100px;right:1rem;z-index:9999;background:#F2521B;color:#fff;padding:0.6rem 1.2rem;border-radius:0 0 8px 8px;font-family:'Rubik',sans-serif;font-weight:700;font-size:0.9rem;text-decoration:none;transition:top 0.2s;"
      onfocus="this.style.top='0'" onblur="this.style.top='-100px'">
      דלג לתוכן הראשי
    </a>

    <header id="navbar" role="banner" class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-dark">
      <div class="max-w-7xl mx-auto px-6 flex items-center h-20 gap-8">

        <!-- לוגו -->
        <a href="/" class="flex items-center flex-shrink-0" aria-label="א.ס הסדרי תנועה - עמוד הבית">
          <img
            src="/assets/images/logo.svg"
            alt="א.ס הסדרי תנועה"
            style="height: 3rem; width: auto;"
          />
        </a>

        <!-- ניווט דסקטופ -->
        <nav class="hidden md:flex items-center gap-1 flex-1" aria-label="ניווט ראשי">
          <a href="/about.html" class="nav-link">אודות</a>
          <a href="/services.html" class="nav-link">שירותים</a>
          <a href="/products.html" class="nav-link">מוצרים</a>
          <a href="/careers.html" class="nav-link">דרושים</a>
        </nav>

        <!-- טלפון + צור קשר — בצד שמאל -->
        <div class="hidden md:flex items-center gap-2" style="margin-inline-start:auto;">
          <a href="tel:0894700053"
            aria-label="התקשר אלינו: 08-9470053"
            style="display:flex;align-items:center;gap:0.4rem;color:rgba(255,255,255,0.75);font-size:0.875rem;font-weight:500;text-decoration:none;transition:color 0.2s;"
            onmouseover="this.style.color='#F2521B'"
            onmouseout="this.style.color='rgba(255,255,255,0.75)'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            08-9470053
          </a>
          <a href="/contact.html" class="nav-cta" style="margin-inline-start:0.5rem;">צור קשר</a>
        </div>

        <!-- כפתור המבורגר -->
        <button
          id="menu-btn"
          style="display: none; align-items: center; justify-content: center; width: 40px; height: 40px; margin-inline-start: auto; cursor: pointer; background: none; border: none; border-radius: 4px;"
          aria-label="פתח תפריט ניווט"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <!-- המבורגר -->
          <svg id="menu-icon-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <!-- X -->
          <svg id="menu-icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false" style="display:none;">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

      </div>

      <!-- תפריט מובייל -->
      <div id="mobile-menu" class="hidden md:hidden bg-dark border-t-2 border-orange px-6 py-4" aria-label="תפריט ניווט נייד">
        <nav class="flex flex-col gap-1" aria-label="ניווט נייד">
          <a href="/about.html" class="mobile-nav-link">אודות</a>
          <a href="/services.html" class="mobile-nav-link">שירותים</a>
          <a href="/products.html" class="mobile-nav-link">מוצרים</a>
          <a href="/careers.html" class="mobile-nav-link">דרושים</a>
          <a href="/contact.html" class="mobile-nav-link text-orange font-bold">צור קשר</a>
        </nav>
      </div>
    </header>

    <!-- כפתור נגישות קבוע -->
    <div id="accessibility-widget" style="position:fixed;bottom:1.5rem;left:1.5rem;z-index:9998;">
      <button
        id="accessibility-btn"
        onclick="toggleAccessibilityMenu()"
        aria-label="אפשרויות נגישות"
        aria-expanded="false"
        aria-controls="accessibility-menu"
        style="width:52px;height:52px;border-radius:50%;background:#F2521B;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s;"
        onmouseover="this.style.transform='scale(1.1)'"
        onmouseout="this.style.transform='scale(1)'">
        <img src="data:image/webp;base64,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" alt="" aria-hidden="true" style="width:26px;height:26px;filter:invert(1);display:block;">
      </button>
      <div
        id="accessibility-menu"
        role="region"
        aria-label="אפשרויות נגישות"
        style="display:none;position:absolute;bottom:64px;left:0;background:#fff;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.18);padding:1rem;min-width:220px;border:1px solid #eee;">
        <p style="font-family:'Rubik',sans-serif;font-size:0.8rem;font-weight:800;color:#272424;margin:0 0 0.75rem;text-align:center;border-bottom:1px solid #eee;padding-bottom:0.6rem;">אפשרויות נגישות</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <button onclick="adjustFontSize(1)" style="background:#f5f5f5;border:none;border-radius:8px;padding:0.55rem 0.85rem;cursor:pointer;font-family:'Rubik',sans-serif;font-size:0.85rem;font-weight:600;color:#272424;text-align:right;display:flex;align-items:center;gap:0.5rem;">
            <span aria-hidden="true" style="font-size:1.1rem;font-weight:900;">A+</span> הגדל טקסט
          </button>
          <button onclick="adjustFontSize(-1)" style="background:#f5f5f5;border:none;border-radius:8px;padding:0.55rem 0.85rem;cursor:pointer;font-family:'Rubik',sans-serif;font-size:0.85rem;font-weight:600;color:#272424;text-align:right;display:flex;align-items:center;gap:0.5rem;">
            <span aria-hidden="true" style="font-size:0.85rem;font-weight:900;">A-</span> הקטן טקסט
          </button>
          <button onclick="toggleHighContrast()" id="contrast-btn" style="background:#f5f5f5;border:none;border-radius:8px;padding:0.55rem 0.85rem;cursor:pointer;font-family:'Rubik',sans-serif;font-size:0.85rem;font-weight:600;color:#272424;text-align:right;display:flex;align-items:center;gap:0.5rem;">
            <span aria-hidden="true">◑</span> ניגודיות גבוהה
          </button>
          <button onclick="toggleReadableFont()" id="font-btn" style="background:#f5f5f5;border:none;border-radius:8px;padding:0.55rem 0.85rem;cursor:pointer;font-family:'Rubik',sans-serif;font-size:0.85rem;font-weight:600;color:#272424;text-align:right;display:flex;align-items:center;gap:0.5rem;">
            <span aria-hidden="true">Aa</span> גופן קריא
          </button>
          <button onclick="resetAccessibility()" style="background:#fff;border:1px solid #ddd;border-radius:8px;padding:0.55rem 0.85rem;cursor:pointer;font-family:'Rubik',sans-serif;font-size:0.8rem;color:#595959;text-align:center;margin-top:0.25rem;">
            איפוס
          </button>
          <a href="/accessibility.html" style="display:block;text-align:center;color:#c23a00;font-family:'Rubik',sans-serif;font-size:0.78rem;font-weight:700;text-decoration:underline;margin-top:0.25rem;">
            הצהרת נגישות <span aria-hidden="true">←</span>
          </a>
        </div>
      </div>
    </div>
  `
}

export function initNavbar(): void {
  const navbar = document.getElementById('navbar')
  const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement | null
  const mobileMenu = document.getElementById('mobile-menu')

  if (!navbar || !menuBtn || !mobileMenu) return

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('shadow-lg', window.scrollY > 10)
  })

  const iconOpen = document.getElementById('menu-icon-open')
  const iconClose = document.getElementById('menu-icon-close')

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden')
    mobileMenu.classList.toggle('hidden')
    menuBtn.setAttribute('aria-expanded', String(!isOpen))
    menuBtn.setAttribute('aria-label', isOpen ? 'פתח תפריט ניווט' : 'סגור תפריט ניווט')
    if (iconOpen && iconClose) {
      iconOpen.style.display = isOpen ? '' : 'none'
      iconClose.style.display = isOpen ? 'none' : ''
    }
  })

  // סגור תפריט בלחיצת Escape
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden')
      menuBtn.setAttribute('aria-expanded', 'false')
      menuBtn.setAttribute('aria-label', 'פתח תפריט ניווט')
      if (iconOpen && iconClose) { iconOpen.style.display = ''; iconClose.style.display = 'none' }
      menuBtn.focus()
    }
  })

  // ── כפתור נגישות ──────────────────────────────────
  let fontLevel = 0
  let highContrast = false
  let readableFont = false

  ;(window as any).toggleAccessibilityMenu = () => {
    const menu = document.getElementById('accessibility-menu')
    const btn = document.getElementById('accessibility-btn')
    if (!menu || !btn) return
    const open = menu.style.display === 'block'
    menu.style.display = open ? 'none' : 'block'
    btn.setAttribute('aria-expanded', String(!open))
  }

  ;(window as any).adjustFontSize = (delta: number) => {
    fontLevel = Math.max(-3, Math.min(5, fontLevel + delta))
    document.documentElement.style.fontSize = `${100 + fontLevel * 10}%`
  }

  ;(window as any).toggleHighContrast = () => {
    highContrast = !highContrast
    const btn = document.getElementById('contrast-btn')
    if (highContrast) {
      document.body.style.filter = 'contrast(1.5) saturate(0)'
      if (btn) btn.style.background = '#272424'
      if (btn) btn.style.color = '#fff'
    } else {
      document.body.style.filter = ''
      if (btn) { btn.style.background = '#f5f5f5'; btn.style.color = '#272424' }
    }
  }

  ;(window as any).toggleReadableFont = () => {
    readableFont = !readableFont
    const btn = document.getElementById('font-btn')
    if (readableFont) {
      document.body.style.fontFamily = 'Arial, sans-serif'
      document.body.style.letterSpacing = '0.03em'
      document.body.style.lineHeight = '1.9'
      if (btn) btn.style.background = '#272424'
      if (btn) btn.style.color = '#fff'
    } else {
      document.body.style.fontFamily = ''
      document.body.style.letterSpacing = ''
      document.body.style.lineHeight = ''
      if (btn) { btn.style.background = '#f5f5f5'; btn.style.color = '#272424' }
    }
  }

  ;(window as any).resetAccessibility = () => {
    fontLevel = 0
    highContrast = false
    readableFont = false
    document.documentElement.style.fontSize = ''
    document.body.style.filter = ''
    document.body.style.fontFamily = ''
    document.body.style.letterSpacing = ''
    document.body.style.lineHeight = ''
    const contrastBtn = document.getElementById('contrast-btn')
    const fontBtn = document.getElementById('font-btn')
    if (contrastBtn) { contrastBtn.style.background = '#f5f5f5'; contrastBtn.style.color = '#272424' }
    if (fontBtn) { fontBtn.style.background = '#f5f5f5'; fontBtn.style.color = '#272424' }
  }

  // סגור תפריט נגישות בלחיצה מחוץ אליו
  document.addEventListener('click', (e: MouseEvent) => {
    const widget = document.getElementById('accessibility-widget')
    const menu = document.getElementById('accessibility-menu')
    const btn = document.getElementById('accessibility-btn')
    if (widget && menu && btn && !widget.contains(e.target as Node)) {
      menu.style.display = 'none'
      btn.setAttribute('aria-expanded', 'false')
    }
  })
}
