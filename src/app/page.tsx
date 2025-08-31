"use client";
import Navbar from '@/components/header';
import HeroSection from '@/components/herosection';
import Needs from '@/modules/components/needs';
import Products from '@/modules/components/products/components/allproduct';
import { ProductShowCase } from '@/modules/components/products/components/showcase';
import {BestComponent} from '@/modules/components/best-sellers/best-seller';
import { BlogSection } from '@/modules/components/articles/blog';
const sliderImages = [
  {
    src: "/assets/slider/frame1.jpg",
    alt: "Beautiful Landscape 1",
    title: "Explore the Wilderness",
    description: "Discover breathtaking landscapes and untamed nature.",
    buttonText: "Learn More",
    buttonLink: "/wilderness",
  },
  {
    src: "/assets/slider/frame2.jpg",
    alt: "Cityscape at Night",
    title: "Urban Adventures Await",
    description: "Experience the vibrant energy of the city after dark.",
    buttonText: "Discover Cities",
    buttonLink: "/cities",
  },
  {
    src: "/assets/slider/frame1.jpg",
    alt: "Peaceful Beach",
    title: "Relax by the Sea",
    description: "Unwind on pristine beaches and enjoy the tranquility.",
    buttonText: "Find Your Beach",
    buttonLink: "/beaches",
  },
];

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection
        sliderImages={sliderImages}
        
      />
      <Needs/>
      <Products/>
      <ProductShowCase/>
      <BestComponent/>
      <BlogSection/>
      
    </div>
  );
}