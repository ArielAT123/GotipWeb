'use client'

import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <div className="text-3xl font-bold mb-6 logo">
            <span className="text-blue-600">GO</span><span className="text-orange-500">tip</span>
          </div>
          <h1 className="text-2xl text-slate-800 mb-2">
            ¡Te damos la bienvenida a tu comunidad emprendedora!
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Conecta, colabora y haz crecer tu idea de negocio.
          </p>

          <button className="btn border-2 border-blue-600 text-blue-600 hover:opacity-90 mb-4 flex items-center justify-center gap-2 py-2 px-4 rounded-full">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width={20} height={20} />
            Continuar con Google
          </button>

          <button className="btn border border-gray-300 text-gray-700 hover:opacity-90 mb-4 flex items-center justify-center gap-2 py-2 px-4 rounded-full">
            <Image src="https://img.icons8.com/color/24/microsoft.png" alt="Microsoft" width={20} height={20} />
            Continuar con Microsoft
          </button>

          <button className="btn bg-blue-600 text-white hover:opacity-90 mb-4 py-2 px-4 rounded-full">
            Iniciar sesión con el email
          </button>

          <small className="text-xs text-slate-500 mt-2 block">
            Al hacer clic en «Continuar», aceptas nuestras{' '}
            <a href="#" className="text-blue-600 hover:underline">Condiciones de uso</a> y la{' '}
            <a href="#" className="text-blue-600 hover:underline">Política de privacidad</a>.
          </small>
          <small className="text-xs text-slate-500 mt-1 block">
            ¿Nuevo en GOtip?{' '}
            <a href="#" className="text-blue-600 hover:underline">Únete ahora</a>
          </small>
        </div>

        <div className="hidden md:block flex-1">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.dribbble.com/users/211816/screenshots/15835242/media/fb9f758d84547c6c8de5c6dd8a27ffb1.png?compress=1&resize=1200x900')` }}></div>
        </div>
      </div>
    </div>
  )
}
