'use client';

import PhotoCard from '../PhotoCard';

const photos = [
  { id: 4, src: '/images/albums/04.jpg', alt: 'Photo 4' },
  { id: 5, src: '/images/albums/05.jpg', alt: 'Photo 5' },
  { id: 6, src: '/images/albums/06.jpg', alt: 'Photo 6' },
];

export default function RecentlyAdded() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-yellow-400 bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer text-center">
        <i className="fas fa-upload text-3xl text-yellow-600 mb-2" />
        <p className="font-medium text-sm text-yellow-700">Upload new</p>
      </div>

      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
