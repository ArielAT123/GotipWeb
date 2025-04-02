'use client'

import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>GOtip - Red social para emprendedores</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      {/* Header elegante */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">GO</span>
                <span className="text-orange-500">tip</span>
              </div>
            </div>

            {/* Barra de búsqueda */}
            <div className="hidden md:flex flex-1 mx-8">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  placeholder="Buscar emprendimientos, personas o ideas..."
                />
              </div>
            </div>

            {/* Iconos de navegación */}
            <div className="flex items-center space-x-6">
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs mt-1">Inicio</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <i className="fas fa-user-friends text-xl"></i>
                <span className="text-xs mt-1">Mi red</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <i className="fas fa-lightbulb text-xl"></i>
                <span className="text-xs mt-1">Ideas</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <i className="fas fa-envelope text-xl"></i>
                <span className="text-xs mt-1">Mensajes</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                <i className="fas fa-bell text-xl"></i>
                <span className="text-xs mt-1">Notificaciones</span>
              </button>
              
              {/* Menú desplegable "Mi negocio" */}
              <div className="relative group">
                <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                  <i className="fas fa-store text-xl"></i>
                  <div className="flex items-center">
                    <span className="text-xs mt-1">Mi negocio</span>
                    <i className="fas fa-chevron-down text-xs ml-1"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar izquierdo - Perfil */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Portada */}
              <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              
              {/* Avatar y nombre */}
              <div className="px-4 pb-4 relative">
                <div className="flex justify-center -mt-12 mb-3">
                  <img 
                    className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Perfil"
                  />
                </div>
                
                <h2 className="text-xl font-bold text-center">Mi Negocio</h2>
                <p className="text-gray-500 text-sm text-center">Emprendedor en GOtip</p>
                <p className="text-gray-600 text-sm text-center mt-2">Compartiendo ideas para crecer juntos</p>
                
                {/* Stats */}
                <div className="flex justify-between mt-4 text-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-bold text-gray-800">56</div>
                    <div className="text-xs text-gray-500">Publicaciones</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">2.5K</div>
                    <div className="text-xs text-gray-500">Seguidores</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">365</div>
                    <div className="text-xs text-gray-500">Siguiendo</div>
                  </div>
                </div>
              </div>
              
              {/* Menú */}
              <nav className="px-4 pb-4">
                <ul className="space-y-1">
                  <SidebarItem icon="fas fa-lightbulb" label="Ideas para emprender" active />
                  <SidebarItem icon="fas fa-user" label="Mi perfil" />
                  <SidebarItem icon="fas fa-store" label="Mi negocio" />
                  <SidebarItem icon="fas fa-users" label="Contactos" />
                  <SidebarItem icon="fas fa-calendar-alt" label="Eventos" />
                  <SidebarItem icon="fas fa-chart-line" label="Estadísticas" />
                  <SidebarItem icon="fas fa-wallet" label="Financiamiento" />
                  <SidebarItem icon="fas fa-graduation-cap" label="Cursos" />
                  <SidebarItem icon="fas fa-hands-helping" label="Mentorías" />
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Contenido central */}
          <div className="w-full lg:w-2/4 space-y-4">
            {/* Crear publicación */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <img 
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Usuario"
                  />
                  <button 
                    className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-left text-gray-500 transition duration-200"
                    onClick={() => {/* Abrir modal */}}
                  >
                    ¿Qué quieres compartir hoy?
                  </button>
                </div>
                
                <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-50">
                    <i className="fas fa-image text-green-500"></i>
                    <span>Foto</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-50">
                    <i className="fas fa-video text-blue-500"></i>
                    <span>Video</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-50">
                    <i className="fas fa-calendar-alt text-red-500"></i>
                    <span>Evento</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-50">
                    <i className="fas fa-smile text-yellow-500"></i>
                    <span>Sentimiento</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Stories */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4">
                  {/* Tu story */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-32 rounded-xl bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">
                          <i className="fas fa-plus"></i>
                        </div>
                        <span className="text-xs font-medium">Crear story</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stories de otros */}
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex-shrink-0">
                      <div className="w-24 h-32 rounded-xl overflow-hidden relative">
                        <img 
                          className="w-full h-full object-cover"
                          src={`https://source.unsplash.com/random/200x300/?business,${item}`}
                          alt="Story"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="text-xs text-white truncate">Usuario {item}</div>
                        </div>
                        <div className="absolute top-2 left-2 w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                          <img 
                            className="w-full h-full object-cover"
                            src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Publicaciones */}
            <Post 
              user={{
                name: "EcoTienda Verde",
                role: "NEGOCIO",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                info: "Productos ecológicos · CDMX · 2h"
              }}
              content={{
                text: "¡Lanzamos nuestra nueva línea de productos zero waste! 🌱 Desde cepillos de bambú hasta envolturas de cera de abeja. ¡30% de descuento esta semana para nuestros seguidores!",
                tags: "#Oferta #Ecológico #EmprendimientoMexicano",
                image: "https://source.unsplash.com/random/800x400/?eco,products"
              }}
              stats={{
                likes: 128,
                comments: 24,
                shares: 15
              }}
              badge={{
                text: "NEGOCIO",
                color: "bg-purple-500"
              }}
              borderColor="border-l-blue-500"
            />
            
            <Post 
              user={{
                name: "Carlos Mendoza",
                role: "EMPRENDEDOR",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                info: "Fundador de Innovatech · 5h"
              }}
              content={{
                text: "🚀 Estoy buscando un cofundador con experiencia en desarrollo web para un proyecto de marketplace enfocado en artesanías mexicanas. Tengo el capital inicial y el plan de negocios, necesito a alguien apasionado por la tecnología y la cultura mexicana.",
                tags: "#BuscoSocio #Startup #Tecnología"
              }}
              stats={{
                likes: 45,
                comments: 18,
                shares: 7
              }}
              badge={{
                text: "EMPRENDEDOR",
                color: "bg-green-500"
              }}
              borderColor="border-l-orange-500"
              customActions={[
                { icon: "fas fa-handshake", label: "Colaborar" }
              ]}
            />
          </div>
          
          {/* Sidebar derecho */}
          <div className="w-full lg:w-1/4 space-y-4">
            {/* Personas que tal vez conozcas */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">Personas que tal vez conozcas</h3>
              </div>
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center">
                    <img 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                      alt="Usuario"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">Nombre {item}</h4>
                      <p className="text-xs text-gray-500 truncate">Descripción breve</p>
                    </div>
                    <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                      Seguir
                    </button>
                  </div>
                ))}
                <button className="w-full text-center text-blue-500 hover:text-blue-700 text-sm font-medium pt-2">
                  Ver más sugerencias
                </button>
              </div>
            </div>
            
            {/* Tendencias */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">Tendencias para ti</h3>
              </div>
              <div className="p-4 space-y-3">
                {['#Fintech', '#Sustentabilidad', '#MarketingDigital'].map((hashtag, index) => (
                  <div key={index} className="hover:bg-gray-50 -mx-4 px-4 py-2 cursor-pointer">
                    <h4 className="font-medium text-blue-500">{hashtag}</h4>
                    <p className="text-xs text-gray-500">
                      {Math.floor(Math.random() * 1000) + 500} publicaciones
                    </p>
                  </div>
                ))}
                <button className="w-full text-center text-blue-500 hover:text-blue-700 text-sm font-medium pt-2">
                  Mostrar más
                </button>
              </div>
            </div>
            
            {/* Oportunidades */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">Oportunidades</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start">
                  <img 
                    className="w-16 h-12 rounded-md object-cover mr-3"
                    src="https://source.unsplash.com/random/200x150/?workshop"
                    alt="Taller"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Taller: Marketing Digital</h4>
                    <p className="text-xs text-gray-500">¡Aprende a vender más!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    className="w-16 h-12 rounded-md object-cover mr-3"
                    src="https://source.unsplash.com/random/200x150/?investors"
                    alt="Inversión"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Ronda de inversión</h4>
                    <p className="text-xs text-gray-500">Postula tu proyecto</p>
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

// Componente SidebarItem
const SidebarItem: React.FC<{
  icon: string;
  label: string;
  active?: boolean;
}> = ({ icon, label, active = false }) => (
  <li>
    <a 
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
      href="#"
    >
      <i className={`${icon} w-5 text-center ${active ? 'text-blue-500' : 'text-gray-400'}`}></i>
      <span>{label}</span>
    </a>
  </li>
);

// Componente Post mejorado
const Post: React.FC<{
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
  borderColor?: string;
  customActions?: Array<{
    icon: string;
    label: string;
  }>;
}> = ({ user, content, stats, badge, borderColor = "border-l-blue-500", customActions }) => (
  <div className={`bg-white rounded-xl shadow-sm overflow-hidden relative border-l-4 ${borderColor}`}>
    {/* Header del post */}
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            className="w-10 h-10 rounded-full object-cover"
            src={user.avatar}
            alt={user.name}
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
        <div className="flex items-center">
          {user.role === "NEGOCIO" && (
            <button className="ml-2 px-3 py-1 bg-white border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50">
              Seguir
            </button>
          )}
          <button className="text-gray-400 hover:text-gray-600 ml-2">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    
    {/* Contenido del post */}
    <div className="px-4 pb-3">
      <p className="text-gray-800">{content.text}</p>
      {content.tags && <p className="text-blue-500 text-sm mt-1">{content.tags}</p>}
    </div>
    
    {/* Imagen del post */}
    {content.image && (
      <img 
        className="w-full object-cover"
        src={content.image}
        alt="Post"
      />
    )}
    
    {/* Stats del post */}
    <div className="px-4 pt-3 border-t border-gray-100">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{stats.likes} Me gusta</span>
        <span>{stats.comments} Comentarios • {stats.shares} Compartidos</span>
      </div>
    </div>
    
    {/* Acciones del post */}
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
        
        {customActions?.map((action, index) => (
          <button 
            key={index}
            className="flex items-center justify-center space-x-1 text-gray-500 hover:text-orange-500 flex-1 py-1 rounded-lg hover:bg-orange-50"
          >
            <i className={action.icon}></i>
            <span>{action.label}</span>
          </button>
        ))}
        
        {user.role === "NEGOCIO" && !customActions && (
          <button className="flex items-center justify-center space-x-1 text-gray-500 hover:text-orange-500 flex-1 py-1 rounded-lg hover:bg-orange-50">
            <i className="fas fa-shopping-cart"></i>
            <span>Comprar</span>
          </button>
        )}
      </div>
    </div>
    
    {/* Comentar */}
    <div className="px-4 py-3 border-t border-gray-100">
      <div className="flex items-center space-x-2">
        <img 
          className="w-8 h-8 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Usuario"
        />
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            placeholder="Escribe un comentario..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <button className="text-gray-400 hover:text-blue-500">
              <i className="far fa-smile"></i>
            </button>
            <button className="text-gray-400 hover:text-blue-500">
              <i className="fas fa-camera"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;