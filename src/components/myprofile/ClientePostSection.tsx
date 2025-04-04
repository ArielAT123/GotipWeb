'use client';

import React from "react";
import PostVisualizer from "./PostVisualizer";
import { User } from "@/types/user";

interface Props {
  user: User;
}

const ClientPostSection: React.FC<Props> = ({ user }) => {
  return (
    <PostVisualizer
      user={user}
      content="Estoy feliz de compartir que hemos lanzado la nueva funcionalidad de chat seguro en TipiZone, con cifrado de extremo a extremo."
      imageUrl="/post-image.jpg"
      comments={[
        { name: "Lori Stevens", text: "¡Felicidades, gran logro!", time: "1h" },
        { name: "Billy Vasquez", text: "Excelente funcionalidad 🔥", time: "15min" },
      ]}
      timeAgo="2h"
    />
  );
};

export default ClientPostSection;
