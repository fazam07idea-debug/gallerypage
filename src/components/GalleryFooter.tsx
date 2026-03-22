import { Camera } from "lucide-react";

const GalleryFooter = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-semibold text-foreground">Lumière</span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Lumière Gallery. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Twitter", "Behance"].map((s) => (
            <a key={s} href="#" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default GalleryFooter;
