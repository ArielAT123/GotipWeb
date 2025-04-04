'use client';

import { useState } from 'react';

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 4;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      // Aquí puedes disparar fetch o filtrado, si lo necesitas
    }
  };

  return (
    <div className="flex justify-center mt-6 gap-2">
      {/* Botón anterior */}
      <button
        onClick={() => goToPage(activePage - 1)}
        disabled={activePage === 1}
        className={`min-w-[36px] h-9 px-3 rounded-md border bg-white text-sm font-bold transition-all shadow-sm ${
          activePage === 1
            ? 'text-gray-300 border-gray-200 cursor-not-allowed'
            : 'text-gray-800 border-gray-300 hover:bg-yellow-400 hover:text-white'
        }`}
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
              ? 'bg-yellow-400 text-white border-yellow-400'
              : 'bg-white text-gray-800 border-gray-300 hover:bg-yellow-300 hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botón siguiente */}
      <button
        onClick={() => goToPage(activePage + 1)}
        disabled={activePage === totalPages}
        className={`min-w-[36px] h-9 px-3 rounded-md border bg-white text-sm font-bold transition-all shadow-sm ${
          activePage === totalPages
            ? 'text-gray-300 border-gray-200 cursor-not-allowed'
            : 'text-gray-800 border-gray-300 hover:bg-yellow-400 hover:text-white'
        }`}
        aria-label="Página siguiente"
      >
        {'>'}
      </button>
    </div>
  );
}
