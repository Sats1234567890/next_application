"use client";

import React from "react";
import { ProductFeatureSection } from "../products/components/product-feature";

export const RelatedProducts = ({ relatedProducts = [] }) => {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="my-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Related Products</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Check out these products that complement your current selection. Handpicked for you!
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductFeatureSection
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};
