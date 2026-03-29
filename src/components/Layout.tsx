import GalleryNavbar from "@/components/GalleryNavbar";
import GalleryFooter from "@/components/GalleryFooter";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GalleryNavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <GalleryFooter />
    </div>
  );
};

export default MainLayout;