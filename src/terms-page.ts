import './style.css'
import { createNavbar, initNavbar } from './components/navbar'
import { createFooter } from './components/footer'

const content = `
  <main id="main-content" role="main" style="background:#f9f9f9;padding:5rem 2rem 6rem;">
    <div style="max-width:820px;margin:0 auto;">

      <a href="/" style="color:#595959;font-size:0.85rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:2rem;">
        <span aria-hidden="true">→</span> חזרה לעמוד הבית
      </a>

      <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#272424;margin:0 0 0.5rem;">
        תנאי שימוש
      </h1>
      <p style="color:#595959;font-size:0.9rem;margin:0 0 2.5rem;"><time datetime="2026-11">עודכן לאחרונה: נובמבר 2026</time></p>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">כללי</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          ברוכים הבאים לאתר א.ס הסדרי תנועה בע"מ (להלן: "החברה" ו/או "האתר"). השימוש באתר זה כפוף לתנאי שימוש אלה. אנא קרא אותם בעיון לפני השימוש באתר. שימוש באתר מהווה הסכמה לתנאי שימוש אלה.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">שימוש מותר</h2>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>האתר מיועד לצרכים אישיים ועסקיים לגיטימיים בלבד.</li>
          <li>אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכנים ללא אישור מפורש בכתב מהחברה.</li>
          <li>אין לעשות שימוש באתר לצרכים בלתי חוקיים, מזיקים או מטעים.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">קניין רוחני</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          כל הזכויות בתוכן האתר, לרבות טקסטים, תמונות, לוגואים ועיצוב, שייכות לחברה. אין לעשות בהם שימוש ללא אישור מפורש. סימני המסחר ושם המותג "א.ס הסדרי תנועה" הינם קניינה הבלעדי של החברה.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">הגבלת אחריות</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          המידע באתר מסופק כמות שהוא ("as is"). החברה אינה אחראית לנזק ישיר, עקיף או תוצאתי הנובע מהסתמכות על המידע באתר. החברה שומרת לעצמה את הזכות לשנות, להסיר או לעדכן תכנים ללא הודעה מוקדמת.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">קישורים לאתרים חיצוניים</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          האתר עשוי לכלול קישורים לאתרים חיצוניים. החברה אינה אחראית לתכנים ולמדיניות הפרטיות של אתרים אלה. הכניסה לאתרים חיצוניים הינה באחריות המשתמש בלבד.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">דין וסמכות שיפוט</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          תנאי שימוש אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית לכל מחלוקת הנובעת מתנאים אלה מסורה לבתי המשפט המוסמכים במחוז מרכז.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">יצירת קשר</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">לכל שאלה בנוגע לתנאי שימוש אלה:</p>
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
          החברה שומרת לעצמה את הזכות לעדכן תנאי שימוש אלה בכל עת. שינויים ייכנסו לתוקף עם פרסומם באתר. תאריך עדכון אחרון: נובמבר 2026.
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
