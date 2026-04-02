import { useState } from "react";
import { X } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const photos = [
  { src: gallery7, title: "Alpine Majesty", category: "Landscape" },
  { src: gallery2, title: "Geometric Light", category: "Architecture" },
  { src: gallery3, title: "Morning Dew", category: "Macro" },
  { src: gallery4, title: "River Mist", category: "Aerial" },
  { src: gallery5, title: "Horizon Glow", category: "Seascape" },
  { src: gallery6, title: "Cobblestone Evening", category: "Street" },
  { src: gallery8, title: "Desert Waves", category: "Landscape" },
  { src: gallery1, title: "Golden Fields", category: "Landscape" },
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
