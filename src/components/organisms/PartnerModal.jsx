import ModalCloseButton from '../molecules/ModalCloseButton';

export default function PartnerModal({ partner, onClose }) {
  return (
    <div className={`modal-overlay${partner ? ' open' : ''}`} id="partnerModal" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="partner-modal">
        <ModalCloseButton onClick={onClose} id="partnerModalClose" />
        <div className="partner-modal-header">
          <div className="partner-modal-name" id="partnerModalName">{partner?.name || ''}</div>
        </div>
        <div className="partner-modal-body">
          <div className="partner-modal-tier" id="partnerModalTier">{partner?.tier || ''}</div>
          <p className="partner-modal-desc" id="partnerModalDesc">{partner?.desc || ''}</p>
          {partner ? (
            <a id="partnerModalLink" className="partner-modal-link" target="_blank" rel="noopener" data-cursor="hover" href={partner.url}>
              <span id="partnerModalLinkText">{partner.linkLabel || 'Visitar sitio oficial'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
