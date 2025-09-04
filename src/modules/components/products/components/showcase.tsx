"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CustomDots, ProductFeatureSection } from "./product-feature";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "@/productData";

export const ProductShowCase = () => {
  const sliderRef = React.useRef<any>(null);

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => <CustomDots dots={dots} onNext={goNext} onPrev={goPrev} />,
    customPaging: (i) => (
      <Image src="/assets/slider/dot.svg" alt={`dot-${i}`} width={16} height={16} />
    ),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Header */}
     <div className="text-center mb-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-3">
    Our Product Features
  </h2>
  <p className="text-gray-700 font-inter text-[20px] font-semibold leading-normal">
    Discover Essential Herbs Product for{" "}
    <span className="text-green-500">Sustainability and Well-Being</span>
  </p>
</div>


      {/* Slider */}
      <div className="slider-container relative overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductFeatureSection
                image={product.images[0]}
                description={product.description}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider Styling */}
      <style jsx>{`
        .slider-container .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};