import { BlogSlider } from "@/components/Slider";
import { Articles } from "./articles";
import { FaCircleInfo } from "react-icons/fa6";

export const blogData = [
  {
    id: 1,
    image: "/assets/products/product1.jpg",
    date: "2025-08-01",
    title: "The Healing Power of Holy Basil",
    description: "Discover how Holy Basil (Tulsi) helps in reducing stress and boosting immunity naturally."
  },
  {
    id: 2,
    image: "/assets/products/product2.jpg",
    date: "2025-08-05",
    title: "Aloevera for Skin and Wellness",
    description: "Learn about the benefits of Aloe Vera for skin care and overall health."
  },
  {
    id: 3,
    image: "/assets/products/product3.jpg",
    date: "2025-08-10",
    title: "Turmeric: The Golden Spice",
    description: "Explore how turmeric can be incorporated into your diet for anti-inflammatory benefits."
  },
  {
    id: 4,
    image: "/assets/products/product4.jpg",
    date: "2025-08-15",
    title: "Ginger: Nature's Immunity Booster",
    description: "A guide to using ginger for improving digestion and boosting immunity."
  },
  {
    id: 5,
    image: "/assets/products/product5.jpg",
    date: "2025-08-20",
    title: "Medicinal Plants in Everyday Life",
    description: "Simple ways to integrate medicinal herbs into your daily routine for wellness."
  }
];

export const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4 max-w-7xl">
        
        <div className="flex items-center justify-center gap-2 mb-4 text-green-700">
          <FaCircleInfo className="w-5 h-5" />
          <span className="font-semibold text-lg">What's New</span>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Latest Blogs
        </h2>

        {/* Blog Slider */}
        <BlogSlider>
          {blogData.map(article => (
            <div key={article.id} className="px-2"> {/* Slide padding */}
              <Articles
                image={article.image}
                date={article.date}
                title={article.title}
                description={article.description}
              />
            </div>
          ))}
        </BlogSlider>
      </div>
    </section>
  );
};
