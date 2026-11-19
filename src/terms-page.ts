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
        תנאי שימוש
      </h1>
      <p style="color:#595959;font-size:0.9rem;margin:0 0 2.5rem;"><time datetime="2026-11">עודכן לאחרונה: נובמבר 2026</time></p>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">1. כללי וקבלת התנאים</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          ברוכים הבאים לאתר א.ס הסדרי תנועה בע"מ, ח.פ. רשום בישראל (להלן: "החברה"), בכתובת <strong>as-traffic.co.il</strong> (להלן: "האתר"). האתר מופעל על ידי החברה ומהווה חלון ראווה דיגיטלי לשירותיה ומוצריה בתחום הסדרי תנועה, בטיחות דרכים ושילוט.
        </p>
        <p style="color:#555;line-height:1.8;margin:0;">
          כניסה לאתר ו/או שימוש בו, לרבות גלישה, צפייה בתוכן ומילוי טפסים, מהווים הסכמה מלאה לתנאי שימוש אלה. אם אינך מסכים לאחד מהתנאים, עליך להימנע משימוש באתר.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">2. מהות האתר והמידע המוצג</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          האתר משמש לצרכי שיווק ומידע בלבד. כל המידע, התמונות, התיאורים ופרטי המוצרים והשירותים המוצגים באתר הם לצורכי הכרות ואינם מהווים הצעה מחייבת.
        </p>
        <p style="color:#555;line-height:1.8;margin:0;">
          <strong>פנייה דרך טופס יצירת הקשר אינה מהווה הסכם, הזמנה או התחייבות כלשהי מצד החברה.</strong> לאחר קבלת פנייתך, נציג החברה יצור איתך קשר, יבין את הצרכים המדויקים ויוציא הצעת מחיר רשמית ומפורטת לפי בקשתך. הצעת המחיר תהיה מחייבת רק לאחר אישורה בכתב על ידי החברה.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">3. שימוש מותר</h2>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>האתר מיועד לצרכים אישיים ועסקיים לגיטימיים בלבד.</li>
          <li>אין להעתיק, לשכפל, להפיץ, לפרסם מחדש או לעשות שימוש מסחרי בתכנים ללא אישור מפורש ומוקדם בכתב מהחברה.</li>
          <li>אין לעשות שימוש באתר לצרכים בלתי חוקיים, מזיקים, מטעים, מאיימים או פוגעניים.</li>
          <li>אין לנסות לחדור למערכות האתר, לסרוק אותו אוטומטית או לשבש את פעילותו.</li>
          <li>אין להציג את תכני האתר בתוך אתר אחר (iframe) ללא אישור.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">4. קניין רוחני</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          כל הזכויות בתוכן האתר, לרבות טקסטים, תמונות מוצרים, לוגואים, עיצוב, קוד המקור ושם המותג, שייכות לחברה ומוגנות בחוק זכויות היוצרים, התשס"ח–2007.
        </p>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>סימני המסחר ושם המותג "א.ס הסדרי תנועה" הינם קניינה הבלעדי של החברה.</li>
          <li>חלק מהתמונות באתר הופקו בכלי בינה מלאכותית (AI) ביוזמת החברה ולצרכיה — זכויות השימוש בהן שמורות לחברה.</li>
          <li>חלק מהתמונות ו/או מדיה חזותית אחרת הם ברישיון חינמי ממקורות חיצוניים מורשים. אין בכך כדי להעניק לצד שלישי זכות שימוש בהן.</li>
          <li>תמונות המוצרים המוצגות באתר אינן ניתנות לשימוש מסחרי ללא רישיון מפורש.</li>
          <li>ציטוט מתוכן האתר מותר לצרכי אינפורמציה בלבד, תוך קרדיט ברור לחברה.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">5. הגבלת אחריות</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          המידע באתר מסופק כמות שהוא ("as is"), למטרות מידע כלליות בלבד. החברה אינה מתחייבת לדיוק, שלמות או עדכניות המידע בכל עת.
        </p>
        <ul style="color:#555;line-height:2;margin:0 0 0.75rem;padding-right:1.5rem;">
          <li>החברה אינה אחראית לנזק ישיר, עקיף, מקרי או תוצאתי הנובע מהסתמכות על המידע המוצג באתר.</li>
          <li>החברה אינה אחראית לשיבושים טכניים, הפסקות שירות, וירוסים או כל תקלה באתר.</li>
          <li>תיאורי המוצרים והשירותים באתר הם כלליים; פרטים מדויקים ייקבעו בהסכם ספציפי מול נציג החברה.</li>
          <li>החברה שומרת לעצמה את הזכות לשנות, להסיר או לעדכן תכנים ללא הודעה מוקדמת.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0;">
          <strong>שירותי הסדרי התנועה והבטיחות מבוצעים בהתאם להסכמים נפרדים, תקנות ותקנים מחייבים. אחריות החברה על עבודות בשטח מוסדרת בחוזי ההתקשרות ולא על ידי תנאי שימוש אלה.</strong>
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">6. תהליך גיוס ומועמדויות</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          פנייה דרך עמוד הדרושים אינה מהווה הצעת עבודה מחייבת מצד החברה.
        </p>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>החברה תבחן מועמדויות לפי שיקול דעתה הבלעדי ואינה מחויבת לחזור לכל מועמד.</li>
          <li>הגשת קורות חיים מהווה הסכמה לשמירת הפרטים למשך עד שנה לצרכי גיוס.</li>
          <li>החברה שומרת על שוויון הזדמנויות ואינה מפלה על בסיס מין, גיל, דת, לאום, מוגבלות או כל עילה אחרת האסורה על פי חוק.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">7. קישורים לאתרים חיצוניים</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          האתר עשוי לכלול קישורים לאתרים חיצוניים לצרכי נוחות בלבד. החברה אינה אחראית לתכנים, מדיניות הפרטיות, דיוק או זמינות אתרים אלה. הכניסה לאתרים חיצוניים הינה באחריות המשתמש בלבד ואינה מהווה המלצה מצד החברה.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">8. דין וסמכות שיפוט</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          תנאי שימוש אלה כפופים לדיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית לכל מחלוקת הנובעת משימוש באתר או מתנאים אלה מסורה לבתי המשפט המוסמכים במחוז מרכז, ישראל. הצדדים מוותרים על כל טענת חוסר סמכות מקומית כלפי בתי המשפט האמורים.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">9. יצירת קשר</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">לכל שאלה, בירור או פנייה בנוגע לתנאי שימוש אלה:</p>
        <address style="font-style:normal;">
          <p style="color:#555;margin:0.3rem 0;">
            <strong>דוא"ל:</strong>
            <a href="mailto:office@as-traffic.co.il" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">office@as-traffic.co.il</a>
          </p>
          <p style="color:#555;margin:0.3rem 0;">
            <strong>טלפון:</strong>
            <a href="tel:0894700053" style="color:#F2521B;font-weight:700;text-decoration:none;margin-right:0.4rem;">08-9470053</a>
          </p>
          <p style="color:#555;margin:0.3rem 0;"><strong>שעות מענה:</strong> ימים א'–ה', 08:00–17:00</p>
        </address>
      </div>

      <div style="background:#272424;border-radius:12px;padding:2rem 2.5rem;">
        <p style="color:rgba(255,255,255,0.85);font-size:0.85rem;line-height:1.8;margin:0;">
          החברה שומרת לעצמה את הזכות לעדכן תנאי שימוש אלה בכל עת. שינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה לתנאים המעודכנים. תאריך עדכון אחרון: נובמבר 2026.
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
