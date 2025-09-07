import React from "react";
import Image from "next/image";

interface BotanicalDescriptionItem {
  scientific_name?: string;
  common_name?: string;
  family?: string;
  origin?: string;
  features?: string;
}

interface Product {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  botanical_description: BotanicalDescriptionItem[];
  introduction: string;
  health_benefits: string[];
  nutritional_value: string[];
  uses_of_mint: {
    culinary: string[];
    medicinal: string[];
    cosmetics_personal_care: string[];
  };
  chinos_organicas_focus: string[];
}

interface Props {
  product: Product;
}

export const Description: React.FC<Props> = ({ product }) => {
  return (
    <div className="relative bg-[#EDF7EE] py-12 md:py-20 rounded-lg w-full max-w-[1280px] mx-auto font-sans text-gray-800 leading-relaxed overflow-hidden">
      
      {/* Background decorative image */}
      <div className="absolute top-[70%] left-[60%] w-[30%] md:w-[25%] opacity-15 z-0 pointer-events-none">
        <div className="relative w-full h-64 md:h-80 transform scale-[2.2] rotate-[50deg] -translate-x-1/3 -translate-y-1/4">
          <Image
            src={"/assets/products/herbs/mint.png"}
            alt="Mint background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 space-y-14 px-4 sm:px-6 md:px-8">

        {/* Top section: image + botanical info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start border-b border-gray-300 pb-10">
          {/* Product Image */}
          <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Botanical Info */}
          <div>
            <h2 className="text-2xl font-bold mb-5 flex items-center">
              Botanical Information <span className="ml-2 text-green-600">🌱</span>
            </h2>
            <dl className="space-y-3 text-sm md:text-base">
              {product.botanical_description.map((item, idx) =>
                Object.entries(item).map(([key, value]) => (
                  <div key={`${idx}-${key}`} className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-semibold capitalize">{key.replace("_", " ")}:</dt>
                    <dd className="text-gray-700">{value}</dd>
                  </div>
                ))
              )}
            </dl>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 border-b-2 border-green-600 pb-3 inline-block">
          {product.title}
        </h1>

        {/* Sections */}
        <div className="space-y-12">

          {/* Introduction */}
          <section className="border-b border-gray-300 pb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              Introduction <span className="ml-2 text-green-600">🌿</span>
            </h3>
            <p className="text-gray-700 text-sm md:text-base">{product.introduction}</p>
          </section>

          {/* Health Benefits */}
          <section className="border-b border-gray-300 pb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              Health Benefits <span className="ml-2 text-green-600">💚</span>
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base pl-4">
              {product.health_benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </section>

          {/* Nutritional Value */}
          <section className="border-b border-gray-300 pb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              Nutritional Value <span className="ml-2 text-green-600">🥗</span>
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base pl-4">
              {product.nutritional_value.map((value, idx) => (
                <li key={idx}>{value}</li>
              ))}
            </ul>
          </section>

          {/* Uses of Mint */}
          {product.uses_of_mint && (
            <section className="border-b border-gray-300 pb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                Uses of Mint <span className="ml-2 text-green-600">🌿</span>
              </h3>
              <div className="space-y-5 text-sm md:text-base">
                {["culinary", "medicinal", "cosmetics_personal_care"].map((key) => (
                  <div key={key}>
                    <p className="font-medium text-gray-800 capitalize">{key.replace("_", " ")}:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-6">
                      {product.uses_of_mint[key as keyof typeof product.uses_of_mint].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Chino Orgánica Focus */}
          <section className="border-b border-gray-300 pb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              Chino Orgánica’s Focus <span className="ml-2 text-green-600">🌱</span>
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base pl-4">
              {product.chinos_organicas_focus.map((focus, idx) => (
                <li key={idx}>{focus}</li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
