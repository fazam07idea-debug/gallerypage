import GalleryNavbar from "@/components/GalleryNavbar";
import GalleryHero from "@/components/GalleryHero";
import MasonryGallery from "@/components/MasonryGallery";
import GalleryFooter from "@/components/GalleryFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GalleryNavbar />
      <GalleryHero />
      <MasonryGallery />
      <GalleryFooter />
    </div>
  );
};

export default Index;
