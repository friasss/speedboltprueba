export default function CtaSection({ onOpenPartnerContact }) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="reveal">
          <h2 className="cta-title">Apoya<br />al equipo<br /><span style={{ color: 'var(--cream)' }}>SpeedBolt-00.</span></h2>
          <p className="cta-subtitle">Quieres ser parte de la proxima generacion de motorsport dominicano? Conviertete en patrocinador o sigue cada actualizacion del equipo.</p>
        </div>
        <div className="cta-button-wrap reveal reveal-delay-2">
          <a
            href="#"
            className="cta-btn"
            data-cursor="hover"
            id="becomePartnerBtn"
            onClick={(event) => {
              event.preventDefault();
              onOpenPartnerContact();
            }}
          >
            <span>Convertirse en partner</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </a>
          <a href="#feed" className="cta-btn" data-cursor="hover" style={{ background: 'transparent', color: 'var(--black)', border: '2px solid var(--black)' }}>
            <span>Seguir transmisiones</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
