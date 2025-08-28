import React from 'react';
import HeroBackgroundSlider from './Slider';
import Button from './global/button';
export default function HeroSection({ sliderImages, title, description, buttonText, buttonLink }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-start px-16">
      {/* Background slider */}
      <HeroBackgroundSlider images={sliderImages} />

      <div className="relative z-20 text-white max-w-2xl">
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{description}</p>
          {buttonText && buttonLink && (
            <Button text={buttonText} href={buttonLink} />
          )}
        </div>
      </div>
    </div>
  );
}
