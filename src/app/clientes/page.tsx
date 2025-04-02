import MainHeader from '../../components/layouts/mainHeader';
import Sidebar from '../../components/clientes/Sidebar';
import ClientesTable from '../../components/clientes/ClientesTable';
import Pagination from '../../components/clientes/Pagination';

export default function Clientes() {
  return (
    <>
      <MainHeader />
        <div className="flex max-w-[1200px] mx-auto px-6 py-10 gap-6">
        <Sidebar />
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Mis Clientes</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-[var(--primary)] rounded-md text-[var(--primary)] hover:bg-[var(--primary-light)] text-sm font-semibold flex items-center gap-2">
                <i className="fas fa-file-export"></i> Exportar
              </button>
              <button className="px-4 py-2 bg-[#fbbf24] text-white rounded hover:bg-[#f59e0b] text-sm font-semibold flex items-center gap-2 shadow-md hover:-translate-y-[2px] transition-transform">
                <i className="fas fa-plus"></i>&#10010; Nuevo cliente
              </button>

            </div>
          </div>
          <ClientesTable />
          <Pagination />
        </main>
      </div>
    </>
  );
}
