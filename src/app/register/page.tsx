'use client'

import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <div className="text-3xl font-bold mb-6 logo">
            <span className="text-blue-600">GO</span><span className="text-orange-500">tip</span>
          </div>
          <h1 className="text-2xl text-slate-800 mb-2">
            Únete a la red de emprendedores
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Crea una cuenta para compartir ideas, conectar y crecer.
          </p>

          <button className="btn-social border-2 border-blue-600 text-blue-600 hover:opacity-90 mb-4 flex items-center justify-center gap-2 py-2 px-4 rounded-full">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width={20} height={20} />
            Registrarme con Google
          </button>

          <button className="btn-social border-2 border-[#1877f2] text-[#1877f2] hover:opacity-90 mb-4 flex items-center justify-center gap-2 py-2 px-4 rounded-full">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width={20} height={20} />
            Registrarme con Facebook
          </button>

          <div className="separator text-center text-sm text-slate-500 relative my-5">
            <div className="absolute left-0 top-1/2 w-[40%] h-px bg-gray-300"></div>
            O usa tu correo electrónico
            <div className="absolute right-0 top-1/2 w-[40%] h-px bg-gray-300"></div>
          </div>

          <form className="flex flex-col">
            <input type="text" placeholder="Nombre completo" required className="p-3 mb-3 rounded-md border border-gray-300 bg-gray-100 text-sm" />
            <input type="email" placeholder="Correo electrónico" required className="p-3 mb-3 rounded-md border border-gray-300 bg-gray-100 text-sm" />
            <input type="password" placeholder="Contraseña" required className="p-3 mb-3 rounded-md border border-gray-300 bg-gray-100 text-sm" />
            <input type="password" placeholder="Confirmar contraseña" required className="p-3 mb-3 rounded-md border border-gray-300 bg-gray-100 text-sm" />
            <button type="submit" className="bg-blue-600 text-white font-semibold rounded-md py-3 mt-2 hover:bg-blue-700 transition">
              Registrarme
            </button>
          </form>

          <small className="text-xs text-slate-500 mt-4 block">
            Al registrarte, aceptas nuestras{' '}
            <a href="#" className="text-blue-600 hover:underline">Condiciones</a>,{' '}
            <a href="#" className="text-blue-600 hover:underline">Política de privacidad</a> y{' '}
            <a href="#" className="text-blue-600 hover:underline">Política de cookies</a>.
          </small>
          <small className="text-xs text-slate-500 mt-1 block">
            ¿Ya tienes una cuenta?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Inicia sesión</a>
          </small>
        </div>

        <div className="hidden md:block flex-1">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.dribbble.com/users/417504/screenshots/15422471/media/67475ce1f2e9c1c3e9cbbe7a5413e37c.png?compress=1&resize=1200x900')` }}></div>
        </div>
      </div>
    </div>
  )
}
