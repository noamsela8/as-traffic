export function createHero(): string {
    return `
      <section id="main-content" style="position:relative;width:100%;height:100vh;min-height:600px;overflow:hidden;display:flex;align-items:center;" aria-label="אזור פתיחה - א.ס הסדרי תנועה">

        <video id="hero-video" autoplay muted loop playsinline
          style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:0;"
          aria-hidden="true"
          tabindex="-1">
          <source src="/road_video.mp4" type="video/mp4">
        </video>

        <div style="position:absolute;inset:0;background:linear-gradient(to left,rgba(0,0,0,0.75),rgba(0,0,0,0.45) 60%,rgba(0,0,0,0.20));z-index:1;" aria-hidden="true"></div>

        <!-- כפתור השהיה/הפעלה לסרטון — WCAG 2.2.2 -->
        <button
          id="hero-video-toggle"
          aria-label="השהה סרטון רקע"
          aria-pressed="false"
          style="position:absolute;bottom:1.5rem;left:1.5rem;z-index:10;width:44px;height:44px;border-radius:50%;background:rgba(0,0,0,0.55);border:2px solid rgba(255,255,255,0.6);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s,border-color 0.2s;"
          onmouseover="this.style.background='rgba(242,82,27,0.85)';this.style.borderColor='#F2521B'"
          onmouseout="this.style.background='rgba(0,0,0,0.55)';this.style.borderColor='rgba(255,255,255,0.6)'"
        >
          <!-- אייקון pause (מוצג כשהסרטון פעיל) -->
          <svg id="hero-icon-pause" width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true" focusable="false">
            <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
          <!-- אייקון play (מוצג כשהסרטון מושהה) -->
          <svg id="hero-icon-play" width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true" focusable="false" style="display:none;">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </button>

        <div style="position:relative;z-index:2;max-width:80rem;margin:0 auto;padding:0 1.5rem;width:100%;">

          <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;color:white;line-height:1.1;letter-spacing:-0.02em;margin-bottom:1.5rem;max-width:700px;">
            התשתית מתקדמת.<br>
            <span style="color:#F2521B;">התנועה ממשיכה.</span>
          </h1>

          <p style="font-family:'Rubik',sans-serif;font-size:clamp(1rem,2vw,1.2rem);color:rgba(255,255,255,0.70);max-width:550px;line-height:1.8;margin-bottom:2.5rem;">
            למעלה מ-25 שנה של ניסיון בהסדרי תנועה, תשתיות ובטיחות דרכים —
            בפריסה ארצית מלאה, סביב השעון.
          </p>

          <div style="display:flex;gap:1rem;flex-wrap:wrap;">

            <a href="/about.html"
              style="background:#F2521B;color:white;padding:0.875rem 2rem;font-family:'Rubik',sans-serif;font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;"
              onmouseover="this.style.background='#d4511a'"
              onmouseout="this.style.background='#F2521B'">
              עוד עלינו
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a href="/services.html"
              style="background:transparent;color:white;padding:0.875rem 2rem;font-family:'Rubik',sans-serif;font-weight:600;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;border:2px solid rgba(255,255,255,0.5);display:inline-flex;align-items:center;gap:0.5rem;"
              onmouseover="this.style.borderColor='#F2521B';this.style.color='#F2521B'"
              onmouseout="this.style.borderColor='rgba(255,255,255,0.5)';this.style.color='white'">
              השירותים שלנו
            </a>

          </div>
        </div>

      </section>
    `
  }

export function initHero(): void {
  const video = document.getElementById('hero-video') as HTMLVideoElement | null
  const toggleBtn = document.getElementById('hero-video-toggle') as HTMLButtonElement | null
  const iconPause = document.getElementById('hero-icon-pause') as SVGElement | null
  const iconPlay = document.getElementById('hero-icon-play') as SVGElement | null

  if (!video || !toggleBtn || !iconPause || !iconPlay) return

  // אם המשתמש מעדיף תנועה מופחתת — עוצרים מיד
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause()
    video.removeAttribute('autoplay')
    toggleBtn.setAttribute('aria-label', 'הפעל סרטון רקע')
    toggleBtn.setAttribute('aria-pressed', 'true')
    iconPause.style.display = 'none'
    iconPlay.style.display = ''
  }

  toggleBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play()
      toggleBtn.setAttribute('aria-label', 'השהה סרטון רקע')
      toggleBtn.setAttribute('aria-pressed', 'false')
      iconPause.style.display = ''
      iconPlay.style.display = 'none'
    } else {
      video.pause()
      toggleBtn.setAttribute('aria-label', 'הפעל סרטון רקע')
      toggleBtn.setAttribute('aria-pressed', 'true')
      iconPause.style.display = 'none'
      iconPlay.style.display = ''
    }
  })
}
