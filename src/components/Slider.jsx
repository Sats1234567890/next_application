// components/HeroBackgroundSlider.js
"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBackgroundSlider({ images }) {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    cssEase: 'linear', 
  };

  return (
    <div className="absolute inset-0 w-full h-full"> {/* Fill the parent */}
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