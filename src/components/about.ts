export function createAbout(): string {
  return `
    <style>
    .about-grid{display:grid;gap:2px;margin-top:2rem;grid-template-columns:repeat(2,1fr)}
    .about-icon{width:70px!important;height:70px!important}
    .about-card{background:#f5f5f5;padding:1.25rem;border-top:3px solid transparent;text-align:center;transition:border-color 0.3s}
    @media(min-width:768px){
      .about-grid{grid-template-columns:repeat(4,1fr)}
      .about-icon{width:120px!important;height:120px!important}
      .about-card{padding:2rem}
    }
    </style>
    <section aria-label="אודות החברה" style="background:white;padding:6rem 0;">
      <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">

        <!-- כותרת ותוכן מרכזי -->
        <div style="text-align:center;max-width:800px;margin:0 auto 4rem;">

          <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:900;color:#272424;line-height:1.2;letter-spacing:-0.01em;margin-bottom:2rem;">
            ניסיון, בטיחות וסטנדרט ביצוע בלתי מתפשר.
          </h2>

          <p style="font-size:1.2rem;color:#3a3a3a;line-height:1.9;font-weight:500;margin-bottom:1.25rem;">
            אנחנו עובדים כבר למעלה מ-25 שנה בחזית ענף הסדרי התנועה והתשתיות בישראל, תוך עמידה מוחלטת בתקנים ובסטנדרטים המקצועיים הגבוהים ביותר.
          </p>

          <p style="font-size:1.2rem;color:#3a3a3a;line-height:1.9;font-weight:500;margin-bottom:1.25rem;">
            אנחנו מלווים אתכם מהתחלה ועד הסוף — צביעת כבישים, שילוט דרכים, התקנת אביזרי בטיחות והתקני תנועה מתקדמים, הכל תחת קורת גג אחת.
          </p>

          <p style="font-size:1.2rem;color:#3a3a3a;line-height:1.9;font-weight:500;margin-bottom:2.5rem;">
            המומחיות והאיכות שלנו הן הדבר שעליו אתם יכולים לסמוך — כדי שתוכלו להתחיל כל פרויקט חדש בביטחון מלא ובראש שקט.
          </p>

          <a href="/about.html" class="cta-btn" style="background:#F2521B;color:white;padding:0.875rem 2rem;font-family:'Rubik',sans-serif;font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;"
            onmouseover="this.style.background='#d4511a'"
            onmouseout="this.style.background='#F2521B'">
            קרא עוד עלינו
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- סרגל 4 בולטים -->
        <div class="about-grid">

          <div class="about-card"
            onmouseover="this.style.borderColor='#F2521B'"
            onmouseout="this.style.borderColor='transparent'">
            <div style="display:flex;justify-content:center;margin-bottom:1rem;"><img src="/assets/images/icons/about-icon-safety.svg" alt="בטיחות" class="about-icon" /></div>
            <h3 style="font-family:'Rubik',sans-serif;font-size:0.9rem;font-weight:700;color:#272424;margin-bottom:0.5rem;">בטיחות</h3>
            <p style="font-size:0.8rem;color:#595959;line-height:1.6;">עמידה מוחלטת בתקני הבטיחות הגבוהים ביותר.</p>
          </div>

          <div class="about-card"
            onmouseover="this.style.borderColor='#F2521B'"
            onmouseout="this.style.borderColor='transparent'">
            <div style="display:flex;justify-content:center;margin-bottom:1rem;"><img src="/assets/images/icons/about-icon-professional.svg" alt="מקצועיות" class="about-icon" /></div>
            <h3 style="font-family:'Rubik',sans-serif;font-size:0.9rem;font-weight:700;color:#272424;margin-bottom:0.5rem;">מקצועיות</h3>
            <p style="font-size:0.8rem;color:#595959;line-height:1.6;">צוותים מיומנים ומוסמכים עם ניסיון רב.</p>
          </div>

          <div class="about-card"
            onmouseover="this.style.borderColor='#F2521B'"
            onmouseout="this.style.borderColor='transparent'">
            <div style="display:flex;justify-content:center;margin-bottom:1rem;"><img src="/assets/images/icons/about-icon-standards.svg" alt="עמידה בתקנים" class="about-icon" /></div>
            <h3 style="font-family:'Rubik',sans-serif;font-size:0.9rem;font-weight:700;color:#272424;margin-bottom:0.5rem;">עמידה בתקנים</h3>
            <p style="font-size:0.8rem;color:#595959;line-height:1.6;">פעילות בהתאם לתקנים המקצועיים ותקנות מע"צ.</p>
          </div>

          <div class="about-card"
            onmouseover="this.style.borderColor='#F2521B'"
            onmouseout="this.style.borderColor='transparent'">
            <div style="display:flex;justify-content:center;margin-bottom:1rem;"><img src="/assets/images/icons/about-icon-efficiency.svg" alt="יעילות" class="about-icon" /></div>
            <h3 style="font-family:'Rubik',sans-serif;font-size:0.9rem;font-weight:700;color:#272424;margin-bottom:0.5rem;">יעילות</h3>
            <p style="font-size:0.8rem;color:#595959;line-height:1.6;">ביצוע מהיר ומדויק עם מינימום הפרעה לתנועה.</p>
          </div>

        </div>
      </div>
    </section>
  `
}
