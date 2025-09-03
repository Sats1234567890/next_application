"use client";

import { useState } from "react";
import { data } from "@/features";
import { ProductCard } from "./popular";
import { CustomSlider } from "@/components/Slider";
import { PopularArticles } from "./popular-articles";
import Image from "next/image";

export const ProductArticles = () => {
  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Example popular articles data
  const articles = [
    {
      id: 1,
      image: "/assets/products/product1.jpg",
      description:
        "This is a sample description for article 1. It may be longer than two lines to test clamping.",
    },
    {
      id: 2,
      image: "/assets/products/product2.jpg",
      description:
        "Another article description that will be clamped to two lines for consistent layout.",
    },
    {
      id: 3,
      image: "/assets/products/product3.jpg",
      description:
        "Another article description that will be clamped to two lines for consistent layout.",
    },
  ];

  return (
    <section className="p-4 flex gap-6 bg-[#EDF7EE]">
     <div className="w-[75%]">
  <h2 className="text-lg font-semibold mb-4">Popular Products</h2>
  
  <div className="flex flex-wrap gap-4">
    {filteredProducts.map((product) => (
      <div key={product.id} className="w-[calc(33.333%-1rem)]"> {/* 3 items per row with gap */}
        <ProductCard
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          date={product.date}
        />
      </div>
    ))}
  </div>
</div>


      <div className="w-[25%]">
  <div className="mb-4 relative w-full h-32">
    <Image
      src="/assets/slider/chino.png" 
      alt="Top"
      fill
      className="object-cover rounded-md"
      priority 
    />
  </div>

  <PopularArticles articles={articles} />
</div>
    </section>
  );
};
