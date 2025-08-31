"use client";

import { useState } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/global/button";
import InputField from "@/components/searchBar";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => setEmail(e.target.value);
  const handleClear = () => setEmail("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    handleClear();
  };

  const benefits = [
    "Weekly special offers",
    "New product updates",
    "Exclusive member benefits"
  ];

  return (
    <section className="bg-[#EDF7EE] py-12 px-4 md:px-20">
      <div className="bg-[#EDF7EE] max-w-6xl rounded-lg p-8 relative grid md:grid-cols-[3fr_2fr] items-center gap-8">
  
  {/* Left Content */}
  <div className="flex flex-col items-center text-center mx-auto z-10 py-6 max-w-2xl">
    <h2 className="inline-flex items-center justify-center gap-2 bg-gray-200 text-lg font-semibold text-green-800 mb-3  shadow px-3 py-1 rounded">
      <CiStar /> Special Offers
    </h2>
    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
      Join Our Organic <span className="text-green-700">Community</span>
    </h3>
    <p className="text-gray-600 mr-10 ml-10 mb-6 ">
      Get 10% off on your first order and stay updated with our latest products, farmer stories, and exclusive deals.
    </p>

    {/* Newsletter Form */}
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-md p-4 mb-6 w-full max-w-md">
      <InputField
        type="email"
        value={email}
        onChange={handleChange}
        onClear={handleClear}
        placeholder="Enter your email"
        icon={<FaEnvelope />}
      />
      <Button
        text="Subscribe now"
        type="submit"
        className="w-full sm:w-auto text-center px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
      />
    </form>

    {/* Benefits */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-700 text-sm">
      {benefits.map((benefit, index) => (
        <p key={index} className="flex items-center gap-2">
          <FaCheckCircle className="text-green-600" /> {benefit}
        </p>
      ))}
    </div>
  </div>

  {/* Right Illustration */}
  <div className="flex justify-center">
    <Image
      src="/assets/why-need/plant.png"
      alt="Newsletter"
      width={448}
      height={400}
      className="object-contain opacity-90"
    />
  </div>
</div>

    </section>
  );
};
