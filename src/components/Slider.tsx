"use client";
import Image from "next/image";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from 'react'; // Import useState
import { CustomDots } from "@/modules/components/products/components/product-feature";

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
        {images?.map((image, index) => (
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


const Slider = dynamic(() => import('react-slick'), { ssr: false });






export const ProductSlider = ({ children }) => {
  const [rtlDirection, setRtlDirection] = useState(false); // Start LTR
  const sliderRef = useRef(null);

  const baseSettings = {
    dots: false,
    infinite: true,
    speed: 4000, // Slower speed for smoother transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous movement
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, speed: 3500 } },
      { breakpoint: 768, settings: { slidesToShow: 2, speed: 3000 } },
      { breakpoint: 480, settings: { slidesToShow: 1, speed: 2500 } },
    ]
  };

  // Combine base settings with dynamic rtl
  const currentSettings = {
    ...baseSettings,
    rtl: rtlDirection,
  };

  // This effect will periodically toggle the direction
  useEffect(() => {
   
    const interval = setInterval(() => {
      setRtlDirection(prev => !prev);
      // If you want to force a re-render of Slick for the new RTL setting:
      // This is generally not ideal as it destroys and re-creates the slider.
      // sliderRef.current.slickGoTo(0, true); // Go to start without animation
    }, 10000); // Toggle direction every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...currentSettings}>
        {children}
      </Slider>
    </div>
  );
};



export const BlogSlider = ({ children }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, // <-- important
    appendDots: dots => (
      <CustomDots
        dots={dots}
        onNext={() => sliderRef.current.slickNext()}
        onPrev={() => sliderRef.current.slickPrev()}
      />
    ),
    customPaging: i => (
      <Image
        src="/assets/slider/dot.svg"
        alt={`dot-${i}`}
        width={16}
        height={16}
      />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};
export const TestimonialSlider= ({ children }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // <-- important
    centerPadding: "0px", // <-- space on sides of center card
    appendDots: dots => (
      <CustomDots
        dots={dots}
        onNext={() => sliderRef.current.slickNext()}
        onPrev={() => sliderRef.current.slickPrev()}
      />
    ),
    customPaging: i => (
      <Image
        src="/assets/slider/dot.svg"
        alt={`dot-${i}`}
        width={16}
        height={16}
      />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};


