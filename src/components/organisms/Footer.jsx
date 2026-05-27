export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img className="footer-logo-img" src="/assets/speedbolt-logo.png" alt="Speed Bolt" />
          <p>Equipo dominicano de STEM Racing. Disenamos, construimos y competimos en la temporada 2026 representando a Republica Dominicana.</p>
        </div>
        <div className="footer-col">
          <h5>Equipo</h5>
          <ul>
            <li><a href="#about">Sobre nosotros</a></li>
            <li><a href="#stem">Stem Racing</a></li>
            <li><a href="#car">SpeedBolt-00</a></li>
            <li><a href="#impact">Impacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contenido</h5>
          <ul>
            <li><a href="#feed">Transmisiones</a></li>
            <li><a href="#documents">Documentos</a></li>
            <li><a href="#admin">Admin</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Siguenos</h5>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 SPEED BOLT RACING · Republica Dominicana</div>
        <div>SpeedBolt-00 · STEM RACING DR · ENGINEERED FOR SPEED</div>
      </div>
    </footer>
  );
}
