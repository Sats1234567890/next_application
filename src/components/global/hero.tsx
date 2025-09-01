"use client";

import React from "react";
import Image from "next/image";

const HeroImage = ({ imageSrc, title, height = "400px" }) => {
  return (
    <div className={`relative w-full rounded-xl mb-8 mt-9`} style={{ height }}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-xl"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center">{title}</h1>
      </div>
    </div>
  );
};

export default HeroImage;
