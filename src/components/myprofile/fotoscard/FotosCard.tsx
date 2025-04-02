'use client';

interface FotosCardProps {
  imageUrl: string;
  link: string;
}

export default function FotosCard({ imageUrl, link }: FotosCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group overflow-hidden rounded-xl shadow hover:shadow-lg transition-all"
    >
      <img
        src={imageUrl}
        alt="Foto"
        className="w-full h-32 object-cover blur-sm group-hover:blur-0 transition-all duration-300"
      />
    </a>
  );
}
