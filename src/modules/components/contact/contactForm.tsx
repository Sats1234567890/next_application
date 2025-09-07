"use client";
import Button from "@/components/global/button";
import { FormLabel } from "@/components/global/label";
import InputField from "@/components/searchBar";
import React, { useState } from "react";
import Image from "next/image";
import DecorativeImage from "@/components/global/decorativeImage";
import { SelectField } from "@/components/global/select";

const countries = [
  { value: "np", label: "Nepal", dial: "+977", flag: "🇳🇵" },
  { value: "in", label: "India", dial: "+91", flag: "🇮🇳" },
  { value: "us", label: "USA", dial: "+1", flag: "🇺🇸" },
  { value: "cn", label: "China", dial: "+86", flag: "🇨🇳" },
  { value: "uk", label: "UK", dial: "+44", flag: "🇬🇧" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
    captcha: false,
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClear = (field: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.value === e.target.value);
    if (country) setSelectedCountry(country);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
        <form onSubmit={handleSubmit} className="flex-1">
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

            {/* Phone Section with Country Selector */}
            <div>
              <FormLabel required>Phone</FormLabel>
              <div className="flex gap-2 items-center">
                <div className="w-28">
                  <SelectField
                    value={selectedCountry.value}
                    onChange={handleCountryChange}
                    options={countries.map((c) => ({ value: c.value, label: `${c.flag} ${c.label}` }))}
                    placeholder="Country"
                  />
                </div>
                <InputField
                  value={form.phone}
                  onChange={handleChange}
                  onClear={() => handleClear("phone")}
                  placeholder={selectedCountry.dial}
                  name="phone"
                  type="tel"
                  showClear={!!form.phone}
                  icon={<span>{selectedCountry.flag}</span>}
                  className="flex-1"
                />
              </div>
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full bg-gray-100 p-3 rounded border">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="captcha"
                  name="captcha"
                  checked={form.captcha}
                  onChange={handleChange}
                  className="w-5 h-5 accent-green-600 border-gray-300 rounded"
                  required
                />
                <label htmlFor="captcha" className="text-gray-700 select-none">
                  I'm Not a Robot
                </label>
              </div>
              <div className="mt-2 sm:mt-0 flex-shrink-0">
                <Image
                  src="/assets/slider/image.png"
                  alt="captcha"
                  width={60}
                  height={30}
                  className="ml-0 sm:ml-2"
                />
              </div>
            </div>
          </div>

          <Button text="Send Message" href="#" className="w-full sm:w-1/3 mt-4" />
        </form>

        {/* Right: Decorative Image */}
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
          <DecorativeImage
            src="/assets/slider/contact1.png"
            alt="Contact Decorative"
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}
