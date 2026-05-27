export default function PartnerLogo({
  partnerKey,
  children,
  className = '',
  imageSrc,
  imageAlt,
  imageClassName = '',
  onClick,
}) {
  return (
    <button
      className={className ? `partner-logo ${className}` : 'partner-logo'}
      data-cursor="hover"
      data-partner={partnerKey}
      onClick={onClick}
      type="button"
    >
      {imageSrc ? <img className={imageClassName} src={imageSrc} alt={imageAlt} /> : children}
    </button>
  );
}
