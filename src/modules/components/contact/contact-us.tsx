"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const ContactSection = () => {
  const contact = [
    { icon: <FaEnvelope />, title: "Email", text: "info@organic.com" },
    { icon: <FaPhoneAlt />, title: "Phone", text: "+977-9800000000" },
    { icon: <FaMapMarkerAlt />, title: "Address", text: "Kathmandu, Nepal" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {contact.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
        >
          {/* Top row: icon + title */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-green-600 text-3xl">{item.icon}</span>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>

          {/* Text below */}
          <p className="text-gray-600 text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
