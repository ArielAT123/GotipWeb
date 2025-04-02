'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUserFriends,
  faShareAlt, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';


export default function EventCard() {
  const [interested, setInterested] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Imagen con etiqueta Online */}
      <div className="relative">
        <img
          src="/event-placeholder.jpg"
          alt="Event"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          Online
        </span>
        <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-md font-medium shadow-md">
          Spa training
        </span>
      </div>

      {/* Contenido */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">Bone thugs-n-harmony</h3>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>Mon, Sep 25, 2020 at 9:30 AM</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>San Francisco</span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          {/* Avatares ficticios */}
          <div className="flex -space-x-3">
            <img src="/avatar1.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/avatar2.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium border-2 border-white">
              +78
            </div>
          </div>
          <span className="text-sm text-gray-600">are attending</span>
        </div>

          <div className="flex justify-between items-center pt-4">
          <button
    onClick={() => setInterested(!interested)}
    className={`text-sm px-4 py-2 rounded flex items-center gap-2 transition-all duration-200 ${
      interested
        ? 'bg-green-500 hover:bg-green-600 text-white'
        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
    }`}
  >
    <FontAwesomeIcon icon={faUserFriends} />
    <span className="flex items-center gap-1">
      Interested
      {interested && (
        <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
      )}
    </span>
  </button>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm px-3 py-2 rounded">
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}
