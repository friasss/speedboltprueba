import ModalCloseButton from '../molecules/ModalCloseButton';

export default function PostModal({ post, onClose }) {
  return (
    <div className={`modal-overlay${post ? ' open' : ''}`} id="postModal" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal">
        <ModalCloseButton onClick={onClose} id="modalClose" />
        <div className="modal-cover" id="modalCover">
          {post?.cover ? (
            <img src={post.cover} alt={post.title} />
          ) : (
            <div className="modal-cover-fallback">{post?.coverFallback || 'SB'}</div>
          )}
        </div>
        <div className="modal-body">
          <div id="modalTagWrap">{post ? <span className="modal-tag">{post.tag}</span> : null}</div>
          <div className="modal-date" id="modalDate">{post?.date || ''}</div>
          <h2 className="modal-title" id="modalTitle">{post?.title || ''}</h2>
          <div className="modal-content" id="modalContent">{post?.content || ''}</div>
          <div id="modalAttachmentWrap">
            {post?.attachment?.data ? (
              <a href={post.attachment.data} download={post.attachment.name} className="modal-attachment" data-cursor="hover">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Descargar {post.attachment.name}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
