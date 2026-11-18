import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createFooter } from './components/footer'

const content = `
  <main id="main-content" role="main" style="background:#f9f9f9;padding:5rem 2rem 6rem;">
    <div style="max-width:820px;margin:0 auto;">

      <a href="/" style="color:#595959;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:2rem;">
        <span aria-hidden="true">←</span> חזרה לעמוד הבית
      </a>

      <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#272424;margin:0 0 0.5rem;">
        מדיניות פרטיות
      </h1>
      <p style="color:#595959;font-size:0.9rem;margin:0 0 2.5rem;"><time datetime="2026-11">עודכן לאחרונה: נובמבר 2026</time></p>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">כללי</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          א.ס הסדרי תנועה בע"מ (להלן: "החברה") מחויבת לשמירה על פרטיות המשתמשים באתר האינטרנט שלה. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך בעת שימוש באתרנו.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">איזה מידע אנו אוספים?</h2>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li><strong>מידע שאתה מוסר לנו:</strong> שם, כתובת דוא"ל, מספר טלפון ותוכן הפנייה — בעת מילוי טופס יצירת קשר באתר.</li>
          <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, זמן הביקור ודפים שנצפו — לצורכי אבטחה ושיפור חוויית המשתמש.</li>
          <li><strong>עוגיות (Cookies):</strong> האתר עשוי להשתמש בעוגיות טכניות חיוניות לתפקוד התקין של האתר. אין אנו משתמשים בעוגיות שיווקיות או מעקב מצד שלישי.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">כיצד אנו משתמשים במידע?</h2>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>מענה לפניות ובקשות שהגעת אלינו.</li>
          <li>שיפור השירות וחוויית המשתמש באתר.</li>
          <li>עמידה בדרישות חוקיות ורגולטוריות.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:1rem 0 0;">
          אנו לא מוכרים, מעבירים או משתפים את המידע האישי שלך עם גורמים חיצוניים, אלא אם כן הדבר נדרש על פי חוק.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">אבטחת מידע</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          האתר פועל בפרוטוקול HTTPS מוצפן. אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע שלך. עם זאת, אין אנו יכולים להבטיח אבטחה מוחלטת בסביבת האינטרנט.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">זכויותיך</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          בהתאם לחוק הגנת הפרטיות, התשמ"א–1981, יש לך זכות לעיין, לתקן ולמחוק את המידע האישי שלך. לפנייה בנושא:
        </p>
        <address style="font-style:normal;">
          <p style="color:#555;margin:0.3rem 0;">
            <strong>דוא"ל:</strong>
            <a href="mailto:office@as-traffic.co.il" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">office@as-traffic.co.il</a>
          </p>
          <p style="color:#555;margin:0.3rem 0;">
            <strong>טלפון:</strong>
            <a href="tel:0894700053" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">08-9470053</a>
          </p>
        </address>
      </div>

      <div style="background:#272424;border-radius:12px;padding:2rem 2.5rem;">
        <p style="color:rgba(255,255,255,0.7);font-size:0.85rem;line-height:1.8;margin:0;">
          מדיניות זו עשויה להתעדכן מעת לעת. שימוש מתמשך באתר לאחר שינויים מהווה הסכמה למדיניות המעודכנת. תאריך עדכון אחרון: נובמבר 2026.
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
