'use client';

import AlbumCard from '../Albumcard';

const albums = [
  { id: 1, title: 'Cover Photos', count: 5, src: '/images/albums/01.jpg' },
  { id: 2, title: 'Profile pictures', count: 20, src: '/images/albums/02.jpg' },
  { id: 3, title: 'Untitled pictures', count: 12, src: '/images/albums/03.jpg' },
];

export default function Albums() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}
