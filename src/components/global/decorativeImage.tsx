"use client";

import React from "react";
import Image from "next/image";

const DecorativeImage = ({ src, alt, width = 400, height = 400, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default DecorativeImage;
