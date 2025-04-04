import About from "../../components/myprofile/About";
import Experience from "../../components/myprofile/Experience";
import MyPhotos from "../../components/myprofile/MisFotos";
import MyFriends from "../../components/myprofile/MisAmigos";
import Post from "../../components/myprofile/Post";
import MainHeader from "@/components/layouts/mainHeader";
import ProfileVisualizer from "@/components/myprofile/profile/ProfileVisualizer";
import ClientPostSection from "@/components/myprofile/ClientePostSection"; // ✅ Aquí se importa el nuevo cliente
import { User } from "@/types/user";

const getUserData = async (): Promise<User> => {
  return {
    name: "Sam Lanson",
    puesto: "Lead Developer",
    ubicacion: "New Hampshire",
    fecha_inicio: "Nov 26, 2019",
    Fotousuario: "/path/to/image.jpg",
    backgroundFoto: "/path/to/background.jpg",
  };
};

export default async function ProfilePage() {
  const user = await getUserData();

  return (
    <>
      <MainHeader />
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Columna izquierda (Perfil y Posts) */}
          <div className="lg:w-[70%]">
            <div className="w-full">
              <ProfileVisualizer user={user} />
              <ClientPostSection user={user} /> {/* ✅ Aquí se usa el cliente */}
            </div>
            <div className="mt-4">
              <Post />
            </div>
          </div>

          {/* Columna derecha (About, Experience, etc.) */}
          <div className="w-full lg:w-[30%] space-y-6">
            <div className="w-full">
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
