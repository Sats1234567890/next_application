import Navbar from '@/components/header';
import HeroSection from '@/components/herosection';
const heroImages = [
  { src: '/assets/slider/frame1.jpg', alt: 'Beautiful Landscape 1' },
  { src: '/assets/slider/frame2.jpg', alt: 'Cityscape at Night' },
  { src: '/assets/slider/frame1.jpg', alt: 'Mountain View' }, // Assuming you have a frame3.jpg now
];

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection
        sliderImages={heroImages}
        title="Sourced from the pure Himalayas for your health."
        description="Nepal’s biodiversity is a treasure trove of medicinal and aromatic plants(MAPs), many of which are certified organic."
        buttonText="Explore More"
        buttonLink="/about"
      />
      
    </div>
  );
}