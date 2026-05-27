export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">03 · Por que importa</div>
          <h2 className="section-title">Mas alla<br />de la <span className="accent">pista</span></h2>
        </div>
      </div>

      <div className="impact-cards">
        <div className="impact-card reveal" data-num="01" data-cursor="hover">
          <div className="impact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>
          <h4>Educacion STEM real</h4>
          <p>Los estudiantes aplican fisica, matematicas, ingenieria y diseno industrial a un proyecto real con consecuencias medibles. No es teoria: o el auto vuela, o pierde.</p>
        </div>

        <div className="impact-card reveal reveal-delay-1" data-num="02" data-cursor="hover">
          <div className="impact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h4>Trabajo en equipo</h4>
          <p>Cada miembro tiene un rol especifico: piloto, ingeniero, disenador, estratega de marca, manager. Aprenden a ejecutar bajo presion, con plazos reales y metricas reales.</p>
        </div>

        <div className="impact-card reveal reveal-delay-2" data-num="03" data-cursor="hover">
          <div className="impact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <h4>Visibilidad internacional</h4>
          <p>Los equipos ganadores compiten contra escuderias de Europa, Asia, America. Es el escenario donde el talento dominicano se mide con el mundo y suele sorprender.</p>
        </div>
      </div>
    </section>
  );
}
