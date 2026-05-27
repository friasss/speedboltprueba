import { BRAND_DATA } from '../../data/branding';

export default function BrandSection({ activeBrandKey, onToggle }) {
  const activeBrand = activeBrandKey ? BRAND_DATA[activeBrandKey] : null;

  return (
    <section className="brand-section" id="brand">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="section-header reveal" style={{ marginBottom: '60px' }}>
          <div>
            <div className="section-eyebrow">00 · Identidad y aliados</div>
            <h2 className="section-title" style={{ color: 'var(--black)', transform: 'none' }}>
              Nuestra <span className="accent">Marca</span>
            </h2>
            <p className="brand-section-sub">Toca un logo para conocer mas sobre cada parte de este proyecto.</p>
          </div>
        </div>

        <div className="brand-grid reveal">
          <button className={`brand-card brand-card-dark${activeBrandKey === 'speedbolt' ? ' active' : ''}`} data-brand="speedbolt" onClick={() => onToggle('speedbolt')} type="button">
            <div className="brand-logo-wrap">
              <img className="sb-logo-img" src="/assets/speedbolt-logo.png" alt="Logo Speed Bolt" />
            </div>
            <div className="brand-card-subtitle">Escuderia · IPISA · Santiago RD</div>
            <div className="brand-card-arrow">{activeBrandKey === 'speedbolt' ? '▲' : '▼'}</div>
          </button>

          <button className={`brand-card${activeBrandKey === 'ipisa' ? ' active' : ''}`} data-brand="ipisa" onClick={() => onToggle('ipisa')} type="button">
            <div className="brand-logo-wrap">
              <img className="ipisa-logo-img-real" src="/assets/ipisa-logo.png" alt="Logo IPISA - Instituto Politecnico Industrial Salesianos Santiago" />
            </div>
            <div className="brand-card-subtitle">Instituto Politecnico Industrial de Santiago</div>
            <div className="brand-card-arrow">{activeBrandKey === 'ipisa' ? '▲' : '▼'}</div>
          </button>

          <button className={`brand-card${activeBrandKey === 'stemracing' ? ' active' : ''}`} data-brand="stemracing" onClick={() => onToggle('stemracing')} type="button">
            <div className="brand-logo-wrap stem-logo-dark-panel">
              <img className="stem-logo-img-real" src="/assets/stemracing-logo.png" alt="Logo STEM Racing Dominican Republic" />
            </div>
            <div className="brand-card-subtitle">Republica Dominicana · Competencia Nacional</div>
            <div className="brand-card-arrow">{activeBrandKey === 'stemracing' ? '▲' : '▼'}</div>
          </button>
        </div>

        <div className={`brand-panel${activeBrand ? ' open' : ''}`} id="brandPanel">
          <div className="brand-panel-inner" id="brandPanelInner">
            {activeBrand ? (
              <>
                <div className="brand-panel-top">
                  <div className="brand-panel-accent" style={{ background: activeBrand.color }} />
                  <span className="brand-panel-name" style={{ color: activeBrand.color }}>{activeBrand.name}</span>
                </div>
                <p className="brand-panel-text">{activeBrand.info}</p>
                {activeBrand.url ? (
                  <a
                    href={activeBrand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-panel-link"
                    style={{ color: activeBrand.color, borderColor: `${activeBrand.color}55` }}
                  >
                    Sitio web {'->'}
                  </a>
                ) : null}
              </>
            ) : null}
          </div>
        </div>

        <div className="brand-palette reveal">
          <div className="palette-strip">
            <div style={{ flex: 3, background: '#e37903' }} />
            <div style={{ flex: 2, background: '#2a7071' }} />
            <div style={{ flex: 1.5, background: '#0a0a0a' }} />
            <div style={{ flex: 1.5, background: '#003087' }} />
            <div style={{ flex: 1, background: '#7B2FBE' }} />
          </div>
          <div className="palette-labels">
            <div style={{ flex: 3 }}>SB Orange</div>
            <div style={{ flex: 2 }}>SB Teal</div>
            <div style={{ flex: 1.5 }}>SB Black</div>
            <div style={{ flex: 1.5 }}>IPISA Blue</div>
            <div style={{ flex: 1 }}>STEM Purple</div>
          </div>
        </div>
      </div>
    </section>
  );
}
