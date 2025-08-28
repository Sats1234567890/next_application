"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const clearSearch = useCallback(() => {
        setSearch("");
    }, []);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const toggleCategory = useCallback(() => {
        setCategoryOpen(prev => !prev);
    }, []);

    const closeCategory = useCallback(() => {
        setCategoryOpen(false);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-around px-4 py-3 md:px-6">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0 gap-3">
                    <Image
                        src="/logo.svg"
                        alt="Chino Organica Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto md:h-10" // Adjusted for logo size in image
                        priority
                    />
                    
                </div>

                {/* Nav Links & Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden text-2xl text-gray-700 hover:text-green-600 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Nav Links in a single line: Home, Product Category, Our Stories, Contact */}
                    <div
                        className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-2 md:gap-8 font-medium 
                            text-gray-700 absolute md:static top-16 right-0 w-full md:w-auto 
                            bg-white md:bg-transparent shadow-md md:shadow-none 
                            transition-all duration-300 ease-in-out px-4 md:px-0 py-4 md:py-0 z-40 justify-end`}
                    >
                        {/* Home */}
                        <a
                            href="/"
                            className="font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>

                        {/* Product Category Dropdown */}
                        <div className="relative cursor-pointer">
                            <button
                                type="button"
                                className="flex items-center gap-1 font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                                onClick={toggleCategory}
                                aria-expanded={categoryOpen}
                                aria-haspopup="true"
                            >
                                Product Category <span className="text-xs">▼</span>
                            </button>
                            {categoryOpen && (
                               <div
                                  className="absolute bg-white shadow-lg mt-2 w-[calc(100vw-2rem)] md:w-auto min-w-[280px] lg:min-w-[900px] z-30 border border-gray-100 rounded-md -left-[100px] md:left-1/2 md:-translate-x-1/2" // Adjusted positioning
                                  tabIndex={-1}
                                >
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 p-6 md:p-8">
                                    {/* Organic Foods & Beverage */}
                                    <div>
                                      <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base">
                                        Organic Foods & Beverage
                                      </h3>
                                      <ul className="space-y-2 text-sm text-gray-600 mt-4">
                                        <li><a href="/category/spices" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Spices</a></li>
                                        <li><a href="/category/tea" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Tea</a></li>
                                        <li><a href="/category/honey" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Honey</a></li>
                                        <li><a href="/category/rice" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Rice</a></li>
                                        <li><a href="/category/oil" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Oil</a></li>
                                        <li><a href="/category/coffee" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Coffee</a></li>
                                        <li><a href="/category/fruits-vegetable-dried" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Fruits & Vegetable (Dried)</a></li>
                                      </ul>
                                    </div>

                                    {/* Organic Herbs & Medicinal Plant */}
                                    <div>
                                      <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base">
                                        Organic Herbs & Medicinal Plant
                                      </h3>
                                      <ul className="space-y-2 text-sm text-gray-600 mt-4">
                                        <li><a href="/category/yarsagumba" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Yarsagumba (Himalayan Gold)</a></li>
                                        <li><a href="/category/jatamasi" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Jatamasi</a></li>
                                        <li><a href="/category/kutki" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Kutki</a></li>
                                        <li><a href="/category/padamchal" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Padamchal (Himalayan Rhubarb)</a></li>
                                        <li><a href="/category/tulsi" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Tulsi (Holy Basil)</a></li>
                                        <li><a href="/category/chiraito" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Chiraito</a></li>
                                        <li><a href="/category/ashwagandha" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Ashwagandha</a></li>
                                      </ul>
                                    </div>

                                    {/* Organic Body Care & Cosmetics */}
                                    <div>
                                      <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base">
                                        Organic Body Care & Cosmetics
                                      </h3>
                                      <ul className="space-y-2 text-sm text-gray-600 mt-4">
                                        <li><a href="/category/oil-body-care" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Oil (Mustard, Sesame, Sea Buckthorn, Jatamasi)</a></li>
                                        <li><a href="/category/soaps" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Soaps</a></li>
                                        <li><a href="/category/face-mask-scrubs" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Face Mask & Scrubs</a></li>
                                        <li><a href="/category/lip-balms" className="hover:text-green-600 transition-colors" onClick={closeCategory}>Lip Balms</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                            )}
                        </div>

                        {/* Our Stories */}
                        <a
                            href="/stories"
                            className="font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                            onClick={() => setMenuOpen(false)}
                        >
                            Our Stories
                        </a>

                        {/* Contact */}
                        <a
                            href="/contact"
                            className="font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-2 w-60 relative focus-within:border-green-500 transition-colors duration-200 ease-in-out">
                    <input
                        type="text"
                        placeholder="Search Product"
                        value={search}
                        onChange={handleSearchChange}
                        className="outline-none flex-1 bg-transparent text-sm placeholder-gray-400"
                        aria-label="Search products"
                    />
                    {search && (
                        <button
                            onClick={clearSearch}
                            className="ml-2 text-gray-500 hover:text-red-500 transition-colors p-1"
                            aria-label="Clear search"
                        >
                            <RxCross1 size={12} />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full relative focus-within:border-green-500 transition-colors duration-200 ease-in-out">
                    <input
                        type="text"
                        placeholder="Search Product"
                        value={search}
                        onChange={handleSearchChange}
                        className="outline-none flex-1 bg-transparent text-sm placeholder-gray-400"
                        aria-label="Search products"
                    />
                    {search && (
                        <button
                            onClick={clearSearch}
                            className="ml-2 text-gray-500 hover:text-red-500 transition-colors p-1"
                            aria-label="Clear search"
                        >
                            <RxCross1 size={12} />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}