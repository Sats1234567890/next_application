import Button from "@/components/global/button";
import Image from "next/image";
import React from "react";
export const ProductFeatureSection = ({ image, description, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md inline-block w-fit mb-2">
            Organic Herbs & Medicinal Plants
          </p>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-3">
              {description}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-row items-center justify-between gap-4">
          <p className="text-md font-bold text-gray-900">{price}</p>
          <Button text="Shop now" href="/shop" className="w-auto text-center px-4 py-2" />
        </div>
      </div>
    </div>
  );
};


export const CustomDots = ({ dots, onNext, onPrev }) => (
  <div className="relative flex items-center justify-center mt-8">
    {/* Previous Arrow */}
    <button
      onClick={onPrev}
      className="absolute left-130 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3  transition-all duration-300 z-10"
      aria-label="Previous slide"
    >
      <Image
        src="/assets/slider/arrowup.svg"
        alt="Previous"
        width={32}
        height={32}
        className="hover:opacity-80 transition-opacity"
      />
    </button>

    {/* Dots (limit to 3) */}
    <ul className="flex items-center space-x-2">
      {dots.slice(0, 3).map((dot, index) => (
        <React.Fragment key={index}>{dot}</React.Fragment>
      ))}
    </ul>

    {/* Next Arrow */}
    <button
      onClick={onNext}
      className="absolute right-130 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3  transition-all duration-300 z-10"
      aria-label="Next slide"
    >
      <Image
        src="/assets/slider/arrowdown.svg"
        alt="Next"
        width={32}
        height={32}
        className="hover:opacity-80 transition-opacity"
      />
    </button>
  </div>
);




