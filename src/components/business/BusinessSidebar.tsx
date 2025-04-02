import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '../../types/business';

export default function BusinessSidebar() {
  const menuItems: MenuItem[] = [
    { icon: 'chart-line', label: 'Resumen', active: true },
    { icon: 'box-open', label: 'Productos' },
    { icon: 'users', label: 'Clientes' },
    { icon: 'chart-pie', label: 'Estadísticas' },
    { icon: 'ad', label: 'Promociones' },
    { icon: 'cog', label: 'Configuración' }
  ];

  return (
    <aside className="business-sidebar w-[280px] flex-shrink-0">
      <div className="business-menu bg-white rounded-xl border border-[var(--border)] overflow-hidden shadow-[var(--card-shadow)]">
        <div className="menu-header p-6 border-b border-[var(--border)] flex items-center gap-4 bg-gradient-to-br from-[#f8f9fa] to-white">
          <Image 
            src="https://source.unsplash.com/random/200x200/?store" 
            alt="Negocio" 
            width={56} 
            height={56} 
            className="business-avatar rounded-xl border-2 border-white shadow-md object-cover transition-[var(--transition)] hover:scale-105"
          />
          <div>
            <div className="business-name font-bold text-[1.1rem] mb-1">EcoTienda Verde</div>
            <div className="business-category text-xs text-[var(--secondary)] bg-[rgba(6,214,160,0.1)] px-2 py-1 rounded-full inline-block">
              Productos ecológicos
            </div>
          </div>
        </div>
        
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className={`menu-item flex items-center gap-3 p-4 border-b border-[var(--border)] transition-[var(--transition)] text-[var(--text-gray)] font-medium ${
              item.active
                ? 'bg-[rgba(67,97,238,0.08)] text-[var(--primary)] border-l-[3px] border-l-[var(--primary)] pl-[calc(1.5rem-3px)]'
                : 'hover:bg-[rgba(67,97,238,0.05)] hover:text-[var(--primary)] hover:pl-[1.75rem]'
            }`}
          >
            <i className={`fas fa-${item.icon} w-5 text-center text-base`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}