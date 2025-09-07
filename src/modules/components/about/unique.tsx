import React from "react";
import { FaLeaf, FaGlobe, FaHandshake, FaShieldAlt } from "react-icons/fa";
import DecorativeImage from "@/components/global/decorativeImage";

export const WhatMakeUnique = () => {
  const data = [
    {
      title: "Himalayan Origin",
      icon: <span role="img" aria-label="mountain">🌄</span>,
      description: "Sourced from the pristine Himalayas of Nepal, known for rare herbs and pure nature.",
    },
    {
      title: "Rare Organic Treasures",
      icon: <FaLeaf className="inline text-green-600" />,
      description: (
        <>
          Unique products like <b>Yarsagumba, Chiraito, Timur, and Himalayan teas</b> found only in Nepal
        </>
      ),
    },
    {
      title: "Farmer Partnership",
      icon: <span role="img" aria-label="handshake">🤝</span>,
      description: "Direct collaboration with local farmers ensures fair trade and ethical sourcing.",
    },
    {
      title: "Global Reach",
      icon: <FaGlobe className="inline text-blue-500" />,
      description: "Exporting Nepal’s finest organic products to health-conscious communities worldwide.",
    },
    {
      title: "Purity & Sustainability",
      icon: <FaShieldAlt className="inline text-green-500" />,
      description: "100% natural, chemical-free, with eco-friendly farming practices.",
    },
  ];

  return (
    <section>
      <div className="bg-[#B2DDB4] py-8 px-4 md:px-6 max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center gap-6 h-auto md:h-[491px]">
        {/* Left: Unique Points */}
        <div className="flex-1 w-full md:pl-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 whitespace-normal md:whitespace-nowrap text-center md:text-left">
            What Makes Us Unique (Chino Organica)
          </h1>
          <ul className="space-y-4 list-inside">
            {data.map((item, idx) => (
              <li key={idx}>
                <div className="flex items-center mb-1 gap-2">
                  <span className="font-bold text-base sm:text-lg text-gray-800">{item.title}</span>
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                </div>
                <ul className="list-disc pl-6">
                  <li className="text-gray-900 text-sm sm:text-base">{item.description}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Decorative Image */}
        <div className="flex-1 flex items-center justify-center h-auto md:h-full p-2 md:p-4">
          <DecorativeImage
            src="/assets/about/cup.png"
            alt="Contact Decorative"
            width={300}
            height={300}
            className="object-contain w-[250px] sm:w-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
