"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react'; // Import useState

export default function HeroBackgroundSlider({ images, onSlideChange }) { // Add onSlideChange prop
  const [currentSlide, setCurrentSlide] = useState(0); // Add state for current slide

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false, 
    cssEase: 'ease-in-out', 
    beforeChange: (oldIndex, newIndex) => { 
      setCurrentSlide(newIndex);
      if (onSlideChange) {
        onSlideChange(newIndex);
      }
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full"> 
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-[444px] relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}