import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { galleryData } from "@/data/galleryData";
import GalleryNavbar from "@/components/GalleryNavbar";
import GalleryFooter from "@/components/GalleryFooter";

const GalleryPrograms = () => {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();

  const yearData = galleryData.find((y) => y.year === year);

  if (!yearData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Year not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GalleryNavbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/gallery")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Years
          </button>

          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground">
              {year}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-3">
              Programs
            </h1>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {yearData.programs.map((program) => {

              return (
                <button
                  key={program.id}
                  onClick={() => navigate(`/gallery/${year}/${program.id}`)}
                  className="group relative overflow-hidden rounded-xl border border-border text-left transition-all duration-500 hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={program.cover}
                      alt={program.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gallery-overlay/80 via-gallery-overlay/20 to-transparent" />
                    
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {program.media.length} items
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <GalleryFooter />
    </div>
  );
};

export default GalleryPrograms;
