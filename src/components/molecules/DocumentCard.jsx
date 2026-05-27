import { buildDocumentLabel, canPreviewDocument } from '../../utils/documents';

function DocumentIcon({ kind }) {
  if (kind === 'pdf') {
    return <span className="document-card-icon-text">PDF</span>;
  }

  if (kind === 'image') {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="9" cy="10" r="1.7" fill="currentColor" />
        <path d="M6 17l4.2-4.2a1 1 0 011.4 0L14 15l2.3-2.3a1 1 0 011.4 0L20 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === 'zip') {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 3h6l4 4v14H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11 9h2M11 12h2M11 15h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3h6l4 4v14H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.5 15h5M9.5 18h5M9.5 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function DocumentCard({ document, onOpen }) {
  const actionLabel = canPreviewDocument(document) ? 'Ver documento' : 'Descargar';

  return (
    <article className="document-card" data-cursor="hover">
      <div className="document-card-top">
        <div className={`document-card-icon document-card-icon-${document.kind}`}>
          <DocumentIcon kind={document.kind} />
        </div>
        <div className="document-card-meta">
          <span className="document-card-category">{document.category}</span>
          <span className="document-card-kind">{buildDocumentLabel(document.kind)}</span>
        </div>
      </div>

      <div className="document-card-body">
        <h3 className="document-card-title">{document.title}</h3>
        <p className="document-card-description">{document.description}</p>
      </div>

      <div className="document-card-footer">
        <div className="document-card-fileinfo">
          <span>{document.fileName}</span>
          <span>{document.date}</span>
        </div>
        {canPreviewDocument(document) ? (
          <button className="document-card-action" type="button" onClick={() => onOpen(document.id)}>
            {actionLabel}
          </button>
        ) : (
          <a className="document-card-action" href={document.fileData} download={document.fileName}>
            {actionLabel}
          </a>
        )}
      </div>
    </article>
  );
}
