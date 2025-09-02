import Button from "@/components/global/button";
import HeroImage from "@/components/global/hero";
import { MissionVision } from "@/modules/components/about/about-us";
import { Support } from "@/modules/components/about/support";
import { WhatMakeUnique } from "@/modules/components/about/unique";

export default function AboutUs() {
  return (
    <>
    <div>
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
     </>
  );
}