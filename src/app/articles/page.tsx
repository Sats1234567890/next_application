import HeroImage from "@/components/global/hero";
import { Article } from "@/modules/components/article/article";
import { ProductArticles } from "@/modules/components/article/product-articles";

export default function Articles() {
    return (
        <>
        <HeroImage imageSrc="/assets/slider/field.jpg" title="Pure Organnic Stories Rooted In Nepal" height="400px" >
                 <p className="mb-4 text-lg block text-white font-bold max-w-2xl">
          “These are pure, natural, organic herbs from Nepal, cared for with authenticity and ready for a healthy lifestyle.”
        </p>
            </HeroImage>
            <Article/>
            <ProductArticles/>
        </>
    )
}