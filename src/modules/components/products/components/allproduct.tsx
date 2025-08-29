import { ProductsSection } from "./products";

export default function Products() {
  const products = [
    { image: "/assets/products/product1.jpg", imageTitle: "Grains, Flours & Oils" },
    { image: "/assets/products/product2.jpg", imageTitle: "Spices, Seeds & Flavorings" },
    { image: "/assets/products/product3.jpg", imageTitle: "Medicinal Herbs & Superfoods" },
    { image: "/assets/products/product4.jpg", imageTitle: "Pulses, Lentils & Legumes" },
    { image: "/assets/products/product5.jpg", imageTitle: "Traditional Fermented" },
  ];

  return (
    <ProductsSection
      title="Our Products"
      description="Products that Promote"
      products={products}
    />
  );
}
