export function createServicesGrid(): string {
    return `
      <style>.services-grid-wrap{grid-template-columns:repeat(2,1fr)!important}.services-card{height:160px!important}@media(min-width:640px){.services-grid-wrap{grid-template-columns:repeat(3,1fr)!important}.services-card{height:220px!important}}</style>
      <section aria-label="מגוון שירותים מקצועיים" style="background:#f5f5f5;padding:5rem 0;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">

          <!-- כותרת -->
          <div style="text-align:center;margin-bottom:3rem;">
            <h2 style="font-family:'Rubik',sans-serif;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:900;color:#272424;letter-spacing:-0.01em;">
              מגוון שירותים מקצועיים
            </h2>
          </div>

          <!-- 6 כרטיסיות שוות -->
          <div style="display:grid;gap:0.75rem;" class="services-grid-wrap"">

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/traffic-management.webp" alt="הסדרי תנועה" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">הסדרי תנועה</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/traffic-inspectors.webp" alt="פקחי תנועה" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">פקחי תנועה</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/road-marking.webp" alt="צביעה וסימון" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">צביעה וסימון</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/signage.webp" alt="שילוט ותמרור" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">שילוט ותמרור</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/safety-equipment.webp" alt="אביזרי בטיחות" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">אביזרי בטיחות</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/services.html" style="text-decoration:none;">
              <div style="border-radius:12px;overflow:hidden;position:relative;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;" class="services-card"
                onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <img src="/assets/images/services/lighting.webp" alt="תאורה" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.15) 60%,transparent 100%);"></div>
                <div style="position:absolute;bottom:0;right:0;left:0;padding:1.5rem;">
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <div style="width:3px;height:1.2rem;background:#F2521B;border-radius:2px;flex-shrink:0;"></div>
                    <span style="font-family:'Rubik',sans-serif;font-size:1.1rem;font-weight:800;color:white;">תאורה</span>
                  </div>
                </div>
              </div>
            </a>

          </div>

          <!-- כפתור לכל השירותים -->
          <div style="text-align:center;margin-top:3rem;">
            <a href="/services.html" class="cta-btn"
              style="background:#F2521B;color:white;padding:0.875rem 2.5rem;font-family:'Rubik',sans-serif;font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;border-radius:4px;"
              onmouseover="this.style.background='#d4511a'"
              onmouseout="this.style.background='#F2521B'">
              לכל השירותים
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    `
  }
