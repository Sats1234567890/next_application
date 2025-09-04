"use client";

import DecorativeImage from "@/components/global/decorativeImage";
import InfoCard from "./main";
import WhyNeed from "./why-need";
import Image from "next/image";

export default function Needs() {
  return (
    <section className="relative w-full max-w-[1280px] bg-[#EDF7EE] py-6 px-6 flex justify-center items-center">
      <div className="relative w-full h-screen max-w-[1280px]">
        
        {/* Left Heading */}
        <div className="absolute top-0 left-0 z-10">
          <WhyNeed />
        </div>

        {/* Background Line */}
        <Image
          src="/assets/why-need/line.svg"
          alt="Needs Divider"
          width={1120}
          height={1180}
          className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block z-0"
        />

        {/* Cards */}
        <div className="hidden lg:block z-10">
          <div className="absolute" style={{ top: "62%", left: "0%" }}>
            <InfoCard
              iconImage="/assets/why-need/grouping.svg"
              mainImage="/assets/why-need/1.png"
              title="100% Chemical-Free"
              description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
            />
          </div>

          <div className="absolute" style={{ top: "42%", left: "45%" }}>
            <InfoCard
              iconImage="/assets/why-need/grouping.svg"
              mainImage="/assets/why-need/2.png"
              title="Free Delivery in Kathmandu valley"
              description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
            />
          </div>

          <div className="absolute" style={{ bottom: "60%", left: "80%" }}>
            <InfoCard
              iconImage="/assets/why-need/grouping.svg"
              mainImage="/assets/why-need/3.png"
              title="Quality Guaranteed"
              description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute top-[75%] right-[0%] -translate-y-1/2 z-10">
          <DecorativeImage
            src="/assets/why-need/leaf.svg"
            alt="Contact Decorative"
            width={350}
            height={320}
            className="object-contain rounded-lg w-full h-full min-h-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
