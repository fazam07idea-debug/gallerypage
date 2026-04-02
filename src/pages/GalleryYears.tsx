import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { galleryData } from "@/data/galleryData";
import GalleryNavbar from "@/components/GalleryNavbar";
import GalleryFooter from "@/components/GalleryFooter";

const GalleryYears = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <GalleryNavbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Browse by Year
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-3">
              Gallery Archive
            </h1>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {galleryData.map((yearData) => (
              <button
                key={yearData.year}
                onClick={() => navigate(`/gallery/${yearData.year}`)}
                className="group relative overflow-hidden rounded-xl bg-card border border-border p-10 flex flex-col items-center gap-4 hover:border-primary/50 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <span className="font-display text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {yearData.year}
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  {yearData.programs.length} programs
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <GalleryFooter />
    </div>
  );
};

export default GalleryYears;
