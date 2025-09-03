import HeroImage from "@/components/global/hero";
import Navbar from "@/components/header";
import { NewsLetter } from "@/modules/components/contact/contact";
import { Footer } from "@/modules/components/footer/footer";
import { AllHerbs } from "@/modules/components/product-category/herbs/all-herbs";

export default function ProductCategory (){
    return (
        <>
        <Navbar/>
            <HeroImage imageSrc="/assets/slider/category.jpg" title="Organic Herbs and Medical Plants" height="400px" >
                 <p className="mb-4 text-lg block text-white font-bold max-w-2xl">
          “Explore our organic herbs and medicinal plants, sustainably grown for purity and natural wellness.”
        </p>
            </HeroImage>
            <AllHerbs/>
            <NewsLetter/>
                                   <Footer/>
            </>

    )
}