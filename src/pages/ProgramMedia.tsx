import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryData } from "@/data/galleryData";
import GalleryNavbar from "@/components/GalleryNavbar";

const ProgramMedia = () => {
  const { year, programId } = useParams<{ year: string; programId: string }>();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const yearData = galleryData.find((y) => y.year === year);
  const program = yearData?.programs.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Program not found.</p>
      </div>
    );
  }

  const goNext = () => {
    if (selected !== null) setSelected((selected + 1) % program.media.length);
  };
  const goPrev = () => {
    if (selected !== null) setSelected((selected - 1 + program.media.length) % program.media.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <GalleryNavbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <button
            onClick={() => navigate(`/gallery/${year}`)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </button>

          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground">
              {year}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
              {program.name}
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-3">
              {program.media.length} photos & videos
            </p>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {program.media.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer gallery-image-hover"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gallery-overlay/0 group-hover:bg-gallery-overlay/40 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-display text-base text-primary-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-gallery-overlay/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-gallery-stone hover:text-primary-foreground transition-colors z-10"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-gallery-stone hover:text-primary-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-gallery-stone hover:text-primary-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {program.media[selected].type === "video" ? (
            <video
              src={program.media[selected].src}
              className="max-w-full max-h-[85vh] rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={program.media[selected].src}
              alt={program.media[selected].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-xl text-primary-foreground">
              {program.media[selected].title}
            </p>
            <p className="font-body text-xs text-gallery-stone mt-1">
              {selected + 1} / {program.media.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramMedia;
