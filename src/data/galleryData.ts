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


import chess1 from "@/assets/chess/chess-1.jpeg";
import chess2 from "@/assets/chess/chess-2.jpeg";
import chess3 from "@/assets/chess/chess-3.jpeg";
import chess4 from "@/assets/chess/chess-4.jpeg";
import chess5 from "@/assets/chess/chess-5.jpeg";
import chess6 from "@/assets/chess/chess-6.jpg";


import crk1 from "@/assets/cricket/cricket-1.jpeg";
import crk2 from "@/assets/cricket/cricket-2.jpeg";
import crk3 from "@/assets/cricket/cricket-3.jpeg";
import crk4 from "@/assets/cricket/cricket-4.jpeg";
import crk5 from "@/assets/cricket/cricket-5.jpeg";
import crk6 from "@/assets/cricket/cricket-6.jpeg";
import crk7 from "@/assets/cricket/cricket-7-h.jpeg";
import crk8 from "@/assets/cricket/cricket-8.jpeg";
import crk9 from "@/assets/cricket/cricket-9.jpeg";
import crk10 from "@/assets/cricket/cricket-10.jpeg";
import crk11 from "@/assets/cricket/cricket-11.jpeg";
import crk12 from "@/assets/cricket/cricket-12.jpeg";
import crk13 from "@/assets/cricket/cricket-13.jpeg";



import kabaddi1 from "@/assets/kabaddi/kabaddi-1.jpg";
import kabaddi2 from "@/assets/kabaddi/kabaddi-2.jpg";

import tbltns1 from "@/assets/table tennis/table-tennis-1.jpg";
import tbltns2 from "@/assets/table tennis/table-tennis-2.jpg";
import tbltns3 from "@/assets/table tennis/table-tennis-3.jpeg";


import vol1 from "@/assets/volleyball/volleyball-1.jpeg";
import vol2 from "@/assets/volleyball/volleyball-2.jpeg";
import vol3 from "@/assets/volleyball/volleyball-3.jpeg";
import vol4 from "@/assets/volleyball/volleyball-4.jpeg";
import vol5 from "@/assets/volleyball/volleyball-5.jpeg";
import vol6 from "@/assets/volleyball/volleyball-6.jpeg";
import vol7 from "@/assets/volleyball/volleyball-7.jpeg";
import vol8 from "@/assets/volleyball/volleyball-8.jpg";
import vol9 from "@/assets/volleyball/volleyball-9.jpg";


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
        cover: chess1,
        media: [
          { src: chess1, type: "image", title: "" },
          { src: chess2, type: "image", title: "" },
          { src: chess3, type: "image", title: "" },
          { src: chess4, type: "image", title: "" },
          { src: chess5, type: "image", title: "" },
          { src: chess6, type: "image", title: "" },
        ],
      },
      {
        id: "cricket",
        name: "Cricket",
        icon: "TreePine",
        cover: crk8,
        media: [
          { src: crk1, type: "image", title: "" },
          { src: crk2, type: "image", title: "" },
          { src: crk3, type: "image", title: "" },
          { src: crk4, type: "image", title: "" },
          { src: crk5, type: "image", title: "" },
          { src: crk6, type: "image", title: "" },
          { src: crk7, type: "image", title: "" },
          { src: crk8, type: "image", title: "" },
          { src: crk9, type: "image", title: "" },
          { src: crk10, type: "image", title: "" },
          { src: crk11, type: "image", title: "" },
          { src: crk12, type: "image", title: "" },
          { src: crk13, type: "image", title: "" },
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
      {
        id: "volleball",
        name: "Volleball",
        icon: "Waves",
        cover: vol9,
        media: [
          { src: vol1, type: "image", title: "" },
          { src: vol2, type: "image", title: "" },
          { src: vol3, type: "image", title: "" },
          { src: vol4, type: "image", title: "" },
          { src: vol5, type: "image", title: "" },
          { src: vol6, type: "image", title: "" },
          { src: vol7, type: "image", title: "" },
          { src: vol8, type: "image", title: "" },
          { src: vol9, type: "image", title: "" },
        ],
      },
    ],
  },
];
