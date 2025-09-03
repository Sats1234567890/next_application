"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { navLinks } from "@/navdata";
import { SearchFilter } from "./searchFilter";
import Button from "@/components/global/button";

export const AllHerbs = () => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Find the "Organic Herbs & Medicinal Plants" category
  const herbsCategory = useMemo(() => {
    const productCategory = navLinks.find(
      (link) => link.name === "Product Category"
    );
    const herbsSection = productCategory?.sections.find(
      (section) => section.title === "Organic Herbs & Medicinal Plants"
    );
    return herbsSection?.products || [];
  }, []);

  // Filter products based on search
  const filteredHerbs = useMemo(() => {
    return herbsCategory.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [herbsCategory, search]);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (

    <div className="max-w-6xl mx-auto p-6 bg-[#EDF7EE]">
     
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Medical Herbs and Superfood List</h1>
        <SearchFilter
          placeholder="Search herbs..."
          searchValue={search}
          onSearchChange={setSearch}
          showFilter={true}
        />
      </div>

      {/* Herbs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredHerbs.slice(0, visibleCount).map((herb) => (
          <div
            key={herb.href}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Herb Image */}
            <div className="relative w-full h-48">
              <Image
                src={herb.image}
                alt={herb.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Herb Details */}
            <div className="p-4 flex flex-col gap-2 flex-grow">
              <h2 className="text-lg font-semibold">{herb.title}</h2>
              <div className="h-20 overflow-hidden">
                <p className="text-sm text-gray-600 line-clamp-3">{herb.description}</p>
              </div>
              <Button
                text="Whatsapp Now"
                href="https://wa.me/2012033484"
                className="mt-auto  w-[60%] max-w-xs px-4 py-2 text-center"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredHerbs.length && (
        <div className="flex justify-center mt-10">
          <Button
            text="See all"
            onClick={handleLoadMore}
            className="bg-gray-200  hover:bg-green-500 transform hover:scale-105 transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};
