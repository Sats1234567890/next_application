"use client";

import React from "react";
import Image from "next/image";

const HeroImage = ({ imageSrc, title, className = "", children }) => {
  return (
    <div
      className={`relative w-full rounded-xl mb-8 mt-9 py-3
                 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] ${className}`}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-xl"
        priority
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col 
                      items-center sm:items-start justify-center 
                      text-center sm:text-left px-4 sm:px-8 pt-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-xl leading-snug">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default HeroImage;
