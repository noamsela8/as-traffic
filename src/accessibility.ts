import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createFooter } from './components/footer'

const content = `
  <main id="main-content" style="background:#f9f9f9;padding:5rem 2rem 6rem;">
    <div style="max-width:820px;margin:0 auto;">

      <a href="/" style="color:#595959;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:2rem;">
        <span aria-hidden="true">→</span> חזרה לעמוד הבית
      </a>

      <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#272424;margin:0 0 0.5rem;">
        הצהרת נגישות
      </h1>
      <p style="color:#595959;font-size:0.9rem;margin:0 0 2.5rem;"><time datetime="2025-10">עודכן לאחרונה: אוקטובר 2025</time></p>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">מחויבות לנגישות</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          א.ס הסדרי תנועה בע"מ מחויבת להנגיש את אתר האינטרנט שלה לאנשים עם מוגבלויות, בהתאם לתקן הישראלי ת"י 5568 ולהנחיות WCAG 2.1 ברמה AA. אנו רואים בנגישות ערך מהותי ועובדים באופן שוטף לשיפורה.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">מה בוצע באתר</h2>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>תמיכה בקורא מסך — כל התמונות מכילות טקסט חלופי (alt)</li>
          <li>ניווט מלא באמצעות מקלדת — ניתן לגשת לכל הדפים ולכל הכפתורים</li>
          <li>כפתור "דלג לתוכן הראשי" בראש כל דף</li>
          <li>היררכיית כותרות תקינה (H1, H2, H3) בכל הדפים</li>
          <li>ניגודיות צבעים העומדת בדרישות WCAG AA</li>
          <li>תגיות ARIA לאלמנטים אינטראקטיביים (גלריות, תפריטים, חלונות קופצים)</li>
          <li>האתר מוגדר בשפה עברית (lang="he") ומותאם לכיוון RTL</li>
          <li>סגירת חלונות קופצים באמצעות מקש Escape</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">מגבלות ידועות</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          אנו עובדים באופן מתמיד על שיפור הנגישות. הגבלה ידועה נכון לתאריך עדכון זה:
        </p>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>סרטון הרקע בעמוד הבית מופעל אוטומטית — ניתן להשהות ולהפעיל אותו באמצעות כפתור ההשהיה שבפינה השמאלית התחתונה של הסרטון.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">פניות בנושא נגישות</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 1rem;">
          נתקלתם בבעיית נגישות או זקוקים לסיוע? אנחנו כאן לעזור. ניתן לפנות אלינו:
        </p>
        <address style="font-style:normal;display:flex;flex-direction:column;gap:0.6rem;">
          <p style="color:#555;margin:0;">
            <strong>טלפון:</strong>
            <a href="tel:0894700053" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">08-9470053</a>
          </p>
          <p style="color:#555;margin:0;">
            <strong>דוא"ל:</strong>
            <a href="mailto:office@as-traffic.co.il" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">office@as-traffic.co.il</a>
          </p>
          <p style="color:#555;margin:0;"><strong>שעות מענה:</strong> ימים א'–ה', 08:00–17:00</p>
        </address>
      </div>

      <div style="background:#272424;border-radius:12px;padding:2rem 2.5rem;">
        <p style="color:rgba(255,255,255,0.7);font-size:0.85rem;line-height:1.8;margin:0;">
          הצהרה זו נערכה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג–2013, ולתקן הישראלי ת"י 5568.
        </p>
      </div>

    </div>
  </main>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${content}
  ${createFooter()}
`

initNavbar()
