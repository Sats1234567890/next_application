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

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1280, // xl+
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // sm
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // xs
        settings: { slidesToShow: 1 },
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
              className="relative flex flex-col justify-center items-center min-h-[120px] px-2 sm:px-4"
            >
              {item.type === "heading" ? (
                <span className="text-center text-sm sm:text-lg md:text-xl font-bold text-gray-800 whitespace-nowrap mb-4 sm:mb-6">
                  {item.label}:
                </span>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src={item.src}
                    alt="logo"
                    width={120}
                    height={70}
                    className="object-contain rounded shadow-sm sm:shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
