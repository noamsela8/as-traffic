export function createAboutPage(): string {
  return `
<style>
@media(max-width:767px){
  .about-main-grid{grid-template-columns:1fr!important;gap:3rem!important}
  .about-stats-grid{grid-template-columns:1fr 1fr!important}
  .about-team-grid{grid-template-columns:1fr 1fr!important;gap:1rem!important}
}
</style>

    <!-- מי אנחנו -->
    <section style="background:white;padding:8rem 0 5rem;">
      <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">

        <!-- כותרת ראשית -->
        <div style="max-width:860px;margin:0 auto 5rem;text-align:center;">
          <div style="display:flex;align-items:center;justify-content:center;gap:0.75rem;margin-bottom:1.5rem;">
            <div style="width:2rem;height:2px;background:#F2521B;"></div>
            <span style="font-family:'Rubik',sans-serif;font-size:0.75rem;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:#F2521B;">מי אנחנו</span>
            <div style="width:2rem;height:2px;background:#F2521B;"></div>
          </div>
          <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:900;color:#272424;line-height:1.2;letter-spacing:-0.01em;margin-bottom:1.75rem;">
            למעלה מ־25 שנות ניסיון בתחום<br>הסדרי התנועה והתשתיות בישראל
          </h2>
          <p style="font-family:'Rubik',sans-serif;font-size:1.1rem;color:#555;line-height:1.9;">
            יש לנו למעלה מ-25 שנות ניסיון בתחום הסדרי התנועה והתשתיות בישראל. לאורך השנים צברנו ידע וניסיון מקצועי עמוק במתן פתרונות למגוון פרויקטים, תוך הקפדה על סטנדרטים גבוהים ומתן מענה אמיתי לצרכים שלכם.
          </p>
        </div>

        <!-- תמונה -->
        <div style="max-width:1000px;margin:0 auto 7rem;border-radius:8px;overflow:hidden;aspect-ratio:16/6;">
          <img src="/assets/images/about-hero.webp" alt="צוות א.ס הסדרי תנועה בפעולה בשטח" style="width:100%;height:100%;object-fit:cover;display:block;">
        </div>

      </div>
    </section>

    <!-- תחומי פעילות -->
        <div style="display:flex;flex-direction:column;gap:0;">

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;border-bottom:1px solid #e8e8e8;">
            <img src="/assets/images/icons/icon-traffic.svg" alt="הסדרי תנועה" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">הסדרי תנועה</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">תכנון, ייעוץ וביצוע של הסדרי תנועה, בהתאמה לצורכי הפרויקט ולתנאי השטח.</p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;border-bottom:1px solid #e8e8e8;">
            <img src="/assets/images/icons/icon-signage.svg" alt="תמרור ושילוט" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">תמרור ושילוט</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">אספקה והתקנה של תמרורים ושלטים בהתאם לדרישות הפרויקט ולתקנים הרלוונטיים.</p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;border-bottom:1px solid #e8e8e8;">
            <img src="/assets/images/icons/icon-marking.svg" alt="צביעה וסימון" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">צביעה וסימון</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">ביצוע עבודות סימון וצביעה בכבישים, נתיבים, חניונים ושטחים נוספים.</p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;border-bottom:1px solid #e8e8e8;">
            <img src="/assets/images/icons/icon-inspector.svg" alt="פקחי תנועה" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">פקחי תנועה</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">אספקת פקחי תנועה מוסמכים לניהול והכוונת התנועה באתרי עבודה, סלילה ובנייה.</p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;border-bottom:1px solid #e8e8e8;">
            <img src="/assets/images/icons/icon-safety.svg" alt="אביזרי בטיחות" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">אביזרי בטיחות</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">אספקת מגוון אביזרי בטיחות לתשתיות הדרך ולאתרי עבודה, בהתאם לצורכי הפרויקט.</p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;padding:1.75rem 0;">
            <img src="/assets/images/icons/icon-light.svg" alt="תאורה" style="width:52px;height:52px;flex-shrink:0;">
            <div>
              <h3 style="font-family:'Rubik',sans-serif;font-size:1.05rem;font-weight:800;color:#272424;margin-bottom:0.4rem;">תאורה</h3>
              <p style="font-size:0.9rem;color:#7a7a7a;line-height:1.6;">עגלות תאורה ניידות לכלל הצרכים — מאירועים פרטיים עד לאתרי עבודה.</p>
            </div>
          </div>

        </div>
    </section>

    <!-- ניסיון ויכולות -->
    <section style="background:white;padding:6rem 0;">
      <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center;" class="about-main-grid">

        <div>
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
            <div style="width:2rem;height:2px;background:#F2521B;"></div>
            <span style="font-family:'Rubik',sans-serif;font-size:0.75rem;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:#F2521B;">הניסיון והיכולות שלנו</span>
          </div>
          <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,2.8vw,2.4rem);font-weight:900;color:#272424;line-height:1.2;letter-spacing:-0.01em;margin-bottom:1.75rem;">
            מהתכנון ועד<br>הביצוע בשטח
          </h2>
          <p style="font-family:'Rubik',sans-serif;font-size:1.05rem;color:#555;line-height:1.95;">
            אנחנו מלווים כל פרויקט מהתכנון ועד הביצוע בשטח, תוך התאמת הפתרונות לדרישות הפרויקט ותיאום עם הגורמים הרלוונטיים. פועלים בפריסה ארצית, תוך הקפדה על תקנים, איכות הביצוע ובטיחות העובדים ומשתמשי הדרך.
          </p>
          <p style="font-family:'Rubik',sans-serif;font-size:1.05rem;color:#555;line-height:1.95;margin-top:1.25rem;">
            הניסיון, האמינות והמחויבות שלנו הם הבסיס לכל עבודה שאנחנו עושים.
          </p>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem;" class="about-stats-grid">
            <div style="border-right:3px solid #F2521B;padding-right:1rem;">
              <div style="font-family:'Rubik',sans-serif;font-size:2.2rem;font-weight:900;color:#272424;line-height:1;">25+</div>
              <div style="font-size:0.85rem;color:#7a7a7a;margin-top:0.25rem;">שנות ניסיון</div>
            </div>
            <div style="border-right:3px solid #F2521B;padding-right:1rem;">
              <div style="font-family:'Rubik',sans-serif;font-size:2.2rem;font-weight:900;color:#272424;line-height:1;">500+</div>
              <div style="font-size:0.85rem;color:#7a7a7a;margin-top:0.25rem;">פרויקטים</div>
            </div>
            <div style="border-right:3px solid #F2521B;padding-right:1rem;">
              <div style="font-family:'Rubik',sans-serif;font-size:2.2rem;font-weight:900;color:#272424;line-height:1;">200+</div>
              <div style="font-size:0.85rem;color:#7a7a7a;margin-top:0.25rem;">לקוחות</div>
            </div>
            <div style="border-right:3px solid #F2521B;padding-right:1rem;">
              <div style="font-family:'Rubik',sans-serif;font-size:2.2rem;font-weight:900;color:#272424;line-height:1;">ארצי</div>
              <div style="font-size:0.85rem;color:#7a7a7a;margin-top:0.25rem;">פריסת שירות</div>
            </div>
          </div>
        </div>

        <!-- תמונה -->
        <div style="border-radius:8px;overflow:hidden;aspect-ratio:4/3;">
          <img src="/assets/images/about-secondary.webp" alt="עבודות הסדרי תנועה בפרויקט תשתית" style="width:100%;height:100%;object-fit:cover;display:block;">
        </div>

      </div>
    </section>

    <!-- ערכים -->
    <section style="background:#f5f5f5;padding:5rem 0;border-top:1px solid #e8e8e8;">
      <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
        <div style="text-align:center;margin-bottom:3rem;">
          <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:900;color:#272424;letter-spacing:-0.01em;">
            הערכים שמובילים אותנו
          </h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;" class="about-team-grid">

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">01</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-safety.svg" alt="בטיחות" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">עמידה מוחלטת בתקני הבטיחות הגבוהים ביותר בכל פרויקט ובכל שעה.</p>
            </div>
          </div>

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">02</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-professional.svg" alt="מקצועיות" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">צוותים מיומנים עם ניסיון רב וציוד ייעודי לכל סוג פרויקט.</p>
            </div>
          </div>

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">03</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-standards.svg" alt="עמידה בתקנים" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">פעילות בהתאם לכל הדרישות הרגולטוריות ותקנות מע"צ.</p>
            </div>
          </div>

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">04</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-reliability.svg" alt="אמינות" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">מחויבות מלאה ללקוח לאורך כל שלבי הפרויקט.</p>
            </div>
          </div>

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">05</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-efficiency.svg" alt="יעילות" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">אפשור עבודה יעילה תוך התחשבות מיטבית בעוברי הדרך.</p>
            </div>
          </div>

          <div style="background:white;border:1px solid #e8e8e8;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:box-shadow 0.3s,transform 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.10)';this.style.transform='translateY(-4px)'"
            onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
            <div style="position:absolute;top:-10px;right:16px;font-family:'Rubik',sans-serif;font-size:6rem;font-weight:900;color:rgba(242,101,34,0.07);line-height:1;user-select:none;">06</div>
            <div style="position:relative;z-index:1;">
              <div style="display:flex;justify-content:center;margin-bottom:1.25rem;"><img src="/assets/images/icons/about-icon-commitment.svg" alt="מחויבות ומסירות" style="width:150px;height:150px;object-fit:contain;" /></div>
              <div style="width:2rem;height:2px;background:#F2521B;margin-bottom:0.75rem;"></div>
              <p style="font-size:0.875rem;color:#7a7a7a;line-height:1.7;">אחריות אישית, מסירות ושאיפה תמידית למצוינות ולהשגת יעדי הקבוצה.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="background:#272424;padding:5rem 0;">
      <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;text-align:center;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:900;color:white;margin-bottom:1rem;letter-spacing:-0.01em;">
          מוכנים להתחיל פרויקט?
        </h2>
        <p style="color:rgba(255,255,255,0.6);font-size:1rem;margin-bottom:2.5rem;">
          צרו קשר עוד היום ונשמח לעמוד לרשותכם.
        </p>
        <a href="/contact.html"
          style="background:#F2521B;color:white;padding:1rem 2.5rem;font-family:'Rubik',sans-serif;font-weight:700;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;"
          onmouseover="this.style.background='#d4511a'"
          onmouseout="this.style.background='#F2521B'">
          צור קשר
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>

  `
}