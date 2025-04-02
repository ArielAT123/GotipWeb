'use client';

import { useState } from 'react';

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);

  const totalPages = 4;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <div className="flex justify-center mt-6 gap-2">
      {/* Botón anterior */}
      <button
        onClick={() => goToPage(activePage - 1)}
        className="min-w-[36px] h-9 px-3 rounded-md border border-[var(--gray-light)] bg-white text-sm text-[var(--dark)] transition-all shadow-sm font-bold active:bg-[#fbbf24] active:text-white"
        aria-label="Página anterior"
      >
        {'<'}
      </button>

      {/* Botones numéricos */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`min-w-[36px] h-9 px-3 rounded-md border text-sm font-semibold transition-all shadow-sm ${
            activePage === page
              ? 'bg-[#fbbf24] text-white border-[#fbbf24]'
              : 'bg-white text-[var(--dark)] border-[var(--gray-light)] hover:bg-[#f59e0b] hover:text-white hover:border-[#f59e0b] hover:-translate-y-[2px]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botón siguiente */}
      <button
        onClick={() => goToPage(activePage + 1)}
        className="min-w-[36px] h-9 px-3 rounded-md border border-[var(--gray-light)] bg-white text-sm text-[var(--dark)] transition-all shadow-sm font-bold active:bg-[#fbbf24] active:text-white"
        aria-label="Página siguiente"
      >
        {'>'}
      </button>
    </div>
  );
}
