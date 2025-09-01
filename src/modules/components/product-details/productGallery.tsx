"use client";
import Image from "next/image";
import { useState } from "react";

export const ProductGallery = ({ product }) => {
  const galleryImages = product.images.slice(1); // skip hero
  const [mainImage, setMainImage] = useState(galleryImages[0] || "");

  if (!product) return <div>Product not found</div>;

  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Large image */}
      <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt={`${product.title} large`}
          fill
          className="object-cover"
        />
      </div>

      {/* Small images / Thumbnails */}
      <div className="flex gap-2 mt-2">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
              mainImage === img ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => setMainImage(img)}
          >
            <Image
              src={img}
              alt={`${product.title} thumb ${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
