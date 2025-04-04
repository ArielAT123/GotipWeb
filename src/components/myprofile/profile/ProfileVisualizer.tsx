'use client';

import React from "react";
import { User } from "@/types/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faBriefcase,
  faMapMarkerAlt,
  faCalendarAlt,
  faEllipsisH,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
  user?: User;
}

const ProfileVisualizer: React.FC<ProfileProps> = ({
  user = {
    name: "",
    puesto: "",
    ubicacion: "",
    fecha_inicio: "",
    Fotousuario: "",
    backgroundFoto: "",
  },
}) => {
  return (
    <div className="mb-[5%] max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow">
      {/* Background image */}
      <div className="relative w-full h-40 bg-gray-200">
        {user.backgroundFoto && (
          <img
            src={user.backgroundFoto}
            alt="Background"
            className="object-cover w-full h-full"
          />
        )}
        {/* Photo & name on top */}
        <div className="absolute -bottom-12 left-6 flex items-center gap-4">
          <img
            src={user.Fotousuario}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              {user.name || "Nombre no disponible"}
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
            </h2>
            <p className="text-sm text-gray-600">250 connections</p>
          </div>
        </div>
      </div>

      {/* Header actions */}
      <div className="flex justify-end px-6 pt-8 gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 text-sm rounded hover:bg-red-200 transition">
          <FontAwesomeIcon icon={faPen} />
          Edit profile
        </button>
        <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>

      {/* Info */}
      <div className="px-6 pt-4 pb-6 space-y-2 border-b">
        {user.puesto && (
          <div className="text-gray-800 flex items-center gap-2">
            <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
            {user.puesto}
          </div>
        )}
        {user.ubicacion && (
          <div className="text-gray-800 flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
            {user.ubicacion}
          </div>
        )}
        {user.fecha_inicio && (
          <div className="text-gray-800 flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
            Joined on {user.fecha_inicio}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 px-6 py-4 text-sm font-medium border-b text-gray-600 overflow-x-auto">
        <div className="text-blue-600 border-b-2 border-blue-600 pb-2">Posts</div>
        <div className="hover:text-gray-900">About</div>
        <div className="hover:text-gray-900">Connections</div>
        <div className="hover:text-gray-900">Media</div>
        <div className="hover:text-gray-900">Videos</div>
        <div className="hover:text-gray-900">Events</div>
        <div className="hover:text-gray-900">Activity</div>
      </div>
    </div>
  );
};

export default ProfileVisualizer;
