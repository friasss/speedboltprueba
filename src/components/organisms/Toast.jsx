export default function Toast({ toast }) {
  return (
    <div className={`toast${toast.visible ? ' show' : ''}${toast.type === 'error' ? ' error' : ''}`} id="toast">
      {toast.message}
    </div>
  );
}
