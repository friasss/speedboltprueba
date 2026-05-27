import DocumentCard from '../molecules/DocumentCard';

export default function DocumentsSection({ documents, onOpenDocument }) {
  return (
    <section className="documents-section" id="documents">
      <div className="documents-shell">
        <div className="section-header reveal documents-header">
          <div>
            <div className="section-eyebrow">05 | Biblioteca documental</div>
            <h2 className="section-title">
              Material listo para
              <br />
              revision y <span className="accent">presentacion</span>
            </h2>
          </div>
          <div className="documents-intro">
            <p>
              Este apartado organiza dossiers, propuestas, presentaciones y piezas institucionales para que el proyecto
              se vea serio, ordenado y facil de revisar.
            </p>
          </div>
        </div>

        <div className="documents-rail reveal reveal-delay-1">
          <div className="documents-rail-card">
            <span className="documents-rail-label">Uso sugerido</span>
            <strong>Patrocinios, reuniones y seguimiento institucional</strong>
          </div>
          <div className="documents-rail-card">
            <span className="documents-rail-label">Contenido</span>
            <strong>Dossiers, presentaciones, propuestas y archivos tecnicos</strong>
          </div>
          <div className="documents-rail-card">
            <span className="documents-rail-label">Acceso</span>
            <strong>Vista rapida para PDF e imagenes, descarga para otros formatos</strong>
          </div>
        </div>

        {documents.length ? (
          <div className="documents-grid reveal reveal-delay-2">
            {documents.map((document) => (
              <DocumentCard key={document.id} document={document} onOpen={onOpenDocument} />
            ))}
          </div>
        ) : (
          <div className="documents-empty reveal reveal-delay-2">
            <div className="documents-empty-kicker">Biblioteca en preparacion</div>
            <h3>Sube el primer documento desde admin para activar este apartado.</h3>
            <p>
              Cuando cargues un PDF, imagen o archivo institucional, aparecera aqui con una presentacion publica mas profesional.
            </p>
            <a href="#admin" className="section-link" data-cursor="hover">
              <span>Ir al admin</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
