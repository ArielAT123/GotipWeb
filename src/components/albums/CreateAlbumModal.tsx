'use client';

import { useState } from 'react';

export default function CreateAlbumModal() {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    document.getElementById('modalCreateAlbum')?.classList.add('hidden');
    setShow(false);
  };

  return (
    <div
      id="modalCreateAlbum"
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center hidden"
    >
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Crear álbum</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Nombre del álbum</label>
            <input
              type="text"
              placeholder="Escribe aquí"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Audiencia</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>Público</option>
              <option>Amigos</option>
              <option>Privado</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Sube fotos o videos</label>
            <div className="border-dashed border-2 border-gray-300 rounded p-6 text-center text-sm text-gray-500">
              Arrastra tus archivos aquí o haz clic para subir.
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Crear álbum
          </button>
        </form>
      </div>
    </div>
  );
}
