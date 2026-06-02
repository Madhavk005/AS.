export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  year: string;
  description?: string;
  services?: string[];
}

export const projects: Project[] = [
  {
    id: "aurawa",
    title: "Aurawa",
    category: "Branding",
    image: "/img/works/Aurawa.png",
    link: "/img/works/Aurawa.pdf",
    year: "2024",
    description: "A complete brand identity and visual system designed to reflect elegance, modernity, and a strong market presence.",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Typography"],
  },
  {
    id: "qupholic",
    title: "Qupholic",
    category: "Branding",
    image: "/img/works/Qupholic.png",
    link: "/img/works/Qupholic.pdf",
    year: "2024",
    description: "An energetic and bold branding project focused on creating a memorable identity through striking color palettes and custom typography.",
    services: ["Brand Identity", "Packaging Design", "Art Direction"],
  },
  {
    id: "ritva",
    title: "Ritva",
    category: "Branding",
    image: "/img/works/Ritva.png",
    link: "/img/works/Ritva.pdf",
    year: "2023",
    description: "A refined visual identity crafted for a premium lifestyle brand, emphasizing minimalistic aesthetics and sophisticated design elements.",
    services: ["Brand Strategy", "Logo Design", "Editorial Design"],
  },
  {
    id: "vaani",
    title: "Vaani Enterprises",
    category: "Branding",
    image: "/img/works/VEArtboard 1 copy 6@4x.png",
    year: "2023",
    description: "Corporate branding designed to communicate trust, reliability, and growth in a competitive industry.",
    services: ["Corporate Identity", "Brand Guidelines", "Stationery"],
  },
  {
    id: "social",
    title: "Social Media",
    category: "Design",
    image: "/img/works/Social Media Posts.png",
    link: "/img/works/Social Media Posts.pdf",
    year: "2023",
    description: "A curated collection of high-engagement social media campaigns and visual content designed to drive brand awareness.",
    services: ["Social Media Strategy", "Content Creation", "Graphic Design"],
  },
  {
    id: "banners",
    title: "Banners",
    category: "Design",
    image: "/img/works/Banners.png",
    link: "/img/works/Banners.pdf",
    year: "2022",
    description: "Large-scale digital and print banner designs focused on strong typography, clear messaging, and high-impact visuals.",
    services: ["Print Design", "Digital Advertising", "Layout"],
  },
  {
    id: "printables",
    title: "Printables",
    category: "Design",
    image: "/img/works/Printables.png",
    link: "/img/works/Printables.pdf",
    year: "2022",
    description: "Custom printable assets ranging from brochures to event materials, maintaining cohesive brand standards across physical touchpoints.",
    services: ["Print Design", "Typography", "Editorial Layout"],
  },
];
