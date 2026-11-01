export function createProductsPage(): string {
  return `
    <style>
@media(max-width:767px){
  .products-grid{grid-template-columns:1fr!important;gap:1.25rem!important}
}
</style>
    <!-- HERO -->
    <section id="main-content" aria-label="המוצרים שלנו" style="background:#272424;padding:6rem 2rem 4rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <p style="color:#F2521B;font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 1rem;" aria-hidden="true">המוצרים שלנו</p>
        <h1 style="font-family:'Rubik',sans-serif;font-size:clamp(2rem,5vw,3.2rem);font-weight:900;color:#fff;margin:0 0 1.25rem;line-height:1.2;">
          כל מה שצריך לדרך,<br>
          <span style="color:#F2521B;">במקום אחד</span>
        </h1>
        <p style="color:rgba(255,255,255,0.65);font-size:1.05rem;line-height:1.75;margin:0;">
          אנו מספקים מגוון רחב של מוצרי בטיחות ושילוט לתשתיות הדרך. בחרו את הקטלוג הרלוונטי עבורכם.
        </p>
      </div>
    </section>

    <!-- CATALOG CARDS -->
    <section aria-label="קטלוגי מוצרים" style="background:#f9f9f9;padding:5rem 2rem;">
      <div style="max-width:1000px;margin:0 auto;">
        <div class="products-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;">

          <!-- כרטיס אביזרי בטיחות -->
          <a href="/safety-catalog.html" aria-label="קטלוג אביזרי בטיחות — לחצו לצפייה" style="text-decoration:none;" class="catalog-card-link">
            <div class="catalog-card"
              style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,0.08);transition:transform 0.3s,box-shadow 0.3s;height:100%;"
              onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 16px 48px rgba(0,0,0,0.14)';"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 20px rgba(0,0,0,0.08)';">
              <!-- תמונה עליונה -->
              <div style="height:220px;overflow:hidden;position:relative;">
                <img src="/assets/images/services/safety-equipment.webp" alt="תמונה של אביזרי בטיחות לתשתית הדרך"
                  style="width:100%;height:100%;object-fit:cover;display:block;">
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(39,36,36,0.35) 0%,transparent 60%);" aria-hidden="true"></div>
              </div>
              <!-- תוכן -->
              <div style="padding:2rem;">
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                  <span style="background:#F2521B;color:#fff;font-size:0.75rem;font-weight:700;padding:0.25rem 0.75rem;border-radius:999px;letter-spacing:0.05em;" aria-hidden="true">קטלוג</span>
                  <h2 style="font-family:'Rubik',sans-serif;font-size:1.5rem;font-weight:800;color:#272424;margin:0;">אביזרי בטיחות</h2>
                </div>
                <p style="color:#666;line-height:1.7;margin:0 0 1.5rem;font-size:0.95rem;">
                  קונוסים, גדרות, פסי האטה, מעצורי חניה, מראות פנורמיות ועוד — כל מה שצריך לתשתית דרך בטוחה ומסודרת.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.75rem;" aria-label="קטגוריות מוצרים">
                  ${['קונוסים','גדרות הפרדה','פסי האטה','מעצורי חניה','מראות פנורמיות','עיני חתול'].map(t =>
                    `<span style="background:#f3f3f3;color:#555;font-size:0.78rem;padding:0.3rem 0.7rem;border-radius:6px;">${t}</span>`
                  ).join('')}
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                  <span style="color:#F2521B;font-weight:700;font-size:0.95rem;">לצפייה בקטלוג <span aria-hidden="true">←</span></span>
                  <div style="width:40px;height:40px;background:#F2521B;border-radius:50%;display:flex;align-items:center;justify-content:center;" aria-hidden="true">
                    <span style="color:#fff;font-size:1.1rem;" aria-hidden="true">←</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- כרטיס שילוט ותמרור -->
          <a href="/signage-catalog.html" aria-label="קטלוג שילוט ותמרור — לחצו לצפייה" style="text-decoration:none;" class="catalog-card-link">
            <div class="catalog-card"
              style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,0.08);transition:transform 0.3s,box-shadow 0.3s;height:100%;"
              onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 16px 48px rgba(0,0,0,0.14)';"
              onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 20px rgba(0,0,0,0.08)';">
              <!-- תמונה עליונה -->
              <div style="height:220px;overflow:hidden;position:relative;">
                <img src="/assets/images/services/signage.webp" alt="תמונה של שלטים ותמרורי דרך"
                  style="width:100%;height:100%;object-fit:cover;display:block;">
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(39,36,36,0.35) 0%,transparent 60%);" aria-hidden="true"></div>
              </div>
              <!-- תוכן -->
              <div style="padding:2rem;">
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                  <span style="background:#272424;color:#fff;font-size:0.75rem;font-weight:700;padding:0.25rem 0.75rem;border-radius:999px;letter-spacing:0.05em;" aria-hidden="true">קטלוג</span>
                  <h2 style="font-family:'Rubik',sans-serif;font-size:1.5rem;font-weight:800;color:#272424;margin:0;">שילוט ותמרור</h2>
                </div>
                <p style="color:#666;line-height:1.7;margin:0 0 1.5rem;font-size:0.95rem;">
                  תמרורים תקניים, שלטי ענק, שילוט בהתאמה אישית — ייצור והתקנה מקצועית לכל סוג לקוח ופרויקט.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.75rem;" aria-label="קטגוריות מוצרים">
                  ${['תמרורים תקניים','שלטי הכוונה','שלטי ענק','שילוט מותאם אישית','שלטי חוצות','תמרור זמני'].map(t =>
                    `<span style="background:#f3f3f3;color:#555;font-size:0.78rem;padding:0.3rem 0.7rem;border-radius:6px;">${t}</span>`
                  ).join('')}
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                  <span style="color:#F2521B;font-weight:700;font-size:0.95rem;">לצפייה בקטלוג <span aria-hidden="true">←</span></span>
                  <div style="width:40px;height:40px;background:#272424;border-radius:50%;display:flex;align-items:center;justify-content:center;" aria-hidden="true">
                    <span style="color:#fff;font-size:1.1rem;" aria-hidden="true">←</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section aria-label="פנייה לעזרה בבחירת מוצר" style="background:#fff;padding:4rem 2rem;text-align:center;border-top:1px solid #eee;">
      <p style="color:#888;font-size:0.95rem;margin:0 0 0.5rem;">לא מצאתם מה שחיפשתם?</p>
      <a href="/contact.html" style="color:#F2521B;font-weight:700;font-size:1rem;text-decoration:none;border-bottom:2px solid #F2521B;padding-bottom:2px;">
        צרו איתנו קשר ונמצא פתרון מתאים
      </a>
    </section>
  `;
}
