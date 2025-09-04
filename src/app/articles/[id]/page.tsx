import React from "react";
import { data } from "@/features";
import { Description } from "@/modules/components/article-description/description";

interface ProductPageProps {
  params: { id: string };
}

export default function ArticlePage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600">
        Product not found 🚫
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#EDF7EE] ">
      <Description product={product} />
    </div>
  );
}
