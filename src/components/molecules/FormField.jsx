export default function FormField({ label, children, className = 'form-group' }) {
  return (
    <div className={className}>
      <label>{label}</label>
      {children}
    </div>
  );
}
