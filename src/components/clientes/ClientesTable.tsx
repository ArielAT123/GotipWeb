'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faFileAlt } from '@fortawesome/free-solid-svg-icons';

type Cliente = {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  pedidos: number;
  estado: 'Activo' | 'Inactivo';
  avatar: string;
};

const clientes: Cliente[] = [
  {
    id: 1,
    nombre: 'María González',
    correo: 'maria.gonzalez@example.com',
    telefono: '+52 55 1234 5678',
    pedidos: 24,
    estado: 'Activo',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    nombre: 'Carlos Mendoza',
    correo: 'carlos.mendoza@example.com',
    telefono: '+52 55 9876 5432',
    pedidos: 12,
    estado: 'Activo',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 3,
    nombre: 'Laura Jiménez',
    correo: 'laura.jimenez@example.com',
    telefono: '+52 55 4567 8910',
    pedidos: 5,
    estado: 'Activo',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    id: 4,
    nombre: 'Pedro Ramírez',
    correo: 'pedro.ramirez@example.com',
    telefono: '+52 55 3210 6547',
    pedidos: 0,
    estado: 'Inactivo',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 5,
    nombre: 'Ana Sánchez',
    correo: 'ana.sanchez@example.com',
    telefono: '+52 55 7890 1234',
    pedidos: 18,
    estado: 'Activo',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
];

export default function ClientesTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Encabezado */}
      <div className="flex px-6 py-4 bg-gray-50 text-gray-700 text-sm font-semibold border-b border-gray-200">
        <div className="w-1/4">Cliente</div>
        <div className="w-1/3 hidden md:block">Correo electrónico</div>
        <div className="w-1/5 hidden lg:block">Teléfono</div>
        <div className="w-[10%] text-center">Pedidos</div>
        <div className="w-[10%] hidden sm:block">Estado</div>
        <div className="w-[10%] text-right">Acciones</div>
      </div>

      {/* Filas */}
      {clientes.map((cliente, index) => {
        const isActive = cliente.estado === 'Activo';
        const avatarBorder = isActive ? 'border-green-500' : 'border-gray-300';
        const estadoBg = isActive ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600';

        return (
          <div
            key={cliente.id}
            className={`flex items-center px-6 py-4 text-sm transition-colors ${
              index !== clientes.length - 1 ? 'border-b border-gray-200' : ''
            } hover:bg-gray-100`}
          >
            {/* Avatar + nombre */}
            <div className="w-1/4 flex items-center gap-3 font-semibold">
              <img
                src={cliente.avatar}
                alt={cliente.nombre}
                className={`w-9 h-9 rounded-full object-cover border-2 ${avatarBorder}`}
              />
              {cliente.nombre}
            </div>

            {/* Correo */}
            <div className="w-1/3 text-gray-600 hidden md:block">{cliente.correo}</div>

            {/* Teléfono */}
            <div className="w-1/5 hidden lg:block">{cliente.telefono}</div>

            {/* Pedidos */}
            <div className="w-[10%] text-center font-bold">{cliente.pedidos}</div>

            {/* Estado */}
            <div className="w-[10%] hidden sm:block">
              <span className={`inline-block px-2 py-[2px] rounded text-xs font-semibold ${estadoBg}`}>
                {cliente.estado}
              </span>
            </div>

            {/* Acciones */}
            <div className="w-[10%] flex justify-end gap-2">
              <button
                title="Ver"
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-[#f59e0b] hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button
                title="Editar"
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-[#f59e0b] hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                title="Ver ficha"
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-[#f59e0b] hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faFileAlt} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}