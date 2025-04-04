'use client';

import { Photo } from '@/types/photos';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition">
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Dropdown de acciones */}
      <div className="absolute bottom-2 right-2">
        <button
          className="bg-blue-600 text-white rounded p-2 shadow-lg hover:bg-blue-700 transition"
        >
          <i className="fas fa-pencil-alt" />
        </button>
      </div>
    </div>
  );
}
