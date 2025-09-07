"use client";

import Button from "@/components/global/button";

export default function WhyNeed() {
  return (
    <section className="w-full px-5 py-10 md:py-16 flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-xl md:max-w-lg lg:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Why <span className="text-green-600">Choose Us</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600">
          The Benefits of{" "}
          <span className="text-green-600 font-semibold">
            Choosing Chino Organica
          </span>
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          When you choose Chino Organica, you do more than make a purchase.
          You join a movement that nourishes your family, empowers our farmers,
          and promotes a healthier planet for generations to come.
        </p>

        {/* Button */}
        <Button
          text="Shop Now"
          href="/about"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-200 self-start"
        />
      </div>
    </section>
  );
}
