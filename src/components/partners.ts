export function createPartners(): string {
    const partners = [
      { name: 'עיריית תל אביב',   file: 'logo-tel-aviv.svg' },
      { name: 'עיריית ירושלים',   file: 'logo-Jerusalem.svg' },
      { name: 'בזק',              file: 'logo-bezeq.svg' },
      { name: 'BST',              file: 'logo-bst.svg' },
      { name: 'דניה סיבוס',       file: 'logo-denya-sibus.png' },
      { name: 'מכון התקנים',      file: 'logo-mahon-hatkanim.webp' },
      { name: 'מזליח זיוי',       file: 'logo-mazliah-zeevi.webp' },
      { name: 'אורון',            file: 'logo-oron.png' },
      { name: 'שטרן ורסנו',       file: 'logo-shtern-verasno.png' },
      { name: 'קולמוביל',         file: 'logo-colmovil.png' },
      { name: 'בסר',              file: 'logo-beser.png' },
    ]

    const logoCard = (p: { name: string; file: string }) => `
      <div style="
        min-width:160px;
        height:90px;
        background:white;
        border:1px solid #e8e8e8;
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:1rem 1.5rem;
        flex-shrink:0;
      ">
        <img src="/assets/images/logos/${p.file}" alt="${p.name}" style="max-width:120px;max-height:55px;width:auto;height:auto;object-fit:contain;" />
      </div>
    `

    // משכפלים פעמיים לloop אינסופי
    const logos = [...partners, ...partners].map(logoCard).join('')

    return `
      <section aria-label="השותפים שלנו בדרכים" style="background:#f5f5f5;padding:4rem 0;border-top:1px solid #e8e8e8;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">

          <!-- כותרת -->
          <h2 style="
            font-family:'Rubik',sans-serif;
            font-size:clamp(1.5rem,2.5vw,2rem);
            font-weight:900;
            color:#272424;
            text-align:center;
            margin-bottom:2.5rem;
            letter-spacing:-0.01em;
          ">השותפים שלנו בדרכים</h2>

          <!-- קרוסלה -->
          <div style="position:relative;">

            <!-- כפתור ימין -->
            <button id="partners-prev" aria-label="לוגו קודם — ניווט בין שותפים" style="
              position:absolute;
              right:-1rem;
              top:50%;
              transform:translateY(-50%);
              z-index:10;
              width:44px;
              height:44px;
              background:white;
              border:1px solid #e8e8e8;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              cursor:pointer;
              box-shadow:0 2px 8px rgba(0,0,0,0.1);
              transition:background 0.3s,border-color 0.3s;
            "
            onmouseover="this.style.background='#F2521B';this.style.borderColor='#F2521B';this.querySelector('svg').style.stroke='white'"
            onmouseout="this.style.background='white';this.style.borderColor='#e8e8e8';this.querySelector('svg').style.stroke='#272424'"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#272424" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <!-- כפתור שמאל -->
            <button id="partners-next" aria-label="לוגו הבא — ניווט בין שותפים" style="
              position:absolute;
              left:-1rem;
              top:50%;
              transform:translateY(-50%);
              z-index:10;
              width:44px;
              height:44px;
              background:white;
              border:1px solid #e8e8e8;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              cursor:pointer;
              box-shadow:0 2px 8px rgba(0,0,0,0.1);
              transition:background 0.3s,border-color 0.3s;
            "
            onmouseover="this.style.background='#F2521B';this.style.borderColor='#F2521B';this.querySelector('svg').style.stroke='white'"
            onmouseout="this.style.background='white';this.style.borderColor='#e8e8e8';this.querySelector('svg').style.stroke='#272424'"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#272424" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <!-- Track -->
            <div style="overflow:hidden;margin:0 1.5rem;">
              <div id="partners-track" style="display:flex;gap:1rem;">
                ${logos}
              </div>
            </div>

          </div>
        </div>
      </section>
    `
  }

  export function initPartners(): void {
    const track = document.getElementById('partners-track') as HTMLElement
    const prevBtn = document.getElementById('partners-prev')
    const nextBtn = document.getElementById('partners-next')

    if (!track || !prevBtn || !nextBtn) return

    const itemWidth = 160 + 16 // רוחב + gap
    const totalItems = 11     // מספר הלוגואים המקוריים
    let current = 0
    let isTransitioning = false

    function setPosition(index: number, animated: boolean) {
      track.style.transition = animated ? 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' : 'none'
      track.style.transform = `translateX(${index * itemWidth}px)`
      current = index
    }

    function goTo(index: number) {
      if (isTransitioning) return
      isTransitioning = true
      setPosition(index, true)

      setTimeout(() => {
        // כשמגיעים לסוף הסט הראשון — מאפסים בשקט לאותה תמונה בסט השני... לא צריך
        // כשמגיעים מעבר לסט השני — חוזרים לתחלת הסט הראשון בשקט
        if (current >= totalItems) {
          setPosition(current - totalItems, false)
        } else if (current < 0) {
          setPosition(current + totalItems, false)
        }
        isTransitioning = false
      }, 420)
    }

    prevBtn.addEventListener('click', () => goTo(current - 1))
    nextBtn.addEventListener('click', () => goTo(current + 1))

    // גלילה אוטומטית — נבדק prefers-reduced-motion (WCAG 2.2.2)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      setInterval(() => {
        goTo(current + 1)
      }, 3000)
    }
  }
