import Button from '../atoms/Button';

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function HeroActions({ primary, secondary }) {
  return (
    <div className="hero-actions">
      {primary ? (
        <Button href={primary.href} data-cursor="hover" variant="primary">
          <span>{primary.label}</span>
          <ArrowIcon />
        </Button>
      ) : null}
      {secondary ? (
        <Button href={secondary.href} data-cursor="hover" variant="secondary">
          {secondary.label}
        </Button>
      ) : null}
    </div>
  );
}
