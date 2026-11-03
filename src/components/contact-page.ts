export function createContactPage(): string {
  return `
  <!-- HERO -->
  <section id="main-content" style="
    background: linear-gradient(135deg, #272424 0%, #3a3232 100%);
    padding: 100px 24px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  ">
    <div style="
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 60% 50%, rgba(242,82,27,0.12) 0%, transparent 70%);
      pointer-events: none;
    " aria-hidden="true"></div>
    <div style="position: relative; z-index: 1; max-width: 680px; margin: 0 auto;">
      <div style="
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(242,82,27,0.15); border: 1px solid rgba(242,82,27,0.3);
        border-radius: 100px; padding: 6px 18px; margin-bottom: 24px;
      " aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span style="color: #F2521B; font-size: 13px; font-weight: 600; font-family: 'Rubik', sans-serif;">צרו איתנו קשר</span>
      </div>
      <h1 style="
        font-family: 'Rubik', sans-serif; font-weight: 800;
        font-size: clamp(2rem, 5vw, 3rem);
        color: #fff; margin: 0 0 16px; line-height: 1.2;
      ">נשמח לשמוע מכם</h1>
      <p style="
        font-family: 'Rubik', sans-serif; font-size: 1.15rem;
        color: rgba(255,255,255,0.65); margin: 0; line-height: 1.7;
      ">בין אם יש לכם שאלה, בקשת הצעת מחיר, או שאתם מעוניינים לשמוע עוד על השירותים שלנו — אנחנו כאן.</p>
    </div>
  </section>

  <!-- MAIN CONTENT -->
  <section aria-label="טופס יצירת קשר ופרטי התקשרות" style="
    background: #f8f7f5; padding: 80px 24px;
    min-height: 600px;
  ">
    <div style="
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 420px; gap: 60px;
      align-items: start;
    " class="contact-grid">

      <!-- FORM -->
      <div style="
        background: #fff; border-radius: 20px;
        padding: 48px; box-shadow: 0 4px 40px rgba(0,0,0,0.07);
      ">
        <h2 style="
          font-family: 'Rubik', sans-serif; font-weight: 700;
          font-size: 1.5rem; color: #272424; margin: 0 0 8px;
        ">שלחו לנו הודעה</h2>
        <p style="
          font-family: 'Rubik', sans-serif; color: #888;
          font-size: 0.95rem; margin: 0 0 36px;
        " id="form-desc">נחזור אליכם בהקדם האפשרי. שדות המסומנים ב-* הם שדות חובה.</p>

        <form
          id="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          aria-describedby="form-desc"
          novalidate
          style="display: flex; flex-direction: column; gap: 20px;"
        >
          <input type="hidden" name="access_key" value="89ca17d2-9364-4373-9a52-b6667493d329" />
          <input type="hidden" name="subject" value="פנייה חדשה מאתר א.ס הסדרי תנועה" />
          <input type="hidden" name="redirect" value="false" />
          <input type="checkbox" name="botcheck" style="display:none;" tabindex="-1" aria-hidden="true" />

          <!-- Row: name + phone -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" class="form-row">
            <div>
              <label for="contact-name" style="
                display: block; font-family: 'Rubik', sans-serif;
                font-size: 0.88rem; font-weight: 600; color: #444; margin-bottom: 8px;
              ">שם מלא <span aria-label="שדה חובה" style="color:#F2521B;">*</span></label>
              <input
                type="text" name="name" id="contact-name" required
                placeholder="ישראל ישראלי"
                autocomplete="name"
                aria-required="true"
                style="
                  width: 100%; padding: 13px 16px; box-sizing: border-box;
                  border: 1.5px solid #e5e5e5; border-radius: 10px;
                  font-family: 'Rubik', sans-serif; font-size: 1rem;
                  color: #272424; background: #fafafa;
                  transition: border-color 0.2s, box-shadow 0.2s; outline: none;
                "
                onfocus="this.style.borderColor='#F2521B';this.style.boxShadow='0 0 0 3px rgba(242,82,27,0.1)'"
                onblur="this.style.borderColor='#e5e5e5';this.style.boxShadow='none'"
              />
            </div>
            <div>
              <label for="contact-phone" style="
                display: block; font-family: 'Rubik', sans-serif;
                font-size: 0.88rem; font-weight: 600; color: #444; margin-bottom: 8px;
              ">טלפון <span aria-label="שדה חובה" style="color:#F2521B;">*</span></label>
              <input
                type="tel" name="phone" id="contact-phone" required
                placeholder="050-0000000"
                autocomplete="tel"
                aria-required="true"
                style="
                  width: 100%; padding: 13px 16px; box-sizing: border-box;
                  border: 1.5px solid #e5e5e5; border-radius: 10px;
                  font-family: 'Rubik', sans-serif; font-size: 1rem;
                  color: #272424; background: #fafafa; direction: ltr; text-align: right;
                  transition: border-color 0.2s, box-shadow 0.2s; outline: none;
                "
                onfocus="this.style.borderColor='#F2521B';this.style.boxShadow='0 0 0 3px rgba(242,82,27,0.1)'"
                onblur="this.style.borderColor='#e5e5e5';this.style.boxShadow='none'"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="contact-email" style="
              display: block; font-family: 'Rubik', sans-serif;
              font-size: 0.88rem; font-weight: 600; color: #444; margin-bottom: 8px;
            ">כתובת אימייל <span aria-label="שדה חובה" style="color:#F2521B;">*</span></label>
            <input
              type="email" name="email" id="contact-email" required
              placeholder="example@email.com"
              autocomplete="email"
              aria-required="true"
              style="
                width: 100%; padding: 13px 16px; box-sizing: border-box;
                border: 1.5px solid #e5e5e5; border-radius: 10px;
                font-family: 'Rubik', sans-serif; font-size: 1rem;
                color: #272424; background: #fafafa; direction: ltr; text-align: right;
                transition: border-color 0.2s, box-shadow 0.2s; outline: none;
              "
              onfocus="this.style.borderColor='#F2521B';this.style.boxShadow='0 0 0 3px rgba(242,82,27,0.1)'"
              onblur="this.style.borderColor='#e5e5e5';this.style.boxShadow='none'"
            />
          </div>

          <!-- Subject -->
          <div>
            <label for="contact-inquiry" style="
              display: block; font-family: 'Rubik', sans-serif;
              font-size: 0.88rem; font-weight: 600; color: #444; margin-bottom: 8px;
            ">נושא הפנייה</label>
            <select
              name="inquiry_type" id="contact-inquiry"
              style="
                width: 100%; padding: 13px 16px; box-sizing: border-box;
                border: 1.5px solid #e5e5e5; border-radius: 10px;
                font-family: 'Rubik', sans-serif; font-size: 1rem;
                color: #272424; background: #fafafa;
                appearance: none; -webkit-appearance: none;
                background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");
                background-repeat: no-repeat; background-position: left 16px center;
                cursor: pointer; transition: border-color 0.2s; outline: none;
              "
              onfocus="this.style.borderColor='#F2521B'"
              onblur="this.style.borderColor='#e5e5e5'"
            >
              <option value="">בחרו נושא...</option>
              <option value="הצעת מחיר">בקשת הצעת מחיר</option>
              <option value="שירותי תנועה">שירותי הסדרת תנועה</option>
              <option value="מוצרים">מוצרים ואביזרים</option>
              <option value="שיתוף פעולה">שיתוף פעולה</option>
              <option value="אחר">אחר</option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label for="contact-message" style="
              display: block; font-family: 'Rubik', sans-serif;
              font-size: 0.88rem; font-weight: 600; color: #444; margin-bottom: 8px;
            ">הודעה <span aria-label="שדה חובה" style="color:#F2521B;">*</span></label>
            <textarea
              name="message" id="contact-message" required
              rows="5"
              placeholder="ספרו לנו במה נוכל לעזור..."
              aria-required="true"
              style="
                width: 100%; padding: 13px 16px; box-sizing: border-box;
                border: 1.5px solid #e5e5e5; border-radius: 10px;
                font-family: 'Rubik', sans-serif; font-size: 1rem;
                color: #272424; background: #fafafa; resize: vertical;
                transition: border-color 0.2s, box-shadow 0.2s; outline: none;
                line-height: 1.6;
              "
              onfocus="this.style.borderColor='#F2521B';this.style.boxShadow='0 0 0 3px rgba(242,82,27,0.1)'"
              onblur="this.style.borderColor='#e5e5e5';this.style.boxShadow='none'"
            ></textarea>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            id="submit-btn"
            style="
              background: #F2521B; color: #fff;
              border: none; border-radius: 12px;
              padding: 16px 32px; font-family: 'Rubik', sans-serif;
              font-size: 1rem; font-weight: 700; cursor: pointer;
              transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
              display: flex; align-items: center; justify-content: center; gap: 10px;
              box-shadow: 0 4px 20px rgba(242,82,27,0.3);
            "
            onmouseover="if(!this.disabled){this.style.background='#d94415';this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 24px rgba(242,82,27,0.4)'}"
            onmouseout="if(!this.disabled){this.style.background='#F2521B';this.style.transform='translateY(0)';this.style.boxShadow='0 4px 20px rgba(242,82,27,0.3)'}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            שליחת הפנייה
          </button>

          <!-- Success / Error messages -->
          <div id="form-success" role="alert" aria-live="polite" style="
            display: none; background: #f0fdf4; border: 1.5px solid #86efac;
            border-radius: 12px; padding: 16px 20px;
            font-family: 'Rubik', sans-serif; color: #166534;
            font-size: 0.95rem; text-align: center;
          ">
            ✅ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
          </div>
          <div id="form-error" role="alert" aria-live="polite" style="
            display: none; background: #fef2f2; border: 1.5px solid #fca5a5;
            border-radius: 12px; padding: 16px 20px;
            font-family: 'Rubik', sans-serif; color: #991b1b;
            font-size: 0.95rem; text-align: center;
          ">
            ❌ אירעה שגיאה בשליחה. אנא נסו שנית או צרו קשר ישירות.
          </div>
        </form>
      </div>

      <!-- SIDEBAR -->
      <div class="contact-sidebar" style="display: flex; flex-direction: column; gap: 24px;">

        <!-- Contact info card -->
        <div class="contact-info-card" style="
          background: #272424; border-radius: 20px; padding: 40px 36px;
          color: #fff;
        ">
          <h2 style="
            font-family: 'Rubik', sans-serif; font-weight: 700;
            font-size: 1.25rem; color: #fff; margin: 0 0 28px;
          ">פרטי התקשרות</h2>

          <address style="font-style:normal;display: flex; flex-direction: column; gap: 24px;">

            <!-- Phone -->
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="
                width: 44px; height: 44px; border-radius: 12px;
                background: rgba(242,82,27,0.15); border: 1px solid rgba(242,82,27,0.3);
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
              " aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div>
                <div style="font-family: 'Rubik', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 3px;">טלפון</div>
                <a href="tel:0894700053" aria-label="התקשר אלינו: 08-9470053" style="
                  font-family: 'Rubik', sans-serif; font-size: 1.1rem; font-weight: 600;
                  color: #fff; text-decoration: none; direction: ltr; display: block;
                ">08-9470053</a>
              </div>
            </div>

            <!-- Email -->
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="
                width: 44px; height: 44px; border-radius: 12px;
                background: rgba(242,82,27,0.15); border: 1px solid rgba(242,82,27,0.3);
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
              " aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <div style="font-family: 'Rubik', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 3px;">אימייל</div>
                <a href="mailto:office@astraffic.co.il" aria-label="שלח אימייל ל: office@astraffic.co.il" style="
                  font-family: 'Rubik', sans-serif; font-size: 0.95rem; font-weight: 600;
                  color: #fff; text-decoration: none; direction: ltr; display: block;
                ">office@astraffic.co.il</a>
              </div>
            </div>

            <!-- Location -->
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="
                width: 44px; height: 44px; border-radius: 12px;
                background: rgba(242,82,27,0.15); border: 1px solid rgba(242,82,27,0.3);
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
              " aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div>
                <div style="font-family: 'Rubik', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 3px;">כתובת</div>
                <span style="font-family: 'Rubik', sans-serif; font-size: 1rem; font-weight: 600; color: #fff;">בית עוזיאל</span>
              </div>
            </div>

            <!-- Hours -->
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="
                width: 44px; height: 44px; border-radius: 12px;
                background: rgba(242,82,27,0.15); border: 1px solid rgba(242,82,27,0.3);
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
              " aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
              </div>
              <div>
                <div style="font-family: 'Rubik', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 3px;">שעות פעילות</div>
                <span style="font-family: 'Rubik', sans-serif; font-size: 1rem; font-weight: 600; color: #fff;"><time>א׳–ה׳ &nbsp;08:00–17:00</time></span>
              </div>
            </div>

          </address>
        </div>

        <!-- Quick actions card -->
        <div class="contact-quick-card" style="
          background: #fff; border-radius: 20px; padding: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06); border: 1.5px solid #f0eeec;
        ">
          <h2 style="
            font-family: 'Rubik', sans-serif; font-weight: 700;
            font-size: 1rem; color: #272424; margin: 0 0 20px;
          ">פנייה מהירה</h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <a href="tel:0894700053" aria-label="התקשר אלינו: 08-9470053" style="
              display: flex; align-items: center; justify-content: center; gap: 10px;
              background: #272424; color: #fff;
              border-radius: 12px; padding: 14px 20px;
              font-family: 'Rubik', sans-serif; font-size: 0.95rem; font-weight: 700;
              text-decoration: none; transition: background 0.2s, transform 0.15s;
            "
            onmouseover="this.style.background='#3a3232';this.style.transform='translateY(-1px)'"
            onmouseout="this.style.background='#272424';this.style.transform='translateY(0)'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2521B" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              08-9470053
            </a>
            <a href="https://wa.me/972505656849" target="_blank" rel="noopener noreferrer" aria-label="שלח הודעת וואטסאפ (נפתח בחלון חדש)" style="
              display: flex; align-items: center; justify-content: center; gap: 10px;
              background: #25D366; color: #fff;
              border-radius: 12px; padding: 14px 20px;
              font-family: 'Rubik', sans-serif; font-size: 0.95rem; font-weight: 700;
              text-decoration: none; transition: background 0.2s, transform 0.15s;
            "
            onmouseover="this.style.background='#1ebe5d';this.style.transform='translateY(-1px)'"
            onmouseout="this.style.background='#25D366';this.style.transform='translateY(0)'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              וואטסאפ
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <style>
    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
      }
    }
    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr !important;
      }
    }
    @media (max-width: 767px) {
      .contact-sidebar { order: -1 !important; }
      .contact-quick-card { order: -1 !important; }
      .contact-info-card { order: 1 !important; }
    }
  </style>
  `
}

export function initContactPage(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement
  if (form) {
    form.addEventListener('submit', handleSubmit)
  }

  async function handleSubmit(e: Event) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const btn = document.getElementById('submit-btn') as HTMLButtonElement
    const successEl = document.getElementById('form-success')!
    const errorEl = document.getElementById('form-error')!

    // Reset messages
    successEl.style.display = 'none'
    errorEl.style.display = 'none'

    // Basic validation
    const nameInput = form.querySelector('#contact-name') as HTMLInputElement
    const phoneInput = form.querySelector('#contact-phone') as HTMLInputElement
    const emailInput = form.querySelector('#contact-email') as HTMLInputElement
    const messageInput = form.querySelector('#contact-message') as HTMLTextAreaElement

    if (!nameInput.value.trim() || !phoneInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      errorEl.textContent = '❌ יש למלא את כל שדות החובה המסומנים ב-*'
      errorEl.style.display = 'block'
      errorEl.focus()
      return
    }

    // Loading state
    btn.disabled = true
    btn.setAttribute('aria-disabled', 'true')
    btn.style.opacity = '0.7'
    btn.style.cursor = 'not-allowed'
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true" style="animation: spin 1s linear infinite">
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z"/>
      </svg>
      שולח...
    `

    // Inject keyframe once
    if (!document.getElementById('spin-style')) {
      const s = document.createElement('style')
      s.id = 'spin-style'
      s.textContent = '@keyframes spin { to { transform: rotate(360deg); } }'
      document.head.appendChild(s)
    }

    try {
      const formData = new FormData(form)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()

      if (data.success) {
        form.reset()
        successEl.style.display = 'block'
        successEl.focus()
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      } else {
        errorEl.textContent = '❌ אירעה שגיאה בשליחה. אנא נסו שנית או צרו קשר ישירות.'
        errorEl.style.display = 'block'
        errorEl.focus()
      }
    } catch {
      errorEl.textContent = '❌ אירעה שגיאה בשליחה. אנא נסו שנית או צרו קשר ישירות.'
      errorEl.style.display = 'block'
      errorEl.focus()
    } finally {
      btn.disabled = false
      btn.removeAttribute('aria-disabled')
      btn.style.opacity = '1'
      btn.style.cursor = 'pointer'
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        שליחת הפנייה
      `
    }
  }
}
