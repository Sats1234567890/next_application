"use client";
import Image from "next/image";
import Slider from "react-slick";

export const Marquee = () => {
  const countries = [
    "/assets/about/nepal.png",
    "/assets/about/ind.png",
    "/assets/about/us.png",
    "/assets/about/chin.png",
    "/assets/about/roman.png",
  ];

  // Slider items (headings + logos inline)
  const items = [
    { type: "heading", label: "Imported IN" },
    ...countries.map((src) => ({ type: "image", src })),
    { type: "heading", label: "Member of" },
    ...countries.map((src) => ({ type: "image", src })),
    { type: "heading", label: "Verified by" },
    ...countries.map((src) => ({ type: "image", src })),
    { type: "heading", label: "Appreciated by" },
    ...countries.map((src) => ({ type: "image", src })),
  ];

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0, // continuous
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    rtl: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full py-8 bg-white flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-center items-center min-h-[100px] px-4"
            >
              {item.type === "heading" ? (
                <span className="absolute top-10 left-1/2 -translate-x-1/2 text-xl font-bold text-gray-800 whitespace-nowrap z-10">
                  {item.label}:
                </span>
              ) : (
                <Image
                  src={item.src}
                  alt="logo"
                  width={140}
                  height={90}
                  className="object-contain rounded shadow"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};