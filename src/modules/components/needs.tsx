"use client";

import WhyNeed from "./why-need";
import Image from "next/image";
import InfoCard from "./main";
import { TbSquareDot } from "react-icons/tb";

export default function Needs() {
  return (
    <section className="relative w-full max-w-[1280px]  py-12 px-6 flex justify-center items-center">
      <div className="relative w-full min-h-screen max-w-[1280px]">
        <div className="absolute top-0 left-0 z-10">
          <WhyNeed />
        </div>

       {/* Line background */}
<Image
  src="/assets/why-need/line.svg"
  alt="Needs Divider"
  width={1120}
  height={1180}
  className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block z-0"
/>

{/* Cards */}
<div className="hidden lg:block  z-10">
  <div className="absolute" style={{ top: "60%", left: "20%" }}>
    <InfoCard
      icon={<TbSquareDot />}
      title="100% Chemical-Free"
      description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
    />
  </div>

  <div className="absolute" style={{ top: "38%", left: "45%" }}>
    <InfoCard
      icon={<TbSquareDot />}
      title="Free Delivery in Kathmandu valley"
      description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
    />
  </div>

  <div className="absolute" style={{ top: "0%", left: "85%" }}>
    <InfoCard
      icon={<TbSquareDot />}
      title="Quality Guaranteed"
      description="We provide certified organic foods directly from Nepali farmers, ensuring you receive the purest, most nutrient-rich products."
    />
  </div>
</div>
        </div>
    </section>
  );
}
