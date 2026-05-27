import ModalCloseButton from '../molecules/ModalCloseButton';
import { buildDocumentLabel, canPreviewDocument } from '../../utils/documents';

export default function DocumentModal({ document, onClose }) {
  return (
    <div className={`modal-overlay${document ? ' open' : ''}`} id="documentModal" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="document-modal">
        <ModalCloseButton onClick={onClose} id="documentModalClose" />

        <div className="document-modal-head">
          <span className="document-modal-tag">{document?.category || ''}</span>
          <span className="document-modal-kind">{document ? buildDocumentLabel(document.kind) : ''}</span>
        </div>

        <div className="document-modal-body">
          <div className="document-modal-copy">
            <div className="modal-date">{document?.date || ''}</div>
            <h2 className="modal-title">{document?.title || ''}</h2>
            <p className="document-modal-description">{document?.description || ''}</p>
            {document ? (
              <a
                href={document.fileData}
                download={document.fileName}
                className="modal-attachment"
                data-cursor="hover"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Descargar {document.fileName}</span>
              </a>
            ) : null}
          </div>

          <div className="document-modal-preview">
            {document && canPreviewDocument(document) ? (
              document.kind === 'image' ? (
                <img src={document.fileData} alt={document.title} className="document-preview-image" />
              ) : (
                <iframe src={document.fileData} title={document.title} className="document-preview-frame" />
              )
            ) : (
              <div className="document-preview-fallback">
                <div className="document-preview-fallback-label">Vista previa no disponible</div>
                <p>Este formato se descarga directamente para conservar su estructura original.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
