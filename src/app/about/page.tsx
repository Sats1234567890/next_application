import Button from "@/components/global/button";
import HeroImage from "@/components/global/hero";
import Navbar from "@/components/header";
import { MissionVision } from "@/modules/components/about/about-us";
import { Marquee } from "@/modules/components/about/marque";
import { Support } from "@/modules/components/about/support";
import { WhatMakeUnique } from "@/modules/components/about/unique";
import { NewsLetter } from "@/modules/components/contact/contact";
import { Footer } from "@/modules/components/footer/footer";

export default function AboutUs() {
  return (
    <>
      <div>
        <Navbar />
        <HeroImage
  imageSrc="/assets/slider/contact.jpg"
  title="Bringing Nature’s Best from the Himalayas to the World"
  className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] mb-12 mt-3"
>
  <p className="mb-2 mt-4 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
    “organic farming, Nepalese origin, sustainability.”
  </p>
  <Button
    text={"Explore Our Product"}
    href={"/explore"}
    className="block text-sm sm:text-base md:text-lg"
  />
</HeroImage>


        <MissionVision />
      </div>

      <WhatMakeUnique />
      <Support />
      <Marquee />
      <NewsLetter />
      <Footer />
    </>
  );
}
