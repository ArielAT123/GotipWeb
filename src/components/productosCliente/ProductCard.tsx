'use client';
import React from 'react';

type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeColor?: string;
};

export default function ProductCard({
  name,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  badgeColor = 'bg-orange-500',
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden relative hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      {/* Badge */}
      {badge && (
        <div className={`absolute top-2 left-2 px-2 py-0.5 text-xs text-white rounded ${badgeColor}`}>
          {badge}
        </div>
      )}

      {/* Imagen */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-xs text-gray-500 block">{category}</span>
        <h3 className="text-sm font-semibold leading-tight mt-1 line-clamp-2 break-words">{name}</h3>

        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 font-bold text-sm">{price}</span>
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
          )}
        </div>

        <div className="flex items-center mt-2 text-sm text-yellow-500 gap-1">
          {'★'.repeat(Math.floor(rating))}
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
}
