import { StatItem } from '../../types/business';

export default function BusinessStats() {
  const stats: StatItem[] = [
    { value: '1,248', label: 'Visitas este mes' },
    { value: '328', label: 'Nuevos seguidores' },
    { value: '45', label: 'Ventas' }
  ];

  return (
    <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="stat-card bg-gradient-to-br from-[#f8f9fa] to-white rounded-lg p-5 text-center border border-[var(--border)] transition-[var(--transition)] hover:-translate-y-[5px] hover:shadow-[var(--card-shadow)]"
        >
          <div className="stat-value text-[1.75rem] font-extrabold mb-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="stat-label text-xs text-[var(--text-gray)] font-semibold uppercase tracking-[0.5px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}