import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";

const GalleryNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            Mànthàn
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/gallery"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
          >
            Gallery
          </a>
          <a
            href="#gallery"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
          >
            Collections
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="/gallery"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </a>
            {["Collections"].map((item) => (
              <a
                key={item}
                href="#gallery"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default GalleryNavbar;
