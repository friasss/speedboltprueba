export default function ModalCloseButton({ onClick, id }) {
  return (
    <button className="modal-close" id={id} data-cursor="hover" onClick={onClick} type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
