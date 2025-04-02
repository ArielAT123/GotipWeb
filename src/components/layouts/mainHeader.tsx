'use client';

import Image from 'next/image';
import { NavItem } from '../../types/business';

export default function MainHeader() {
  const navItems: NavItem[] = [
    { icon: 'home', label: 'Inicio' },
    { icon: 'network-wired', label: 'Mi red' },
    { icon: 'store', label: 'Mi negocio', active: true },
    { icon: 'envelope', label: 'Mensajes' },
    { icon: 'bell', label: 'Notificaciones' }
  ];

  return (
    <header className="bg-white border-b border-[#e5e7eb] sticky top-0 z-[1000] shadow-sm">
      <div className="header-container flex justify-between items-center max-w-[1200px] mx-auto px-6 h-16">
        
        {/* Logo */}
        <div className="logo text-[1.75rem] font-extrabold flex items-center tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition duration-300 hover:scale-105 cursor-pointer">
          <span>GO</span>
          <span>tip</span>
        </div>

        {/* Search bar */}
        <div className="search-bar flex-[0.6] mx-6 relative">
          <input 
            type="text" 
            placeholder="   Buscar emprendimientos, personas o ideas..." 
            className="w-full py-[0.7rem] px-4 pl-10 rounded-full border border-gray-300 bg-[#f1f3f5] text-sm transition duration-300 shadow-inner focus:bg-white focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(67,97,238,0.2)]"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 opacity-70">
            <i className="fas fa-search text-sm"></i>
          </div>
        </div>

        {/* Navigation icons */}
        <div className="nav-icons flex gap-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-icon flex flex-col items-center justify-center py-3 px-4 rounded-lg text-xs min-w-[70px] relative transition duration-300 cursor-pointer ${
                item.active
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              <i className={`fas fa-${item.icon} text-[1.25rem] mb-[0.3rem]`}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Perfil */}
        <div className="user-profile flex items-center gap-3 py-2 px-3 rounded-full cursor-pointer transition duration-300 hover:bg-blue-100 ml-2">
          <Image 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Perfil" 
            width={36} 
            height={36} 
            className="rounded-full border-2 border-gray-200 object-cover transition duration-300 hover:border-blue-600"
          />
          <span className="text-sm font-medium">Mi perfil <i className="fas fa-caret-down ml-1"></i></span>
        </div>
      </div>
    </header>
  );
}
