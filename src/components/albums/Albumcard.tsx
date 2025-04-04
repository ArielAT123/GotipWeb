'use client';

import { Album } from '@/types/album';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow group hover:shadow-lg transition-all">
      <img
        src={album.src}
        alt={album.title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-3">
        <h5 className="text-sm font-semibold text-gray-800 mb-1">{album.title}</h5>
        <p className="text-xs text-gray-500">{album.count} photos</p>
      </div>
    </div>
  );
}
