"use client";

import InputField from "@/components/searchBar";
import { data } from "@/features";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { ProductCard } from "./popular";
import { CustomSlider } from "@/components/Slider";
import { PopularArticles } from "./popular-articles";

const categories = [
  "All",
  "Grain, Flours & Grits",
  "Spices, Seeds & Flavorings",
  "Medical Herbs",
  "Pulse, Lentils & Legumes",
  "Traditional Fermented",
];

export const Article = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const clearSearch = () => setSearch("");

  // Filter products based on search input
  const filteredProducts = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Top Filter/Search Section */}
      <section className="bg-green-700 text-white py-3 px-3 sm:px-6 lg:px-6">
        <div className="container flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Filter By */}
          <div className="flex items-center space-x-2 shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707L14 13.414V17l-4 4v-6.586L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <h1 className="text-lg font-semibold">Filter by</h1>
          </div>

          {/* Categories */}
          <div className="flex-1">
            <ul className="flex flex-nowrap text-sm pb-1">
              {categories.map((cat, idx) => (
                <li key={idx} className="shrink-0 text-center">
                  <button
                    className={`whitespace-nowrap p-1 rounded-md font-semibold text-sm transition-colors ${
                      idx === 0
                        ? "bg-white text-green-700"
                        : "hover:text-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block relative">
            <InputField
              value={search}
              onChange={handleSearchChange}
              onClear={clearSearch}
              placeholder="Search Product..."
              type="search"
              icon={<FaSearch className="text-gray-400" />}
              showClear={false}
              className="bg-[#419544] text-white w-50 pr-10"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                <RxCross1 />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden relative mt-4">
          <InputField
            value={search}
            onChange={handleSearchChange}
            onClear={clearSearch}
            placeholder="Search..."
            type="search"
            icon={<FaSearch className="text-gray-400" />}
            showClear={false}
            className="bg-green-600 text-white w-full pr-10"
          />
          {search && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
            >
              <RxCross1 />
            </button>
          )}
        </div>
      </section>

      {/* Products Section */}
   {/* Products & Articles Section */}
<section className="p-4 flex gap-6 bg-[#EDF7EE]">
  {/* Left: Product Slider */}
  <div className="w-[75%]">
    <h2 className="text-lg font-semibold mb-4">Popular Products</h2>
    <CustomSlider slidesToShow={3} autoplaySpeed={1000}>
      {filteredProducts.map((product) => (
        <div key={product.id} className="px-3"> {/* spacing between slides */}
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            date={product.date}
          />
        </div>
      ))}
    </CustomSlider>
  </div>

  {/* Right: Popular Articles */}
  {/* Right: Popular Articles */}
<div className="w-[25%]">
  <PopularArticles
    articles={[
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
      // Add more dynamically if needed
    ]}
  />
</div>

</section>



    </>
  );
};
