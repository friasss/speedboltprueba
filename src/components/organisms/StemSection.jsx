export default function StemSection() {
  return (
    <section className="stem-section" id="stem">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">02 · La competencia</div>
          <h2 className="section-title">Que es <span className="accent">STEM Racing</span>?</h2>
        </div>
      </div>

      <div className="stem-grid">
        <div className="stem-content reveal">
          <h3>El <span className="gradient">campeonato global</span> de mini-bolidos.</h3>
          <p>STEM Racing (anteriormente conocido como F1 in Schools) es la competencia internacional mas prestigiosa donde estudiantes disenan, fabrican y compiten con autos de carrera a escala impulsados por cartuchos de CO2. Cada equipo es una mini-escuderia: ingenieros, disenadores, estrategas, especialistas de marketing y un piloto.</p>
          <p>Los equipos compiten en pistas oficiales de <strong style={{ color: 'var(--orange)' }}>20 metros</strong>, donde los autos alcanzan velocidades superiores a <strong style={{ color: 'var(--orange)' }}>80 km/h</strong> y el cronometro mide en milesimas. Ganar requiere perfeccion: aerodinamica, peso, angulo de ataque, materiales, manufactura.</p>

          <ul className="stem-features">
            <li><span className="num">01</span> Diseno CAD profesional</li>
            <li><span className="num">02</span> Analisis CFD y aerodinamica</li>
            <li><span className="num">03</span> Manufactura CNC de alta precision</li>
            <li><span className="num">04</span> Pruebas en tunel de viento</li>
            <li><span className="num">05</span> Estrategia de marca y patrocinios</li>
            <li><span className="num">06</span> Presentacion ante jurado internacional</li>
          </ul>
        </div>

        <div className="stem-logo-display reveal reveal-delay-2">
          <div className="stem-corners">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="stem-logo-graphic">
            <img className="stem-logo-real-big" src="/assets/sr-logo.png" alt="SR - Speed Bolt STEM Racing" />
          </div>
        </div>
      </div>
    </section>
  );
}
