import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/gallery-1.jpg";

const GalleryHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Golden hour landscape over rolling hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gallery-overlay/60 via-gallery-overlay/30 to-gallery-overlay/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gallery-stone opacity-0 animate-fade-up">
          A curated collection
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold gallery-hero-text mt-4 opacity-0 animate-fade-up animation-delay-200">
          Lumière Gallery
        </h1>
        <p className="font-body text-base md:text-lg text-gallery-stone/90 mt-6 max-w-lg opacity-0 animate-fade-up animation-delay-400">
          Capturing fleeting moments of light, texture, and emotion through the lens
        </p>
        <button
          onClick={() => navigate("/gallery")}
          className="mt-10 px-8 py-3 border border-gallery-stone/40 text-gallery-stone font-body text-sm tracking-widest uppercase hover:bg-primary/20 hover:border-primary transition-all duration-300 rounded-sm opacity-0 animate-fade-up animation-delay-600"
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default GalleryHero;
