import StatCard from '../molecules/StatCard';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">01 · El equipo</div>
          <h2 className="section-title">
            Bienvenidos
            <br />
            a <span className="accent">Speed Bolt</span>
          </h2>
        </div>
        <a href="#stem" className="section-link" data-cursor="hover">
          <span>Nuestra mision</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </a>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Somos un equipo dominicano que esta cambiando lo que significa hacer ingenieria estudiantil en el Caribe.
            Nacidos del mismo espiritu que mueve a las grandes escuderias de la <strong>Formula 1</strong>, construimos cada componente de SpeedBolt-00 con la misma obsesion por el detalle, la aerodinamica y el rendimiento.
          </p>
          <p>
            Speed Bolt no es solo un equipo de competencia. Es una declaracion: que Republica Dominicana puede formar la proxima generacion de ingenieros, disenadores y estrategas que el motorsport global necesita. Que el talento existe, lo unico que faltaba era la pista.
          </p>
          <p>
            Inspirados por el <strong>martin pescador</strong>, un ave que combina precision quirurgica con velocidad explosiva, el naranja electrico y el teal profundo definen nuestra identidad visual, nuestra forma de competir y la energia que llevamos al taller cada dia.
          </p>

          <div className="about-stats">
            <StatCard value="SpeedBolt-00" label="Modelo actual" />
            <StatCard value="2026" label="Temporada" />
            <StatCard value="100%" label="Hecho en RD" />
            <StatCard value="Infinity" label="Combustible: pasion" />
          </div>
        </div>

        <div className="about-visual reveal reveal-delay-2">
          <img className="kingfisher-photo" src="/assets/martin-pescador.jpg" alt="Martin pescador real" />
          <div className="about-visual-grid" />
          <div className="about-visual-content">
            <div className="label">Identidad visual · 2026</div>
            <div className="title">Precision<br />real del<br />martin<br />pescador.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
