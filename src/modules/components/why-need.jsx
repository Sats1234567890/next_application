"use client";

import Button from "@/components/global/button";

export default function WhyNeed() {
  return (
    <section className="w-full py-5 px-8">
      <div className="flex flex-col items-start gap-5 w-[422px]">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Why <span className="text-green-600">Choose Us</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600">
          The Benefits of{" "}
          <span className="text-green-600 font-semibold">
            Choosing Chino Organica
          </span>
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          When you choose Chino Organica, you do more than make a purchase.
          You join a movement that nourishes your family, empowers our farmers,
          and promotes a healthier planet for generations to come.
        </p>

        {/* Button */}
        <Button
          text="Shop Now"
          href="/about"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
        />
      </div>
    </section>
  );
}
