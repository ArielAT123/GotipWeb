'use client';
import { useState } from 'react';

export default function FilterSidebar() {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<string[]>(['Hogar sostenible']);
  const [price, setPrice] = useState(500);
  const [ratings, setRatings] = useState<number[]>([]);

  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleRating = (val: number) => {
    setRatings((prev) =>
      prev.includes(val) ? prev.filter((r) => r !== val) : [...prev, val]
    );
  };

  return (
    <aside className="w-full md:w-[280px] space-y-4">
      {/* Filtros principales */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Filtros</h2>
          <button
            onClick={() => {
              setSearch('');
              setCategories([]);
              setPrice(500);
              setRatings([]);
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            Restablecer
          </button>
        </div>

        {/* Buscar */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            <i className="fas fa-search mr-1" /> Buscar producto
          </label>
          <input
            type="text"
            placeholder="Nombre del producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Categorías */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            <i className="fas fa-tags mr-1" />
            Categorías
          </p>
          {['Hogar sostenible', 'Cuidado personal', 'Alimentos orgánicos', 'Moda sustentable'].map(
            (cat) => (
              <div key={cat} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id={cat}
                  checked={categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="mr-2"
                />
                <label htmlFor={cat} className="text-sm">
                  {cat}
                </label>
              </div>
            )
          )}
        </div>

        {/* Rango de precios */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            <i className="fas fa-dollar-sign mr-1" />
            Rango de precios
          </p>
          <input
            type="range"
            min={0}
            max={1000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500 flex justify-between mt-1">
            <span>$0</span>
            <span>${price}</span>
            <span>$1000+</span>
          </div>
        </div>

        {/* Calificación */}
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            <i className="fas fa-star mr-1" />
            Calificación
          </p>
          {[5, 4, 3].map((star) => (
            <div key={star} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={`rating-${star}`}
                checked={ratings.includes(star)}
                onChange={() => toggleRating(star)}
                className="mr-2"
              />
              <label htmlFor={`rating-${star}`} className="text-sm flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) =>
                  i < star ? (
                    <i key={i} className="fas fa-star text-orange-500 text-sm" />
                  ) : (
                    <i key={i} className="far fa-star text-orange-500 text-sm" />
                  )
                )}
                <span className="text-xs text-gray-600">{star}+</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Inventario separado */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Inventario</h4>
        <div className="flex items-center">
          <input type="checkbox" id="in-stock" defaultChecked className="mr-2" />
          <label htmlFor="in-stock" className="text-sm">
            Mostrar solo productos en stock
          </label>
        </div>
      </div>
    </aside>
  );
}
