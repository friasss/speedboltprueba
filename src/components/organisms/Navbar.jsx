export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="nav">
        <a href="#hero" className="nav-logo" data-cursor="hover" aria-label="Speed Bolt">
          <img src="/assets/speedbolt-logo.png" alt="Speed Bolt" />
        </a>
        <ul className="nav-links">
          <li><a href="#brand" data-cursor="hover">Marca</a></li>
          <li><a href="#about" data-cursor="hover">Equipo</a></li>
          <li><a href="#stem" data-cursor="hover">STEM Racing</a></li>
          <li><a href="#car" data-cursor="hover">El Carro</a></li>
          <li><a href="#documents" data-cursor="hover">Documentos</a></li>
          <li><a href="#feed" data-cursor="hover">Transmisiones</a></li>
          <li><a href="#admin" className="nav-cta" id="navAdminBtn" data-cursor="hover">Admin</a></li>
        </ul>
        <button
          className="nav-mobile-toggle"
          id="mobileToggle"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${mobileMenuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#about" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>Equipo</a>
        <a href="#stem" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>STEM Racing</a>
        <a href="#car" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>El Carro</a>
        <a href="#documents" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>Documentos</a>
        <a href="#feed" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>Transmisiones</a>
        <a href="#admin" data-cursor="hover" onClick={() => setMobileMenuOpen(false)}>Admin</a>
      </div>
    </>
  );
}
