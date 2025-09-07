"use client";

import { useState } from "react";
import { data } from "@/features";
import { ProductCard } from "./popular";
import { PopularArticles } from "./popular-articles";
import Image from "next/image";
import { Pagination } from "@/components/global/pagination";

export const ProductArticles = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
    <section className="p-4 flex flex-col lg:flex-row gap-6 bg-[#EDF7EE]">
      {/* Left: Products */}
      <div className="lg:w-3/4 w-full">
        <h2 className="text-lg font-semibold mb-4">Popular Products</h2>

        {/* Product Cards */}
        <div className="flex flex-wrap gap-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-[calc(33.333%-1rem)]"
            >
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

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      {/* Right: Sidebar */}
      <div className="lg:w-1/4 w-full mt-6 lg:mt-0">
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
