"use client";

import Button from "@/components/global/button";
import { SelectField } from "@/components/global/select";
import InputField from "@/components/searchBar";
import React, { useState } from "react";



const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", country: "", message: "" });
  };

  const countryOptions = [
    { value: "NP", label: "Nepal" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    // Add more countries as needed
  ];

  return (
    <div className="w-full lg:w-1/3 p-4 bg-gray-200 rounded-lg  border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="text"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          name="name"
        />
        <InputField
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          name="email"
        />
        <SelectField
          value={formData.country}
          onChange={handleChange}
          options={countryOptions}
          placeholder="Select a country*"
          name="country"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
        <div className="text-gray-500 text-xs">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </div>
        <Button text="Send" type="submit" className=" w-1/3 py-2 px-4" />
      </form>
    </div>
  );
};

export default ProductForm;
