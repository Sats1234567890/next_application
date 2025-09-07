"use client";
import React, { useState } from "react";
import HeroBackgroundSlider from "./Slider";
import Button from "./global/button";

export default function HeroSection({ sliderImages }) {
  const [currentContent, setCurrentContent] = useState(sliderImages[0]);

  const handleSlideChange = (newIndex) => {
    setCurrentContent(sliderImages[newIndex]);
  };

  return (
    <div className="relative w-full h-[444px] sm:h-[400px] xs:h-[300px] flex items-center justify-start px-4 sm:px-8 lg:px-16">
      <HeroBackgroundSlider
        images={sliderImages}
        onSlideChange={handleSlideChange}
      />

      {/* Content Overlay */}
      <div className="absolute z-20 text-white max-w-2xl top-[20%] left-1/2 transform -translate-x-1/2 sm:left-10 sm:translate-x-0 px-2 sm:px-4">
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            {currentContent.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            {currentContent.description}
          </p>
          {currentContent.buttonText && currentContent.buttonLink && (
            <Button text={currentContent.buttonText} href={currentContent.buttonLink} />
          )}
        </div>
      </div>
    </div>
  );
}
