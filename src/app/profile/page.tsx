// pages/profile.tsx
'use client'

import MainHeader from '@/components/layouts/mainHeader';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const Profile: NextPage = () => {
  const [postContent, setPostContent] = useState<string>('');

  interface User {
    name: string;
    role: string;
    avatar: string;
    info: string;
  }

  interface Content {
    text: string;
    tags?: string;
    image?: string;
  }

  interface Stats {
    likes: number;
    comments: number;
    shares: number;
  }

  interface Badge {
    text: string;
    color: string;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Izquierdo */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="px-4 pb-4 relative">
                <div className="flex justify-center -mt-12 mb-3">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Perfil"
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-white object-cover shadow-md"
                  />
                </div>
                
                <h2 className="text-xl font-bold text-center">Alejandro Torres</h2>
                <p className="text-gray-500 text-sm text-center">Fundador de EcoTienda Verde</p>
                <p className="text-gray-600 text-sm text-center mt-2">
                  Emprendedor apasionado por la sostenibilidad
                </p>

                <div className="flex justify-between mt-4 text-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-bold text-gray-800">1,245</div>
                    <div className="text-xs text-gray-500">Seguidores</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">328</div>
                    <div className="text-xs text-gray-500">Siguiendo</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">45</div>
                    <div className="text-xs text-gray-500">Proyectos</div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                  <i className="fas fa-pencil-alt mr-2"></i>Editar perfil
                </button>
              </div>

              <div className="px-4 pb-4">
                <h3 className="font-bold mb-3">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  {['Sostenibilidad', 'Marketing Digital', 'Ecommerce'].map((skill: string) => (
                    <span key={skill} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contenido Central */}
          <div className="w-full lg:w-2/4 space-y-4">
            {/* Crear Publicación */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-start space-x-3">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <input
                  className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-500 transition duration-200"
                  placeholder="¿Qué quieres compartir hoy?"
                  value={postContent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostContent(e.target.value)}
                />
              </div>
              <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
                <ActionButton icon="fas fa-image" label="Foto" color="text-green-500" />
                <ActionButton icon="fas fa-video" label="Video" color="text-blue-500" />
                <ActionButton icon="fas fa-calendar-alt" label="Evento" color="text-red-500" />
              </div>
            </div>

            {/* Publicaciones */}
            <Post
              user={{
                name: "Alejandro Torres",
                role: "EMPRENDEDOR",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                info: "Fundador de EcoTienda Verde · 2h"
              }}
              content={{
                text: "¡Lanzamos nuestra nueva línea de productos biodegradables! 20% de descuento esta semana.",
                tags: "#EcoFriendly #Sostenibilidad",
                image: "https://source.unsplash.com/random/800x400/?eco,products"
              }}
              stats={{ likes: 125, comments: 28, shares: 15 }}
              badge={{ text: "EMPRENDEDOR", color: "bg-green-500" }}
            />
          </div>

          {/* Sidebar Derecho */}
          <div className="w-full lg:w-1/4 space-y-4">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">Sobre mí</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Emprendedor social con 5+ años en negocios sostenibles.
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-blue-500"></i>
                    alejandro@ecotienda.mx
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-globe mr-2 text-blue-500"></i>
                    ecotiendaverde.mx
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">Experiencia</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start">
                  <Image
                    src="https://source.unsplash.com/random/40x40/?company"
                    alt="Company"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium">Fundador & CEO</h4>
                    <p className="text-sm text-blue-500">EcoTienda Verde</p>
                    <p className="text-xs text-gray-500">2020 - Presente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Componentes auxiliares con tipos
interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <button className={`flex flex-col items-center ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
    <i className={`${icon} text-xl`}></i>
    <span className="text-xs mt-1">{label}</span>
  </button>
);

interface ActionButtonProps {
  icon: string;
  label: string;
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, color }) => (
  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-50">
    <i className={`${icon} ${color}`}></i>
    <span>{label}</span>
  </button>
);

interface PostProps {
  user: {
    name: string;
    role: string;
    avatar: string;
    info: string;
  };
  content: {
    text: string;
    tags?: string;
    image?: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  badge: {
    text: string;
    color: string;
  };
}

const Post: React.FC<PostProps> = ({ user, content, stats, badge }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-l-blue-500">
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image 
            src={user.avatar} 
            alt={user.name} 
            width={40} 
            height={40} 
            className="rounded-full object-cover" 
          />
          <div>
            <div className="flex items-center">
              <h4 className="font-medium">{user.name}</h4>
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${badge.color} text-white`}>
                {badge.text}
              </span>
            </div>
            <p className="text-xs text-gray-500">{user.info}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>

    <div className="px-4 pb-3">
      <p className="text-gray-800">{content.text}</p>
      {content.tags && <p className="text-blue-500 text-sm mt-1">{content.tags}</p>}
    </div>

    {content.image && (
      <Image 
        src={content.image} 
        alt="Post" 
        width={800} 
        height={400} 
        className="w-full object-cover" 
      />
    )}

    <div className="px-4 pt-3 border-t border-gray-100">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{stats.likes} Me gusta</span>
        <span>{stats.comments} Comentarios • {stats.shares} Compartidos</span>
      </div>
    </div>

    <div className="px-4 py-2 border-t border-gray-100">
      <div className="flex justify-between">
        <button className="flex items-center justify-center space-x-1 text-gray-500 hover:text-blue-500 flex-1 py-1 rounded-lg hover:bg-blue-50">
          <i className="far fa-thumbs-up"></i>
          <span>Me gusta</span>
        </button>
        <button className="flex items-center justify-center space-x-1 text-gray-500 hover:text-green-500 flex-1 py-1 rounded-lg hover:bg-green-50">
          <i className="far fa-comment"></i>
          <span>Comentar</span>
        </button>
        <button className="flex items-center justify-center space-x-1 text-gray-500 hover:text-purple-500 flex-1 py-1 rounded-lg hover:bg-purple-50">
          <i className="fas fa-share"></i>
          <span>Compartir</span>
        </button>
      </div>
    </div>
  </div>
);

export default Profile;