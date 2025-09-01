import Button from '@/components/global/button';
import React from 'react';

const ProductDetailCard = ({ product }) => {
  // Product fields to display
  const fields = [
    { label: 'Name', value: product.title },
    { label: 'Color', value: product.color },
    { label: 'Shelf life', value: product.lifespan },
    { label: 'Found', value: product.origin },
  ];

  return (
    <div className="rounded-lg  p-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Product Details</h2>

      <ul className="space-y-2 ">
        {fields.map((field) => (
          <li key={field.label} className="flex bg-gray-300 p-2">
            <span className="font-medium w-24">{field.label} :</span>
            <span className="flex-1">{field.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-xl font-bold text-gray-900">
        {product.price}
      </div>

      <Button
        text="Contact On Whatsapp"
        href="/contact"
        className="w-full sm:w-auto text-center px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
      />
    </div>
  );
};

export default ProductDetailCard;
