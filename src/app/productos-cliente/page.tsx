'use client';

import MainHeader from '@/components/layouts/mainHeader';
import FilterSidebar from '@/components/productosCliente/FilterSideBar';
import ProductGrid from '@/components/productosCliente/ProductGrid';
import Pagination from '../../components/clientes/Pagination';

export default function ProductoClientePage() {
  return (
    <>
      <MainHeader />
      <main className="bg-[#F8FAFC] py-6 min-h-screen">
        <div className="container max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-6">
          <FilterSidebar />
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Mis Productos</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="border px-3 py-2 rounded-md text-sm"
                />
                <select className="border px-3 py-2 rounded-md text-sm">
                  <option>Ordenar por: Destacados</option>
                  <option>Precio: Menor a mayor</option>
                  <option>Precio: Mayor a menor</option>
                  <option>Mejor calificados</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                  + Nuevo producto
                </button>
              </div>
            </div>

            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
