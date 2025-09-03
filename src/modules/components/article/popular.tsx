"use client";

import Link from "next/link";
import Image from "next/image";

export const ProductCard = ({ id, title, description, image, date }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden h-full max-w-xs mx-auto">
    
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 300px"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Date */}
        {date && (
          <p className="text-sm text-gray-500 mb-2">{date}</p>
        )}

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        

        {/* Read More link */}
       <div className="mt-auto relative">
  <p className="text-sm text-gray-600 mb-2 line-clamp-2 pr-20">
    {description}
  </p>
  <Link href={`/products/${id}`}>
    <span className="absolute top-5 right-0 text-green-600 text-xm font-medium hover:underline">
      read More
    </span>
  </Link>
</div>

      </div>
    </div>
  );
};
