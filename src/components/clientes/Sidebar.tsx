'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [filters, setFilters] = useState({
    regular: true,
    premium: true,
    new: true,
    local: true,
    national: true,
    international: false,
    date: 'all',
  });

  const handleCheckbox = (field: keyof typeof filters) => {
    setFilters({ ...filters, [field]: !filters[field] });
  };

  const handleRadio = (value: string) => {
    setFilters({ ...filters, date: value });
  };

  return (
    <aside className="w-[280px] shrink-0 space-y-6">
      {/* Filtros */}
      <div className="bg-white border border-[var(--gray-light)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <i className="fas fa-filter text-[var(--primary)]" /> Filtros
        </h3>

        <div className="relative mb-6">
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            className="w-full pl-10 py-2 px-4 rounded-full border border-[var(--gray-light)] text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(67,97,238,0.2)]"
          />
        </div>

        {/* Tipo de cliente */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
            <i className="fas fa-user-tag"></i> Tipo de cliente
          </h4>
          {['regular', 'premium', 'new'].map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={filters[type as keyof typeof filters] as boolean}
                onChange={() => handleCheckbox(type as keyof typeof filters)}
                id={`type-${type}`}
                className="mr-2 accent-[var(--primary)]"
              />
              <label htmlFor={`type-${type}`} className="text-sm capitalize cursor-pointer pl-1">
                Clientes {type === 'new' ? 'nuevos' : type}
              </label>
            </div>
          ))}
        </div>

        {/* Ubicación */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
            <i className="fas fa-map-marker-alt" /> Ubicación
          </h4>
          {['local', 'national', 'international'].map((loc) => (
            <div key={loc} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={filters[loc as keyof typeof filters] as boolean}
                onChange={() => handleCheckbox(loc as keyof typeof filters)}
                id={`location-${loc}`}
                className="mr-2 accent-[var(--primary)]"
              />
              <label htmlFor={`location-${loc}`} className="text-sm capitalize cursor-pointer pl-1">
                {loc === 'national' ? 'Nacional' : loc === 'local' ? 'Local' : 'Internacional'}
              </label>
            </div>
          ))}
        </div>

        {/* Fecha de registro */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> Fecha de registro
          </h4>
          {[
            { id: 'all', label: 'Todos' },
            { id: 'month', label: 'Último mes' },
            { id: 'year', label: 'Último año' },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center mb-2">
              <input
                type="radio"
                name="date"
                id={`date-${id}`}
                checked={filters.date === id}
                onChange={() => handleRadio(id)}
                className="mr-2 accent-[var(--primary)]"
              />
              <label htmlFor={`date-${id}`} className="text-sm cursor-pointer pl-1">
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* Botón aplicar filtros */}
        <button className="w-full py-2 mt-2 bg-[#fbbf24] text-white font-semibold text-sm rounded hover:bg-[#f59e0b] transition">
          <i className="fas fa-sync-alt mr-1" /> Aplicar filtros
        </button>
      </div>

      {/* Estadísticas */}
      <div className="bg-white border border-[var(--gray-light)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="fas fa-chart-pie text-[var(--accent)]" /> Estadísticas
        </h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">Clientes totales</div>
            <div className="text-xl font-bold text-[var(--primary)]">1,248</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Clientes activos</div>
            <div className="text-xl font-bold text-[var(--secondary)]">984</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Nuevos este mes</div>
            <div className="text-xl font-bold text-[var(--accent)]">87</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
