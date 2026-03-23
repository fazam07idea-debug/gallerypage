import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

export interface ProgramData {
  id: string;
  name: string;
  icon: string; // lucide icon name
  cover: string;
  media: { src: string; type: "image" | "video"; title: string }[];
}

export interface YearData {
  year: string;
  programs: ProgramData[];
}

export const galleryData: YearData[] = [
  {
    year: "2026",
    programs: [
      {
        id: "annual-gala",
        name: "Annual Gala",
        icon: "Sparkles",
        cover: gallery1,
        media: [
          { src: gallery1, type: "image", title: "Golden Fields" },
          { src: gallery5, type: "image", title: "Horizon Glow" },
          { src: gallery6, type: "image", title: "Cobblestone Evening" },
        ],
      },
      {
        id: "nature-expedition",
        name: "Nature Expedition",
        icon: "TreePine",
        cover: gallery4,
        media: [
          { src: gallery4, type: "image", title: "River Mist" },
          { src: gallery7, type: "image", title: "Alpine Majesty" },
          { src: gallery3, type: "image", title: "Morning Dew" },
          { src: gallery8, type: "image", title: "Desert Waves" },
        ],
      },
      {
        id: "architecture-tour",
        name: "Architecture Tour",
        icon: "Building2",
        cover: gallery2,
        media: [
          { src: gallery2, type: "image", title: "Geometric Light" },
          { src: gallery6, type: "image", title: "Cobblestone Evening" },
        ],
      },
      {
        id: "ocean-retreat",
        name: "Ocean Retreat",
        icon: "Waves",
        cover: gallery5,
        media: [
          { src: gallery5, type: "image", title: "Horizon Glow" },
          { src: gallery7, type: "image", title: "Alpine Majesty" },
          { src: gallery1, type: "image", title: "Golden Fields" },
        ],
      },
      {
        id: "street-stories",
        name: "Street Stories",
        icon: "MapPin",
        cover: gallery6,
        media: [
          { src: gallery6, type: "image", title: "Cobblestone Evening" },
          { src: gallery2, type: "image", title: "Geometric Light" },
          { src: gallery8, type: "image", title: "Desert Waves" },
        ],
      },
      {
        id: "wilderness-camp",
        name: "Wilderness Camp",
        icon: "Tent",
        cover: gallery8,
        media: [
          { src: gallery8, type: "image", title: "Desert Waves" },
          { src: gallery3, type: "image", title: "Morning Dew" },
          { src: gallery4, type: "image", title: "River Mist" },
        ],
      },
    ],
  },
];
