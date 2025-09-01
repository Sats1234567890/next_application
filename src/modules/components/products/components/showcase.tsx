"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ProductFeatureSection, CustomDots } from "./product-feature";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "@/productData";

export const ProductShowCase = () => {
  const sliderRef = React.useRef<Slider>(null);
 


const goNext = () => sliderRef.current?.slickNext();
const goPrev = () => sliderRef.current?.slickPrev();

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendDots: dots => (
    <CustomDots
      dots={dots}
      onNext={goNext}
      onPrev={goPrev}
    />
  ),
  customPaging: i => (
    <Image src="/assets/slider/dot.svg" alt={`dot-${i}`} width={16} height={16} />
  ),
};





  return (
    <>
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Product Features</h2>
          <p className="text-gray-700 font-inter text-[29px] font-semibold leading-normal">
            Discover Essential Herbs Product for{" "}
            <span className="text-green-500">Sustainability and Well-Being</span>
          </p>
        </div>
      </div>
      <div className="slider-container relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductFeatureSection
                image={product.image}
                description={product.description}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slider-container .slick-list {
          margin: 0 -8px;
        }
        .slider-container .slick-track {
          display: flex;
          align-items: stretch;
        }
        .slider-container .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
};