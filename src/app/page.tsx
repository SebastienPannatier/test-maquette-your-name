import { Hero } from "@/app/components/sections/hero";
import Trailer from "@/app/components/sections/trailer";
import { Informations } from "@/app/components/sections/informations";
import { Dude } from "@/app/components/sections/dude";
import { Girl } from "@/app/components/sections/girl";
import { Footer } from "@/app/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Trailer />
      <Informations />
      <Dude />
      <Girl />
      <Footer />
    </>
  );
}
