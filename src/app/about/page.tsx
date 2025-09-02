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
      <Navbar/>
      <HeroImage
        imageSrc="/assets/slider/contact.jpg"
        title="Bringing Nature’s Best from the Himalayas to the World"
        height="400px"
        className="mb-12 flex flex-col items-start justify-center" // Ensures vertical stacking
      >
        <p className="mb-4 text-lg block text-white font-bold max-w-2xl">
          “organic farming, Nepalese origin, sustainability.”
        </p>
        <Button text={"Explore Our Product"} href={"/explore"} className="block" />
      </HeroImage>
       <MissionVision/>
      
    </div>
     <WhatMakeUnique/>
     <Support/>
     <Marquee/>
      <NewsLetter/>
           <Footer/>
     </>
  );
}