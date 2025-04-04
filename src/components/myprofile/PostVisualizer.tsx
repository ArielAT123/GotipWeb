'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '@/types/user';

interface Comment {
  name: string;
  text: string;
  time: string;
}

interface PostVisualizerProps {
  user?: User;
  content?: string;
  imageUrl?: string;
  comments?: Comment[];
  timeAgo?: string;
}

const PostVisualizer: React.FC<PostVisualizerProps> = ({
  user = {
    name: '',
    puesto: '',
    ubicacion: '',
    fecha_inicio: '',
    Fotousuario: '',
    backgroundFoto: '',
  },
  content = 'Aquí va el contenido del post...',
  imageUrl = '',
  comments = [],
  timeAgo = '2h',
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full text-sm border border-gray-100">
      {/* Header del post */}
      <div className="flex items-center space-x-3 mb-4">
        {user.Fotousuario ? (
          <img
            src={user.Fotousuario}
            alt="profile"
            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
            N/A
          </div>
        )}
        <div className="flex-1">
          <p className="font-semibold text-gray-800">{user.name || 'Sin nombre'}</p>
          <p className="text-gray-500 text-xs">{user.puesto || 'Sin puesto'}</p>
        </div>
        <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-full">
          {timeAgo}
        </span>
      </div>

      {/* Contenido del post */}
      <p className="mb-4 text-gray-800 px-1 leading-relaxed">{content}</p>

      {imageUrl && (
        <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
          <img
            src={imageUrl}
            alt="post"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Botones de acciones */}
      <div className="flex justify-between items-center text-gray-600 text-sm mb-4 px-2">
        <div className="flex gap-6">
          <button className="hover:text-gray-800 transition-colors duration-200 flex items-center gap-1">
            <FontAwesomeIcon icon={faThumbsUp} className="text-lg" /> Like
          </button>
          <button className="hover:text-gray-800 transition-colors duration-200 flex items-center gap-1">
            <FontAwesomeIcon icon={faComment} className="text-lg" /> Comment
          </button>
        </div>
        <button className="hover:text-gray-800 transition-colors duration-200 flex items-center gap-1">
          <FontAwesomeIcon icon={faShare} className="text-lg" /> Share (0)
        </button>
      </div>

      {/* Línea divisoria con efecto borroso */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 blur-[1px]"></div>
        </div>
      </div>

      {/* Caja para nuevo comentario */}
      <div className="flex items-center gap-3 pt-2 px-1">
        <img
          src={user.Fotousuario || '/default-user.jpg'}
          alt="profile"
          className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Comentarios dinámicos */}
      <div className="mt-5 space-y-3">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-xs transition-shadow duration-200"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-800">{comment.name}</span>
              <span className="text-xs text-gray-400">• {comment.time}</span>
            </div>
            <p className="text-xs text-gray-600 pl-1">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostVisualizer;
