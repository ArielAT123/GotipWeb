import About from "../../components/myprofile/About";
import Experience from "../../components/myprofile/Experience";
import MyPhotos from "../../components/myprofile/MisFotos";
import MyFriends from "../../components/myprofile/MisAmigos";
import Post from "../../components/myprofile/Post";
import MainHeader from "@/components/layouts/mainHeader";
import PostVisualizer from "@/components/myprofile/PostVisualizer";

export default function ProfilePage() {
  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Columna izquierda: PostVisualizer (30% del ancho) */}
          <div className="lg:w-[70%]">
            <div className="w-full">  {/* Contenedor para igualar ancho */}
              <PostVisualizer />
            </div>
            <div className="mt-4">
              <Post />
            </div>
          </div>
          {/* Columna derecha: Contenedor con MISMO ANCHO para todos los componentes (70% del ancho) */}
          <div className="w-full lg:w-[30%] space-y-6">
            <div className="w-full">  {/* Contenedor para igualar ancho */}
              <About />
            </div>
            <div className="w-full">
              <Experience />
            </div>
            <div className="w-full">
              <MyPhotos />
            </div>
            <div className="w-full">
              <MyFriends />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}