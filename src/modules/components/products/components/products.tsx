// ProductsSection.tsx
"use client";

import Image from "next/image";

interface Product {
  image: string;
  imageTitle: string;
}

interface ProductsSectionProps {
  title: string;
  description: string;
  products: Product[];
}

export const   ProductsSection=({
  title,
  description,
  products,
}: ProductsSectionProps)=> {

  return (
    <section className="bg-green-200 py-8 px-6 rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className=" text-gray-700 font-inter text-[29px] font-semibold leading-normal">{description} <span className="text-green-500">Wellness and Sustainibility</span></p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {products?.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-48 h-32">
              <Image
                src={product.image}
                alt={product.imageTitle}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">
              {product.imageTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

