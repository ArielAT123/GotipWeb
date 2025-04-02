'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment,
    faShare
} from '@fortawesome/free-solid-svg-icons';

const PostVisualizer = () => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl mx-auto text-sm border border-gray-100">
            {/* Header del post */}
            <div className="flex items-center space-x-3 mb-4">
                <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex-1">
                    <p className="font-semibold text-gray-800">Alfonso Tipán</p>
                    <p className="text-gray-500 text-xs">Arquitecto de Soluciones</p>
                </div>
                <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-full">2hr</span>
            </div>

            {/* Contenido del post */}
            <p className="mb-4 text-gray-800 px-1 leading-relaxed">
                Estoy feliz de compartir que hemos lanzado la nueva funcionalidad de chat seguro en TipiZone, con cifrado de extremo a extremo.
            </p>

            <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
                <img
                    src="/post-image.jpg"
                    alt="post"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

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
                    <FontAwesomeIcon icon={faShare} className="text-lg" /> Share ( 0 )
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
                    src="/profile.jpg"
                    alt="profile"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                />
            </div>

            {/* Comentarios */}
            <div className="mt-5 space-y-3">
                <div className="bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-xs transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">Frances Guerrero</span>
                        <span className="text-xs text-gray-400">• 5hr</span>
                    </div>
                    <p className="text-xs text-gray-600 pl-1">Removend demands expense...</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-xs transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">Lori Stevens</span>
                        <span className="text-xs text-gray-400">• 2hr</span>
                    </div>
                    <p className="text-xs text-gray-600 pl-1">See resolved goodness felicity...</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-xs transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">Billy Vasquez</span>
                        <span className="text-xs text-gray-400">• 15min</span>
                    </div>
                    <p className="text-xs text-gray-600 pl-1">Wishing calling is warrant...</p>
                </div>
            </div>
        </div>
    );
};

export default PostVisualizer;