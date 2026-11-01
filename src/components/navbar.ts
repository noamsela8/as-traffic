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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true" focusable="false">
          <circle cx="12" cy="4" r="2"/>
          <path d="M12 7c-1.1 0-2 .9-2 2v4l-2 4h2l1.5-3h1l1.5 3h2l-2-4V9c0-1.1-.9-2-2-2z"/>
          <path d="M8.5 10.5C7 11.4 6 13.1 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.9-1-3.6-2.5-4.5l-1 1.7C15.4 12.9 16 13.9 16 15c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.1.6-2.1 1.5-2.8l-1-1.7z"/>
        </svg>
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
