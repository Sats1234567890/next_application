"use client";
import Image from "next/image";
import React from "react";

const SimilarProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full lg:w-1/3 p-2">
      <h3 className="text-xl font-semibold text-green-800 mb-4">Top Similar Products</h3>
      <ul className="flex flex-col">
        {products.map((product, idx) => (
          <li
            key={product.id}
            className={`flex items-center gap-3 px-4 py-3 ${idx !== 0 ? "border-t border-gray-400" : ""}`}
          >
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="56px"
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            <span className="text-gray-800 font-medium">{product.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarProducts;