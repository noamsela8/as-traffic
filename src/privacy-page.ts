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
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">1. כללי</h2>
        <p style="color:#555;line-height:1.8;margin:0;">
          א.ס הסדרי תנועה בע"מ, ח.פ. רשום בישראל (להלן: "החברה"), מחויבת לשמירה על פרטיות המשתמשים באתר האינטרנט שלה בכתובת <strong>as-traffic.co.il</strong> (להלן: "האתר"). מדיניות פרטיות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, עם מי אנו משתפים אותם וכיצד אנו מגנים עליהם, בהתאם לחוק הגנת הפרטיות, התשמ"א–1981 ותיקוניו.
        </p>
        <p style="color:#555;line-height:1.8;margin:1rem 0 0;">
          השימוש באתר כפוף למדיניות פרטיות זו. מידע אישי שתמסור לנו יטופל אך ורק למטרות המפורטות במדיניות זו ובהתאם להוראות הדין.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">2. איזה מידע אנו אוספים?</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;"><strong>מידע שאתה מוסר לנו ישירות:</strong></p>
        <ul style="color:#555;line-height:2;margin:0 0 1rem;padding-right:1.5rem;">
          <li><strong>טופס יצירת קשר:</strong> שם מלא, מספר טלפון, כתובת דוא"ל, נושא הפנייה ותוכן ההודעה.</li>
          <li><strong>הגשת מועמדות:</strong> פרטים שתכלול בקורות החיים ובפנייה לכתובת הדוא"ל המיועדת לכך.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;"><strong>מידע טכני שנאסף אוטומטית:</strong></p>
        <ul style="color:#555;line-height:2;margin:0;padding-right:1.5rem;">
          <li>כתובת IP של המשתמש.</li>
          <li>סוג דפדפן ומערכת הפעלה.</li>
          <li>תאריך ושעת הגישה לאתר.</li>
          <li>דפים שנצפו ונתיבי גלישה — לצורך אבטחה ושיפור האתר בלבד.</li>
        </ul>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">3. ספקי שירות צד שלישי</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">האתר עושה שימוש בשירותים חיצוניים לצורך תפעולו. בעת שימוש בשירותים אלה, חלקים מהמידע שלך עוברים לשרתים של ספקים אלה:</p>
        <ul style="color:#555;line-height:2;margin:0 0 1rem;padding-right:1.5rem;">
          <li>
            <strong>Web3Forms (web3forms.com):</strong> שירות העברת טפסים. בעת שליחת טופס יצירת קשר, המידע שמילאת (שם, טלפון, דוא"ל, הודעה) מועבר לשרתי Web3Forms לצורך העברתו אלינו בדוא"ל. לפרטים ראה את מדיניות הפרטיות של Web3Forms בכתובת web3forms.com/privacy.
          </li>
          <li>
            <strong>Vercel (vercel.com):</strong> שירות אחסון ופריסה של האתר. שרתי Vercel שומרים יומני גישה הכוללים כתובות IP ונתוני תעבורה, לפי מדיניות הפרטיות שלהם.
          </li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0;">
          מלבד ספקי שירות אלה, איננו מוכרים, מעבירים או משתפים את המידע האישי שלך עם כל גורם אחר, אלא אם כן הדבר נדרש על פי חוק או צו שיפוטי מחייב.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">4. כיצד אנו משתמשים במידע?</h2>
        <ul style="color:#555;line-height:2;margin:0 0 1rem;padding-right:1.5rem;">
          <li>מענה לפניות, בקשות ושאלות שהגשת דרך טופס יצירת הקשר.</li>
          <li>יצירת קשר חוזר לבירור צרכים ומתן הצעת מחיר מותאמת לפי בקשתך.</li>
          <li>בחינת מועמדויות לתפקידים פתוחים בחברה.</li>
          <li>שיפור תפקוד האתר וחוויית המשתמש.</li>
          <li>עמידה בדרישות חוקיות ורגולטוריות.</li>
          <li>הגנה על אבטחת האתר ומניעת שימוש לרעה.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0;">
          <strong>אין אנו משתמשים במידע לצרכי שיווק ישיר, דיוור פרסומי, או יצירת קשר ביוזמתנו שלא לצורך מענה לפנייתך.</strong>
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">5. משך שמירת המידע</h2>
        <ul style="color:#555;line-height:2;margin:0 0 0.75rem;padding-right:1.5rem;">
          <li><strong>פניות דרך טופס הקשר:</strong> נשמרות עד 3 שנים ממועד הפנייה, או עד לסיום הטיפול בה, לפי המאוחר.</li>
          <li><strong>מועמדויות לעבודה:</strong> קורות חיים ופרטי מועמד נשמרים לתקופה הנדרשת לצורך בחינת המועמדות. לאחר סיום הליך הגיוס, המידע נמחק אלא אם ניתנה הסכמה מפורשת של המועמד לשמירה לצורך הצעות עבודה עתידיות.</li>
          <li><strong>יומני גישה (logs):</strong> נשמרים על ידי ספק האחסון Vercel בהתאם למדיניות הפרטיות שלהם. תקופת שמירת היומנים נקבעת על ידי Vercel ועשויה להשתנות בהתאם לתנאי השירות שלהם.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0;">
          לאחר תום תקופת השמירה, המידע נמחק או מאונונם באופן שאינו מאפשר זיהוי.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">6. עוגיות (Cookies)</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          האתר משתמש בעוגיות טכניות חיוניות בלבד, הנדרשות לתפקוד התקין שלו. <strong>אין אנו משתמשים בעוגיות שיווקיות, עוגיות מעקב, או כלי ניתוח צד שלישי כגון Google Analytics.</strong>
        </p>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          ניתן לחסום עוגיות בהגדרות הדפדפן שלך, אולם פעולה זו עשויה לפגוע בתפקוד מסוים של האתר.
        </p>
        <p style="color:#555;line-height:1.8;margin:0;">
          <strong>אחסון מקומי (localStorage):</strong> תפריט הנגישות שבאתר שומר את העדפות התצוגה שלך (כגון גודל טקסט וניגודיות) באופן מקומי בדפדפן שלך בלבד. מידע זה אינו מועבר לשרתינו או לכל גורם אחר, ואינו מקושר לזהותך האישית.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">7. אבטחת מידע</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          האתר פועל בפרוטוקול HTTPS מוצפן. אנו נוקטים באמצעי אבטחה סבירים ומקובלים להגנה על המידע שלך מפני גישה בלתי מורשית, שינוי, חשיפה או מחיקה.
        </p>
        <p style="color:#555;line-height:1.8;margin:0;">
          עם זאת, אין ביכולתנו להבטיח אבטחה מוחלטת בסביבת האינטרנט. העברת מידע דרך האינטרנט כרוכה תמיד בסיכון מסוים, ולמרות אמצעי הזהירות שאנו נוקטים, לא ניתן להבטיח הגנה מוחלטת מפני כל איום.
        </p>
      </div>

      <div style="background:#fff;border-radius:12px;padding:2.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1.5rem;">
        <h2 style="font-family:'Rubik',sans-serif;font-size:1.2rem;font-weight:800;color:#272424;margin:0 0 1rem;">8. זכויותיך</h2>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">
          בהתאם לחוק הגנת הפרטיות, התשמ"א–1981, יש לך הזכויות הבאות:
        </p>
        <ul style="color:#555;line-height:2;margin:0 0 1rem;padding-right:1.5rem;">
          <li><strong>עיון:</strong> לקבל פירוט של המידע האישי שלך המוחזק אצלנו.</li>
          <li><strong>תיקון:</strong> לדרוש תיקון מידע שגוי או לא מדויק.</li>
          <li><strong>מחיקה:</strong> לדרוש מחיקת המידע האישי שלך, בכפוף לחובות חוקיות לשמירתו.</li>
          <li><strong>התנגדות:</strong> להתנגד לשימוש במידע שלך לכל מטרה שאינה עמידה בחובה חוקית.</li>
        </ul>
        <p style="color:#555;line-height:1.8;margin:0 0 0.75rem;">לממש את זכויותיך, פנה אלינו. נטפל בפנייתך בהתאם להוראות הדין:</p>
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
          החברה שומרת לעצמה את הזכות לעדכן מדיניות פרטיות זו בכל עת. שינויים מהותיים יפורסמו באתר ויכנסו לתוקף בהתאם להוראות הדין. מומלץ לעיין במדיניות מעת לעת. תאריך עדכון אחרון: נובמבר 2026.
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
