// pages/index.js (or any other page/component)

import { ProductSlider } from "@/components/Slider";
import { BestSellerProduct } from "./products";

export const BestComponent = () => {
  const products = [
    {
      image: '/assets/products/product1.jpg',
      title: 'Chiraita(Swertia Chiroyita)',
      description: 'Himalayan Herbs & Botanicals',
      price: 'NPR.1000/kg',
      status: 'Most Popular',
    },
    {
      image: '/assets/products/product2.jpg',
      title: 'Yarsagumba',
      description: 'Himalayan Herbs & Botanicals',
      price: 'NPR.1000/piece',
      status: 'Top Pick',
    },
    {
      image: '/assets/products/product3.jpg',
      title: 'Jatamansi Oil',
      description: 'Body Care & Cosmetology',
      price: 'NPR.1000/kg',
      status: 'Most Popular',
    },
    {
      image: '/assets/products/product4.jpg',
      title: 'Sesame Oil',
      description: 'Ayurved Khana Lakcy',
      price: 'NPR.1000/kg',
      status: 'Most Popular',
    },
    {
      image: '/assets/products/product5.jpg',
      title: 'Ashwagandha',
      description: 'Adaptogenic Herb',
      price: 'NPR.800/kg',
      status: 'New Arrival',
    },
  ];

  return (
    <div className="mx-auto my-10 py-8 px-5 bg-green-200 text-center">
     <div className="p-3"> <h2 className="text-2xl font-bold mb-2">Our Best Sellers</h2>
      <p className="text-gray-700 font-inter text-[29px] font-semibold leading-normal">Most Loved organic products chosen by <span className="text-green-400"> Customers worldwide</span></p></div>
      
      <ProductSlider >
        {products.map((product, index) => (
          <BestSellerProduct
            key={index}
            image={product.image}
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
