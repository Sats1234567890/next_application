"use client";
import Button from "@/components/global/button";
import { FormLabel } from "@/components/global/label";
import InputField from "@/components/searchBar";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
    captcha: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClear = (field) => {
    setForm((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
        Drop Us A Message
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Form Fields */}
        <form
          onSubmit={handleSubmit}
          className="flex-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormLabel required>Name</FormLabel>
              <InputField
                value={form.name}
                onChange={handleChange}
                onClear={() => handleClear("name")}
                placeholder="Enter Your Name..."
                name="name"
                showClear={!!form.name}
              />
            </div>
            <div>
              <FormLabel required>Phone</FormLabel>
              <InputField
                value={form.phone}
                onChange={handleChange}
                onClear={() => handleClear("phone")}
                placeholder="977-"
                name="phone"
                type="tel"
                showClear={!!form.phone}
                icon={<span role="img" aria-label="Nepal">🇳🇵</span>}
              />
            </div>
            <div>
              <FormLabel required>Address</FormLabel>
              <InputField
                value={form.address}
                onChange={handleChange}
                onClear={() => handleClear("address")}
                placeholder="Enter Your Address..."
                name="address"
                showClear={!!form.address}
              />
            </div>
            <div>
              <FormLabel required>Message</FormLabel>
              <InputField
                value={form.message}
                onChange={handleChange}
                onClear={() => handleClear("message")}
                placeholder="Write your message here..."
                name="message"
                type="text"
                showClear={!!form.message}
                className="h-20"
              />
            </div>
          </div>
          {/* Captcha */}
          <div className="mt-4">
            <div className="flex  w-1/2 items-center gap-2 bg-gray-100 p-3 rounded border">
              <input
                type="checkbox"
                id="captcha"
                name="captcha"
                checked={form.captcha}
                onChange={handleChange}
                className="w-5 h-5 accent-green-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="captcha" className="text-gray-700 select-none flex-1">
                I'm Not a Robot
              </label>
              <Image
                src="/assets/slider/image.png"
                alt="captcha"
                width={60}
                height={30}
                className="ml-2"
              />
            </div>
          </div>
          <Button
            text="Send Message"
            href="#"
            className="w-1/3 mt-4"
          />
        </form>
        {/* Right: Decorative Image(s) */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/assets/slider/contact1.png"
            alt="Contact Decorative"
            width={480}
            height={480}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}