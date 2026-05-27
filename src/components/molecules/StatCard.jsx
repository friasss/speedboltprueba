export default function StatCard({ value, label, className = 'stat' }) {
  return (
    <div className={className}>
      <div className={`num${typeof value === 'string' && value.includes('SpeedBolt') ? ' model-name' : ''}`}>
        {value}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
