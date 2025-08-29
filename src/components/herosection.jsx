import React, { useState, useEffect } from 'react'; 
import Button from './global/button';
import HeroBackgroundSlider from './Slider';
export default function HeroSection({ sliderImages }) { 
  const [currentContent, setCurrentContent] = useState(sliderImages[0]); 

  const handleSlideChange = (newIndex) => {
    setCurrentContent(sliderImages[newIndex]);
  };

  return (
    <div className="relative w-full h-[444px] flex items-center justify-start px-16">
      <HeroBackgroundSlider images={sliderImages} onSlideChange={handleSlideChange} />

      <div className="relative top-20 left-10 z-20 text-white max-w-2xl">
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-lg mb-6">{currentContent.description}</p>
          {currentContent.buttonText && currentContent.buttonLink && (
            <Button text={currentContent.buttonText} href={currentContent.buttonLink} />
          )}
        </div>
      </div>
    </div>
  );
}