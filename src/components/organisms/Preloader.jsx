export default function Preloader({ done }) {
  return (
    <div className={`preloader${done ? ' done' : ''}`} id="preloader">
      <div className="preloader-meta">
        <span>SB · 2026</span>
        <span>LOADING</span>
      </div>
      <img className="preloader-logo-img" src="/assets/speedbolt-logo.png" alt="Speed Bolt" />
      <div className="preloader-bar" />
      <div className="preloader-meta">
        <span>STEM RACING</span>
        <span>DOM. REPUBLIC</span>
      </div>
    </div>
  );
}
