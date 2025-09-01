// pages/index.js (or any other page/component)

import { ProductSlider } from "@/components/Slider";
import { BestSellerProduct } from "./products";
import { products } from "@/productData";

export const BestComponent = () => {
  

  return (
    <div className="mx-auto my-10 py-8 px-5 bg-green-200 text-center">
     <div className="p-3"> <h2 className="text-2xl font-bold mb-2">Our Best Sellers</h2>
      <p className="text-gray-700 font-inter text-[29px] font-semibold leading-normal">Most Loved organic products chosen by <span className="text-green-400"> Customers worldwide</span></p></div>
      
      <ProductSlider >
        {products.map((product, index) => (
          <BestSellerProduct
          id={product.id}
            key={index}
            image={product.images[0]}
            title={product.title}
            description={product.description}
            price={product.price}
            status={product.status}
          />
        ))}
      </ProductSlider>
    </div>
  );
};
