export default function CarShowcase() {
  return (
    <section className="car-showcase" id="car">
      <div className="section-header reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>04 · El bolido</div>
          <h2 className="section-title">Conoce el <span className="accent">SpeedBolt-00</span></h2>
        </div>
      </div>

      <div className="car-display reveal reveal-delay-1">
        <div className="car-photo-wrap">
          <img className="car-photo" src="/assets/f1-car.png" alt="Carro real de Formula 1" />
          <div className="car-photo-badge">SpeedBolt-00</div>
        </div>
        <p className="car-private-note">El diseno y las especificaciones reales del carro se mantienen reservadas por el equipo. Por ahora solo presentamos la linea visual que inspira a SpeedBolt-00.</p>
      </div>
    </section>
  );
}
