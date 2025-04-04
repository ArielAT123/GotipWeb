'use client';

import PhotoCard from '../PhotoCard';

const photos = [
  { id: 1, src: '/images/albums/01.jpg', alt: 'Photo 1' },
  { id: 2, src: '/images/albums/02.jpg', alt: 'Photo 2' },
  { id: 3, src: '/images/albums/03.jpg', alt: 'Photo 3' },
];

export default function YourPhotos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* Add Photo card */}
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer text-center">
        <i className="fas fa-camera-retro text-3xl text-blue-600 mb-2" />
        <p className="font-medium text-sm text-blue-600">Add Photo</p>
      </div>

      {/* Existing Photos */}
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
