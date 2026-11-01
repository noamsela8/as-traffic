export function createFooter(): string {
    return `
      <style>
.footer-logo-wrap{text-align:center}
.footer-logo-wrap img{max-width:180px!important}
@media(min-width:768px){
  .footer-grid{grid-template-columns:1.4fr 1fr 1fr 1fr!important;gap:3rem!important}
  .footer-logo-wrap{text-align:right}
  .footer-logo-wrap img{max-width:260px!important}
  .footer-bottom-nav{flex-direction:row!important;align-items:center!important}
}
.footer-bottom-nav{flex-direction:column;gap:0.5rem;align-items:center}
</style>
      <footer role="contentinfo" style="background-color: #272424; color: white;">

        <div style="height: 4px; background-color: #F2521B;" role="presentation"></div>

        <div style="max-width: 80rem; margin: 0 auto; padding: 4rem 1.5rem;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start;" class="footer-grid">

            <!-- לוגו -->
            <div class="footer-logo-wrap">
              <a href="/" aria-label="א.ס הסדרי תנועה - עמוד הבית">
                <img src="/assets/images/logo.svg" alt="א.ס הסדרי תנועה" style="height: auto;" />
              </a>
            </div>

            <!-- צור קשר -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <h2 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: white; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                צור קשר
              </h2>
              <address style="display: flex; flex-direction: column; gap: 1rem; font-style: normal;">

                <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                  <div style="width: 2rem; height: 2rem; background: #F2521B; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 4px;" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                  </div>
                  <div>
                    <p style="color: rgba(255,255,255,0.55); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem;" aria-hidden="true">טלפון</p>
                    <a href="tel:0894700053" style="color:rgba(255,255,255,0.8);font-size:0.875rem;font-weight:500;text-decoration:none;" aria-label="התקשר אלינו: 08-9470053">08-9470053</a>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                  <div style="width: 2rem; height: 2rem; background: #F2521B; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 4px;" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                  </div>
                  <div>
                    <p style="color: rgba(255,255,255,0.55); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem;" aria-hidden="true">דוא"ל</p>
                    <a href="mailto:office@as-traffic.co.il" style="color:rgba(255,255,255,0.8);font-size:0.875rem;font-weight:500;text-decoration:none;" aria-label='שלח מייל ל: office@as-traffic.co.il'>office@as-traffic.co.il</a>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                  <div style="width: 2rem; height: 2rem; background: #F2521B; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 4px;" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p style="color: rgba(255,255,255,0.55); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem;" aria-hidden="true">כתובת</p>
                    <p style="color:rgba(255,255,255,0.8);font-size:0.875rem;font-weight:500;">המייסדים 30, בית עוזיאל</p>
                  </div>
                </div>

              </address>
            </div>

            <!-- ניווט מהיר -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <h2 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: white; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                ניווט מהיר
              </h2>
              <nav aria-label="ניווט מהיר" style="display: flex; flex-direction: column; gap: 0.5rem;">
                <a href="/about.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">אודות החברה</a>
                <a href="/services.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">השירותים שלנו</a>
                <a href="/careers.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">דרושים</a>
                <a href="/contact.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">צור קשר</a>
              </nav>
            </div>

            <!-- קישורים נוספים -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <h2 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: white; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                קישורים נוספים
              </h2>
              <nav aria-label="קישורים נוספים" style="display: flex; flex-direction: column; gap: 0.5rem;">
                <a href="/privacy.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">מדיניות פרטיות</a>
                <a href="/accessibility.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">הצהרת נגישות</a>
                <a href="/terms.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">תנאי שימוש</a>
                <a href="/sitemap.html" style="color:rgba(255,255,255,0.6);font-size:0.875rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">מפת אתר</a>
              </nav>
            </div>

          </div>
        </div>

        <div style="border-top: 1px solid rgba(255,255,255,0.1);">
          <div style="max-width: 80rem; margin: 0 auto; padding: 1.5rem; display: flex; gap: 0.75rem;" class="footer-bottom-nav">
            <p style="color: rgba(255,255,255,0.55); font-size: 0.75rem;">
              <small>© 2025 א.ס הסדרי תנועה בע"מ · כל הזכויות שמורות</small>
            </p>
            <nav aria-label="קישורי מדיניות" style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;">
              <a href="/privacy.html" style="color: rgba(255,255,255,0.55); font-size: 0.75rem; text-decoration:none;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">מדיניות פרטיות</a>
              <a href="/accessibility.html" style="color: rgba(255,255,255,0.55); font-size: 0.75rem; text-decoration:none;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">הצהרת נגישות</a>
              <a href="/terms.html" style="color: rgba(255,255,255,0.55); font-size: 0.75rem; text-decoration:none;" onmouseover="this.style.color='#F2521B'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">תנאי שימוש</a>
            </nav>
          </div>
        </div>

      </footer>
    `
  }
