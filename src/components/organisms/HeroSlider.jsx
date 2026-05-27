import { useEffect, useMemo, useState } from 'react';
import HeroActions from '../molecules/HeroActions';

const SLIDE_DURATION = 6000;

function TachometerVisual() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px' }}>
      <circle cx="200" cy="200" r="180" fill="none" stroke="#2a2a2a" strokeWidth="1" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="#1a1a1a" strokeWidth="40" />
      <path d="M 80 230 A 130 130 0 1 1 320 230" fill="none" stroke="url(#gaugeGrad)" strokeWidth="6" strokeLinecap="round" />
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a7071" />
          <stop offset="50%" stopColor="#e37903" />
          <stop offset="100%" stopColor="#d23939" />
        </linearGradient>
      </defs>
      <g stroke="#666" strokeWidth="2">
        <line x1="200" y1="40" x2="200" y2="55" />
        <line x1="60" y1="200" x2="75" y2="200" />
        <line x1="340" y1="200" x2="325" y2="200" />
        <line x1="100" y1="100" x2="110" y2="110" />
        <line x1="300" y1="100" x2="290" y2="110" />
      </g>
      <line x1="200" y1="200" x2="280" y2="120" stroke="#e37903" strokeWidth="3" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="-30 200 200" to="30 200 200" dur="2s" repeatCount="indefinite" additive="sum" />
      </line>
      <circle cx="200" cy="200" r="12" fill="#e37903" />
      <circle cx="200" cy="200" r="6" fill="#0a0a0a" />
      <text x="200" y="290" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="44" fontStyle="italic" fill="#f5f1e8">RPM</text>
      <text x="200" y="320" textAnchor="middle" fontFamily="Space Mono, monospace" fontSize="11" letterSpacing="3" fill="#888">SPEEDBOLT-00</text>
    </svg>
  );
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        slideClass: 'slide-1',
        meta: 'EQUIPO 01 · TEMPORADA 2026',
        title: (
          <>
            <span className="accent">SPEED</span><br />
            <span className="stroke">BOLT</span><br />
            <span>RACING</span>
          </>
        ),
        description:
          'No somos solo otro equipo. Somos ingenieria pura, velocidad pensada y diseno obsesivo. Speed Bolt nacio en Republica Dominicana para empujar los limites de lo que un equipo estudiantil puede construir.',
        primary: { href: '#about', label: 'Conoce al equipo' },
        secondary: { href: '#car', label: 'Ver SpeedBolt-00' },
        visual: (
          <div className="hero-visual hero-visual-1">
            <div className="mystery-visual">
              <div className="mystery-box">
                <div className="mystery-classified">clasificado</div>
                <div className="mystery-model">SpeedBolt-00</div>
                <div className="mystery-question">? ? ?</div>
                <div className="mystery-right-lines">
                  <div className="mrl" />
                  <div className="mrl" />
                  <div className="mrl" />
                </div>
              </div>
              <div className="mystery-meta">
                <div className="mystery-meta-col">FORMA<span>DESCONOCIDA</span></div>
                <div className="mystery-meta-col">VELOCIDAD<span>CLASIFICADA</span></div>
                <div className="mystery-meta-col">ESTADO<span>EN DISENO</span></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        slideClass: 'slide-2',
        meta: 'COMPETENCIA OFICIAL · DOMINICAN REPUBLIC',
        title: (
          <>
            <span className="accent">STEM</span><br />
            <span className="stroke">RACING</span><br />
            <span>2026</span>
          </>
        ),
        description:
          'La competencia internacional de mini-bolidos donde estudiantes de todo el mundo disenan, construyen y compiten con autos a escala. Speed Bolt representa la cantera dominicana en la proxima generacion de ingenieria de motorsport.',
        primary: { href: '#stem', label: 'Sobre la competencia' },
        visual: (
          <div className="hero-visual">
            <div className="stem-logo">
              <img src="/assets/stemracing-logo.png" alt="STEM Racing Dominican Republic" className="stem-logo-real-hero" />
              <div className="stem-logo-tag">DOMINICAN REPUBLIC</div>
            </div>
          </div>
        ),
      },
      {
        slideClass: 'slide-3',
        meta: 'IMPACTO · GENERACION STEM',
        title: (
          <>
            <span>NO ES</span><br />
            <span className="accent">SOLO</span><br />
            <span className="stroke">UN AUTO.</span>
          </>
        ),
        description:
          'Cada milimetro de SpeedBolt-00 representa horas de calculos, pruebas aerodinamicas y noches sin dormir. STEM Racing no forma pilotos: forma la proxima generacion de ingenieros, disenadores y emprendedores que Republica Dominicana necesita.',
        primary: { href: '#impact', label: 'Nuestro impacto' },
        visual: (
          <div className="hero-visual">
            <div className="impact-numbers">
              <div className="impact-number"><div className="num">12+</div><div className="label">Paises compitiendo</div></div>
              <div className="impact-number"><div className="num">40K</div><div className="label">Estudiantes globales</div></div>
              <div className="impact-number"><div className="num model-name">SpeedBolt-00</div><div className="label">Modelo actual</div></div>
              <div className="impact-number"><div className="num">2026</div><div className="label">Temporada activa</div></div>
            </div>
          </div>
        ),
      },
      {
        slideClass: 'slide-4',
        meta: 'INGENIERIA · DISENO · VELOCIDAD',
        title: (
          <>
            <span className="stroke">CADA</span><br />
            <span className="accent">MILISEGUNDO</span><br />
            <span>CUENTA.</span>
          </>
        ),
        description:
          'En un mundo donde un milisegundo decide quien sube al podio, no podemos permitirnos disenos mediocres. Los datos reales de SpeedBolt-00 se mantienen reservados hasta su presentacion oficial.',
        primary: { href: '#car', label: 'Ver avance visual' },
        visual: <div className="hero-visual"><TachometerVisual /></div>,
      },
    ],
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentSlide((value) => (value + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const getPositionClass = (index) => {
    const total = slides.length;
    const leftIdx = (currentSlide - 1 + total) % total;
    const rightIdx = (currentSlide + 1) % total;

    if (index === currentSlide) {
      return 'pos-center active';
    }
    if (index === leftIdx) {
      return 'pos-left';
    }
    if (index === rightIdx) {
      return 'pos-right';
    }

    const distRight = (index - currentSlide + total) % total;
    const distLeft = (currentSlide - index + total) % total;
    return distRight <= distLeft ? 'pos-hidden-right' : 'pos-hidden-left';
  };

  const goToSlide = (index) => {
    const total = slides.length;
    setCurrentSlide(((index % total) + total) % total);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => {
          const positionClass = getPositionClass(index);

          return (
            <div
              key={slide.meta}
              className={`hero-slide ${slide.slideClass} ${positionClass}`}
              data-slide={index}
              onClick={() => {
                if (positionClass.includes('pos-left')) {
                  goToSlide(currentSlide - 1);
                } else if (positionClass.includes('pos-right')) {
                  goToSlide(currentSlide + 1);
                }
              }}
            >
              <div className="hero-content">
                <div className="hero-text-block">
                  <div className="hero-meta">{slide.meta}</div>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <HeroActions primary={slide.primary} secondary={slide.secondary} />
                </div>
                {slide.visual}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero-nav">
        <div className="hero-pagination" id="heroPagination">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`pag-dot${index === currentSlide ? ' active' : ''}`}
              data-target={index}
              data-cursor="hover"
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>
        <div className="hero-counter">
          <span className="current" id="slideCurrent">{String(currentSlide + 1).padStart(2, '0')}</span> / <span>04</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>SCROLL</span>
        <span className="line" />
      </div>
    </section>
  );
}
