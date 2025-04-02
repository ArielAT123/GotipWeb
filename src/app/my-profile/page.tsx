import About from "../../components/myprofile/About";
import Experience from "../../components/myprofile/Experience";
import MyPhotos from "../../components/myprofile/MisFotos";
import MyFriends from "../../components/myprofile/MisAmigos";
import Post from "../../components/myprofile/Post";
import MainHeader from "@/components/layouts/mainHeader";

export default function ProfilePage() {
  return (
    <>
      <MainHeader />
      <div className="p-4 space-y-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <About />
            <Experience />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Post />
            <Post />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MyPhotos />
          <MyFriends />
        </div>
      </div>
    </>
  );
}
