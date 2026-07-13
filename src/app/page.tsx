import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { Services } from "../components/sections/Services";
import { Marquee } from "../components/shared/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork limit={4} />
      <Services />
      <Marquee />
    </>
  );
}
