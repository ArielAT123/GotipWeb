'use client';

import FotosCard from "./fotoscard/FotosCard";

export default function MyPhotos() {
  const fotos = [
    { imageUrl: "/images/albums/01.jpg", link: "/gallery/01" },
    { imageUrl: "/images/albums/02.jpg", link: "/gallery/02" },
    { imageUrl: "/images/albums/03.jpg", link: "/gallery/03" },
    { imageUrl: "/images/albums/04.jpg", link: "/gallery/04" },
    { imageUrl: "/images/albums/05.jpg", link: "/gallery/05" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Mis Fotos</h2>
        <a href="/gallery" className="text-blue-600 text-sm bg-blue-100 text-blue-600 text-base w-6 h-6 rounded flex items-center justify-center font-bold leading-none hover:bg-blue-200 transition ">Ver todas</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {fotos.map((foto, idx) => (
          <FotosCard key={idx} imageUrl={foto.imageUrl} link={foto.link} />
        ))}
      </div>
    </div>
  );
}
