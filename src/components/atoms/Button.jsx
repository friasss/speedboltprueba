export default function Button({
  children,
  href,
  className,
  id,
  onClick,
  style,
  target,
  rel,
  type = 'button',
  'data-cursor': dataCursor,
  variant = 'primary',
}) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  if (href) {
    return (
      <a href={href} className={combinedClass} id={id} data-cursor={dataCursor} onClick={onClick} style={style} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} id={id} data-cursor={dataCursor} onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
}
