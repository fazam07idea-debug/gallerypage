import { Camera } from "lucide-react";

const GalleryFooter = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-semibold text-foreground">
            Mànthàn
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground text-center">
          © 2026 Mànthàn Gallery. All rights reserved.
        </p>
        <div className="hidden md:block w-24" />
      </div>
    </footer>
  );
};

export default GalleryFooter;
