"use client";

import React from "react";
import { data } from "@/features";
import { Description } from "@/modules/components/article-description/description";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface ProductPageProps {
  params: { id: string };
}

export default function ArticlePage({ params }: ProductPageProps) {
  const router = useRouter();
  const productId = parseInt(params.id, 10);
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600">
        Product not found 🚫
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-[#EDF7EE] min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-4 text-green-700 font-semibold hover:text-green-900"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Product Description */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <Description product={product} />
      </div>
    </div>
  );
}
