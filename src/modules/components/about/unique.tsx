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
     {/* Changed height to h-[491px], adjusted py-8 for more vertical space efficiency */}
     <div className="bg-[#B2DDB4] py-8 px-2 md:px-6 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-6 h-[491px]">
        {/* Left: Unique Points */}
        {/* Adjusted padding and space-y for better fit */}
        <div className="flex-1 pl-4 md:pl-10 h-full flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 whitespace-nowrap">
            What Makes Us Unique (Chino Organica)
          </h1>
          <ul className="space-y-4 list-inside"> {/* Reduced space-y */}
            {data.map((item, idx) => (
              <li key={idx}>
                <div className="flex items-center mb-0.5"> {/* Reduced mb */}
                  <span className="font-bold text-lg text-gray-800">{item.title}</span> {/* Slightly reduced font size */}
                  <span className="text-xl mr-1 p-0.5">{item.icon}</span> {/* Slightly reduced icon size and padding */}
                </div>
                <ul className="list-disc pl-7"> {/* Adjusted pl */}
                  <li className="text-gray-900 text-sm">{item.description}</li> {/* Slightly reduced font size */}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Decorative Image */}
        <div className="flex-1 flex items-center justify-center h-full p-4"> {/* Added p-4 for some breathing room */}
          <DecorativeImage
            src="/assets/about/cup.png"
            alt="Contact Decorative"
            width={400} 
            height={400} 
            className="object-contain" 
          />
        </div>
      </div>
    </section>
  );
};