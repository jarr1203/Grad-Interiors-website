import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p5 from "@/assets/p5.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import p7 from "@/assets/p7.jpg.asset.json";
import p8 from "@/assets/p8.jpg.asset.json";
import p9 from "@/assets/p9.jpg.asset.json";
import p10 from "@/assets/p10.jpg.asset.json";
import p11 from "@/assets/p11.jpg.asset.json";

export const categories = ["All", "Living Room", "Bedroom", "Kitchen"] as const;
export type Category = Exclude<(typeof categories)[number], "All">;

export type Project = {
  src: string;
  caption: string;
  location: "Bangalore" | "Tamil Nadu";
  category: Category;
  tall?: boolean;
};

export const heroImage = p8.url;

// Add one entry per photo below to grow the gallery.
export const projects: Project[] = [
  { src: p8.url, caption: "Teal modular kitchen with pendant lighting", location: "Bangalore", category: "Kitchen" },
  { src: p6.url, caption: "Marble-finish TV wall with fluted panelling", location: "Bangalore", category: "Living Room", tall: true },
  { src: p2.url, caption: "Walnut-tone wardrobe with recessed handles", location: "Tamil Nadu", category: "Bedroom", tall: true },
  { src: p3.url, caption: "Geometric wooden partition for the foyer", location: "Tamil Nadu", category: "Living Room", tall: true },
  { src: p1.url, caption: "Sage and ivory L-shaped kitchen", location: "Tamil Nadu", category: "Kitchen", tall: true },
  { src: p4.url, caption: "Backlit media unit with jaali screen", location: "Bangalore", category: "Living Room", tall: true },
  { src: p7.url, caption: "Gloss wardrobe with brass-line detailing", location: "Bangalore", category: "Bedroom", tall: true },
  { src: p5.url, caption: "Open mint kitchen with lit glass display", location: "Tamil Nadu", category: "Kitchen", tall: true },
  { src: p9.url, caption: "Wooden slat partition with lit display niche", location: "Bangalore", category: "Living Room", tall: true },
  { src: p10.url, caption: "Marble TV wall with carved pooja unit", location: "Tamil Nadu", category: "Living Room" },
  { src: p11.url, caption: "Teal galley kitchen with under-cabinet glow", location: "Bangalore", category: "Kitchen", tall: true },
];
