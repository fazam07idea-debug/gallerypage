import { useState } from "react";
import { X } from "lucide-react";
import chess6 from "@/assets/chess/chess-6.jpg";
import kbd from "@/assets/kabaddi-1.jpg";
import tbltns from "@/assets/table tennis/table-tennis-2.jpg";
import basketball3 from "@/assets/basketball/basket-ball-3.jpg";
import crk_md from "@/assets/crk_md.jpeg";
import volleyball9 from "@/assets/volleyball/volleyball-9.jpg";
import crk12 from "@/assets/cricket/cricket-12.jpeg";
import saq from "@/assets/cricket/cricket-7-h.jpeg";
import bsk7 from "@/assets/basketball/basket-ball-7.jpeg";

const photos = [
  { src: chess6, title: " ", category: " " },
  { src: crk_md, title: " ", category: " " },
  { src: tbltns, title: " ", category: " " },
  { src: basketball3, title: " ", category: " " },
  { src: saq, title: " ", category: " " },
  { src: crk12, title: " ", category: " " },
  { src: kbd, title: " ", category: " " },
  { src: volleyball9, title: " ", category: " " },
  { src: bsk7, title: " ", category: " " },
];

const MasonryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
            The Collection
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        <div className="masonry-grid">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="masonry-item cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <div className="relative overflow-hidden rounded-lg gallery-image-hover">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gallery-overlay/0 group-hover:bg-gallery-overlay/10 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-gallery-overlay/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-gallery-stone hover:text-primary-foreground transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-body text-xs tracking-widest uppercase text-gallery-stone">
              {photos[selected].category}
            </p>
            <p className="font-display text-xl text-primary-foreground mt-1">
              {photos[selected].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;
