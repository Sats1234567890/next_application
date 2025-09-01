import Head from "next/head";
import Image from "next/image";
import { ProductGallery } from "@/modules/components/product-details/productGallery";
import ProductDetailCard from "@/modules/components/product-details/product-info";
import ProductTabs from "@/modules/components/product-details/product-tabs";
import ProductForm from "@/modules/components/product-details/productForm";
import SimilarProducts from "@/modules/components/product-details/similar-product";
import { products } from "@/productData";
import { RelatedProducts } from "@/modules/components/product-details/related-product";
import { NewsLetter } from "@/modules/components/contact/contact";
import { Footer } from "@/modules/components/footer/footer";
import Navbar from '@/components/header';


export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailsPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found</div>;
  }

  const similarProductsData = products?.similarProducts || [];

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-8">
      <Head>
        <title>{product.title} - Product Details</title>
        <meta name="description" content={`Details about ${product.title}`} />
      </Head>
      <Navbar/>

      {/* HERO IMAGE SECTION */}
      <div className="relative w-full h-[400px] rounded-xl mb-8 mt-9 ">
  <Image
    src={product.images[0]}
    alt={product.title}
    fill
    className="object-cover rounded-xl"
    style={{ width: "100%", height: "100%" }} // ensures full coverage
  />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{product.title}</h1>
        </div>
      </div>

      
      <div className="max-w-7xl mx-none bg-gray-200  rounded-lg overflow-hidden mb-8">
        <div className="flex flex-col lg:flex-row gap-8 p-4">
          {/* Product Gallery */}
          <div className="w-full lg:w-1/3">
            <ProductGallery product={{ ...product, images: product.images.slice(1) }} />
          </div>

          {/* Product Detail */}
          <div className="w-full lg:w-1/3">
            <ProductDetailCard product={product} />
          </div>

          {/* Similar Products */}
          <div className="w-full lg:w-1/3">
  <SimilarProducts products={product.similarProducts || []} />
</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 bg-gray-200">
  {/* Tabs */}
    <ProductTabs product={product} />

  {/* Form */}
    <ProductForm />
    
</div>
<RelatedProducts relatedProducts={product.similarProducts || []} />
<NewsLetter />
<Footer/>

    </div>
  );
}
