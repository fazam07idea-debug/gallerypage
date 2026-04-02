import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";


import bad1 from "@/assets/badminton/badminton-1.jpg";
import bad2 from "@/assets/badminton/badminton-2.jpeg";

import basketball1 from "@/assets/basketball/basket-ball-1.jpg";
import basketball2 from "@/assets/basketball/basket-ball-2.jpg";
import basketball3 from "@/assets/basketball/basket-ball-3.jpg";
import basketball4 from "@/assets/basketball/basket-ball-4.jpg";
import basketball5 from "@/assets/basketball/basket-ball-5.jpg";
import basketball6 from "@/assets/basketball/basket-ball-6.jpg";
import basketball7 from "@/assets/basketball/basket-ball-7.jpeg";


import chess from "@/assets/chess/chess-1.jpg";



import kabaddi1 from "@/assets/kabaddi/kabaddi-1.jpg";
import kabaddi2 from "@/assets/kabaddi/kabaddi-2.jpg";

import tbltns1 from "@/assets/table tennis/table-tennis-1.jpg";
import tbltns2 from "@/assets/table tennis/table-tennis-2.jpg";
import tbltns3 from "@/assets/table tennis/table-tennis-3.jpeg";




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
        id: "badminton",
        name: "Badminton",
        icon: "Tent",
        cover: bad1,
        media: [
          { src: bad1, type: "image", title: "" },
          { src: bad2, type: "image", title: "" },
        ],
      },
      {
        id: "basket-ball",
        name: "Basket Ball",
        icon: "Sparkles",
        cover: basketball5,
        media: [
          { src: basketball1, type: "image", title: "" },
          { src: basketball2, type: "image", title: "" },
          { src: basketball3, type: "image", title: "" },
          { src: basketball4, type: "image", title: "" },
          { src: basketball5, type: "image", title: "" },
          { src: basketball6, type: "image", title: "" },
          { src: basketball7, type: "image", title: "" },
        ],
      },
      {
        id: "chess",
        name: "Chess",
        icon: "MapPin",
        cover: chess,
        media: [
          { src: chess, type: "image", title: "" },
        ],
      },
      {
        id: "cricket",
        name: "Cricket",
        icon: "TreePine",
        cover: gallery4,
        media: [
          { src: gallery4, type: "image", title: "" },
          { src: gallery7, type: "image", title: "" },
          { src: gallery3, type: "image", title: "" },
          { src: gallery8, type: "image", title: "" },
        ],
      },

      {
        id: "kabaddi",
        name: "Kabaddi",
        icon: "Building2",
        cover: kabaddi1,
        media: [
          { src: kabaddi1, type: "image", title: "" },
          { src: kabaddi2, type: "image", title: "" },
        ],
      },
      {
        id: "table-tennis",
        name: "Table Tennis",
        icon: "Waves",
        cover: tbltns1,
        media: [
          { src: tbltns1, type: "image", title: "" },
          { src: tbltns2, type: "image", title: "" },
          { src: tbltns3, type: "image", title: "" }
        ],
      },
    ],
  },
];
