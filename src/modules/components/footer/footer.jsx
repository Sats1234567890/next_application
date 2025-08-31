"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  // Footer Data
  const footerData = {
    about: {
      logo: "logo.svg", // replace with your logo path
      text: "Bringing nature’s goodness to your doorstep & health with our premium organic products.",
    },
    socials: [
      { name: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
      { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
      { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com" },
      { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    ],
    products: ["Organic Honey", "Fresh Vegetables", "Herbal Tea", "Dairy Products"],
    company: ["About Us", "Careers", "Blog", "Privacy Policy"],
    contact: [
      { icon: <FaEnvelope />, text: "info@organic.com" },
      { icon: <FaPhoneAlt />, text: "+977-9800000000" },
      { icon: <FaMapMarkerAlt />, text: "Kathmandu, Nepal" },
    ],
  };

  return (
    <footer className="bg-green-800 py-10">
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10">
          {/* About */}
          <div className="max-w-sm">
            <Image src={footerData.about.logo} alt="Logo" width={220} height={70} />
            <p className="mt-4 text-white">{footerData.about.text}</p>
            <div className="mt-4">
              <p className="font-semibold mb-2 text-white">Follow Us</p>
              <div className="flex gap-4 text-white">
                {footerData.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-semibold border-b border-gray-300 pb-2 mb-3 text-white">Our Products</p>
            <ul className="space-y-2 text-white">
              {footerData.products.map((item, index) => (
                <li key={index} className="hover:text-green-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold border-b border-gray-300 pb-2 mb-3 text-white">Company Info</p>
            <ul className="space-y-2 text-white">
              {footerData.company.map((item, index) => (
                <li key={index} className="hover:text-green-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold border-b border-gray-300 pb-2 mb-3 text-white">Contact Us</p>
            <ul className="space-y-3 text-white">
              {footerData.contact.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-green-300">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
