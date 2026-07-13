export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Design Head",
    company: "JECRC University",
    duration: "Present",
  },
  {
    id: "exp-2",
    role: "Visual Designer",
    company: "Freelance",
    duration: "2023 - Present",
  },
  {
    id: "exp-3",
    role: "Graphic Design Student",
    company: "Arena Animation",
    duration: "2022 - 2023",
  },
];

export const servicesList: string[] = [
  "Brand Identity",
  "Logo Design",
  "Packaging Design",
  "Social Media Design",
  "Creative Direction",
  "UI/UX Design",
];

export const navLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];
