import HeroImage from "@/components/global/hero";
import Navbar from "@/components/header";
import { Article } from "@/modules/components/article/article";
import { ProductArticles } from "@/modules/components/article/product-articles";
import { NewsLetter } from "@/modules/components/contact/contact";
import { Footer } from "@/modules/components/footer/footer";

export default function Articles() {
    return (
        <>
        <Navbar/>
        <HeroImage imageSrc="/assets/slider/field.jpg" title="Pure Organnic Stories Rooted In Nepal" height="400px" >
                 <p className="mb-4 text-lg block text-white font-bold max-w-2xl">
          “These are pure, natural, organic herbs from Nepal, cared for with authenticity and ready for a healthy lifestyle.”
        </p>
            </HeroImage>
            <Article/>
            <ProductArticles/>
             <NewsLetter/>
                                    <Footer/>
        </>
    )
}