"use client";

import InfoCard from "./main";
import WhyNeed from "./why-need";
import Image from "next/image";

export default function Needs() {
  return (
    <section className="relative w-full max-w-[1280px] py-4 px-6 flex justify-center items-center">
      <div className="relative w-full h-screen max-w-[1280px]">
        <div className="absolute top-0 left-0 z-10">
          <WhyNeed />
        </div>

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

          {/* Adjusted top percentage */}
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
      </div>
    </section>
  );
}