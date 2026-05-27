export function formatCurrentDate() {
  const now = new Date();
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  return `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
}

export function buildExcerpt(content) {
  return (content || '').slice(0, 160);
}

export function buildFallbackLetters(title) {
  return (title.match(/\b\w/g) || []).slice(0, 2).join('').toUpperCase() || 'SB';
}
