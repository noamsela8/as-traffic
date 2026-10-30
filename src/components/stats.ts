export function createStats(): string {
    return `
      <section aria-label="נתוני החברה" style="background:#F2521B;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
          <dl style="display:grid;grid-template-columns:repeat(4,1fr);margin:0;padding:0;">

            <div style="padding:3rem 1.5rem;text-align:center;border-left:1px solid rgba(255,255,255,0.2);">
              <dd style="font-family:'Rubik',sans-serif;font-size:3.5rem;font-weight:900;color:white;line-height:1;letter-spacing:-0.02em;margin:0 0 0.5rem;">25+</dd>
              <dt style="font-size:0.875rem;color:#1f1c1c;margin-top:0.5rem;letter-spacing:0.04em;font-weight:700;">שנות ניסיון</dt>
            </div>

            <div style="padding:3rem 1.5rem;text-align:center;border-left:1px solid rgba(255,255,255,0.2);">
              <dd style="font-family:'Rubik',sans-serif;font-size:3.5rem;font-weight:900;color:white;line-height:1;letter-spacing:-0.02em;margin:0 0 0.5rem;">500+</dd>
              <dt style="font-size:0.875rem;color:#1f1c1c;margin-top:0.5rem;letter-spacing:0.04em;font-weight:700;">פרויקטים</dt>
            </div>

            <div style="padding:3rem 1.5rem;text-align:center;border-left:1px solid rgba(255,255,255,0.2);">
              <dd style="font-family:'Rubik',sans-serif;font-size:3.5rem;font-weight:900;color:white;line-height:1;letter-spacing:-0.02em;margin:0 0 0.5rem;">ארצי</dd>
              <dt style="font-size:0.875rem;color:#1f1c1c;margin-top:0.5rem;letter-spacing:0.04em;font-weight:700;">פריסת שירות</dt>
            </div>

            <div style="padding:3rem 1.5rem;text-align:center;">
              <dd style="font-family:'Rubik',sans-serif;font-size:3.5rem;font-weight:900;color:white;line-height:1;letter-spacing:-0.02em;margin:0 0 0.5rem;">200+</dd>
              <dt style="font-size:0.875rem;color:#1f1c1c;margin-top:0.5rem;letter-spacing:0.04em;font-weight:700;">לקוחות</dt>
            </div>

          </dl>
        </div>
      </section>
    `
  }
