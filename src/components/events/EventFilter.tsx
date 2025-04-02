'use client';

import { useState } from 'react';

export default function EventHeroFilter() {
  const [category, setCategory] = useState('');
  const [fromDate, setFromDate] = useState('2022-01-01');
  const [toDate, setToDate] = useState('2022-01-01');

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("/assets/images/events-bg.jpg")',
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Encuentra los mejores eventos cerca de ti </h1>
        <p className="mb-6 text-white/80 text-sm md:text-base">
            Descubre los mejores lugares para comer, beber y comprar centra de tí   
        </p>

        {/* Filtros */}
        <div className="bg-white text-gray-700 rounded-xl shadow-md p-4 md:p-6 flex flex-col md:flex-row md:items-end gap-4 md:gap-6 w-full">
          {/* Categoría */}
          <div className="flex flex-col w-full md:w-1/4 text-left">
            <label className="text-sm font-semibold mb-1 text-gray-600" htmlFor="category">
              Selecciona el genero
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            >
              <option value="">Category</option>
              <option value="music">🎵 Music</option>
              <option value="food">🍔 Food</option>
              <option value="tech">💻 Tech</option>
              <option value="art">🎨 Art</option>
            </select>
          </div>

          {/* Fecha inicio */}
          <div className="flex flex-col w-full md:w-1/4 text-left">
            <label className="text-sm font-semibold mb-1 text-gray-600" htmlFor="from-date">
              Fecha de Inicio
            </label>
            <input
              id="from-date"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Fecha fin */}
          <div className="flex flex-col w-full md:w-1/4 text-left">
            <label className="text-sm font-semibold mb-1 text-gray-600" htmlFor="to-date">
              Fecha de Fin
            </label>
            <input
              id="to-date"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Botón */}
          <div className="w-full md:w-1/4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 mt-6 md:mt-0 rounded transition-all">
              Filters Dates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
