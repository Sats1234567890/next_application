import React from "react";
import Image from "next/image";
import { FaGlobe, FaLeaf, FaHeart } from "react-icons/fa";
import DecorativeImage from "@/components/global/decorativeImage";

export const Support = () => {
  const data = [
    {
      icon: <span role="img" aria-label="farmer" className="text-2xl">🧑‍🌾</span>,
      highlight: "40+",
      title: "Farmers Supported",
      description: "Building sustainable livelihoods through fair trade.",
      bg: "bg-white",
    },
    {
      icon: <FaGlobe className="text-blue-500 text-2xl" />,
      highlight: "10+",
      title: "Countries Reached",
      description: "Exporting Nepal's natural treasure globally.",
      bg: "bg-white",
    },
    {
      icon: <FaLeaf className="text-green-500 text-2xl" />,
      highlight: "100%",
      title: "Organic & Sustainable",
      description: "Eco Friendly practices that respect nature.",
      bg: "bg-white",
    },
  ];

  return (
    <section className="bg-[#e9f0f4] py-10 px-3 sm:px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 leading-snug">
          <FaGlobe className="inline text-blue-500 mr-2" />
          Our Impact & <span className="text-green-600">Global</span> Reach Empowering Farmers{" "}
          <span className="text-green-600">in</span> Nepal.
          <br />
          <span className="block mt-1 text-base sm:text-lg">Serving Communities worldwide</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch relative">
          {/* Left: Cards */}
          <div className="flex-1 flex flex-col md:flex-row gap-4">
            {/* Cards column */}
            <div className="flex flex-col gap-4 flex-[1.2] w-full md:w-auto">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg shadow ${item.bg} p-3 flex items-center gap-4 min-h-[110px] w-full md:w-[370px]`}
                >
                  <span>{item.icon}</span>
                  <div>
                    <span className="font-bold text-2xl text-green-700 mr-1">{item.highlight}</span>
                    <span className="font-bold text-lg text-gray-800">{item.title}</span>
                    <div className="text-gray-600 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Happy Customers card with image */}
            <div className="flex flex-col flex-1 w-full md:w-[370px] md:absolute md:left-[400px] md:top-0">
              <div className="rounded-lg shadow bg-green-200 p-3 flex items-center gap-4 min-h-[110px] mb-4 w-full">
                <span><FaHeart className="text-green-700 text-2xl" /></span>
                <div>
                  <span className="font-bold text-2xl text-green-700 mr-1">1000+</span>
                  <span className="font-bold text-lg text-green-900">Happy Customers</span>
                  <div className="text-green-900 text-sm">Trusted worldwide for purity and authenticity</div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
  <Image
    src="/assets/about/leaf.png"
    alt="Decorative Leaf"
    width={320}
    height={120}
    className="rounded-lg object-cover w-full max-w-[320px]"
  />
</div>

            </div>
          </div>

          {/* Right: Large Image */}
          <div className="flex-1 flex items-center justify-center">
            <DecorativeImage
              src="/assets/about/person.jpg"
              alt="Contact Decorative"
              width={500}
              height={320}
              className="object-cover rounded-lg w-full h-full max-h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
