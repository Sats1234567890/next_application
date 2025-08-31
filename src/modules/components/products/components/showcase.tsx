"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ProductFeatureSection, CustomDots } from "./product-feature";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductShowCase = () => {
  const products = [
    {
      id: 1,
      image: "/assets/products/product1.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Holy Basil",
      price: "NPR 300"
    },
    {
      id: 2,
      image: "/assets/products/product2.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Mandro",
      price: "NPR 300"
    },
    {
      id: 3,
      image: "/assets/products/product2.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Neelamani",
      price: "NPR 300"
    },
    {
      id: 4,
      image: "/assets/products/product3.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Aloevera",
      price: "NPR 300"
    },
    {
      id: 5,
      image: "/assets/products/product4.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Turmeric",
      price: "NPR 300"
    },
    {
      id: 6,
      image: "/assets/products/product5.jpg",
      description: "Organic Herbs & Medicinal Plants",
      title: "Ginger",
      price: "NPR 300"
    }
  ];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  
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