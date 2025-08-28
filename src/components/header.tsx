"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import SearchBar from "./searchBar";
import { navLinks } from "@/navdata";
import React from "react";

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
        // Close category dropdown when opening/closing main menu
        if (categoryOpen) setCategoryOpen(false);
    }, [categoryOpen]);

    const toggleCategory = useCallback(() => {
        setCategoryOpen(prev => !prev);
    }, []);

    const closeCategory = useCallback(() => {
        setCategoryOpen(false);
        // Also close the mobile menu if category was opened from there
        setMenuOpen(false);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-around px-4 py-3 md:px-6">
                <div className="flex items-center flex-shrink-0 gap-3">
                    <Image
                        src="/logo.svg"
                        alt="Chino Organica Logo"
                        width={50}
                        height={50}
                        className="h-10 w-auto md:h-10"
                        priority
                    />
                </div>

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

                    {/* Nav Links */}
                    <div
                        className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-2 md:gap-8 font-medium 
                            text-gray-700 absolute md:static top-16 right-0 w-full md:w-auto 
                            bg-white md:bg-transparent shadow-md md:shadow-none 
                            transition-all duration-300 ease-in-out px-4 md:px-0 py-4 md:py-0 z-40 justify-end`}
                    >
                        {navLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                {link.type === "link" && (
                                    <a
                                        href={link.href}
                                        className="font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )}

                                {link.type === "dropdown" && (
                                    <div className="relative cursor-pointer">
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                                            onClick={toggleCategory}
                                            aria-expanded={categoryOpen}
                                            aria-haspopup="true"
                                        >
                                            {link.name} <span className="text-xs">▼</span>
                                        </button>
                                        {categoryOpen && (
                                            <div
                                                className="absolute bg-white shadow-lg mt-2 w-[calc(100vw-2rem)] md:w-auto min-w-[280px] lg:min-w-[900px] z-30 border border-gray-100 rounded-md -left-[100px] md:left-1/2 md:-translate-x-1/2"
                                                tabIndex={-1}
                                            >
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 p-6 md:p-8">
                                                    {link.categories?.map((category, catIndex) => (
                                                        <div key={catIndex}>
                                                            <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base">
                                                                {category.title}
                                                            </h3>
                                                            <ul className="space-y-2 text-sm text-gray-600 mt-4">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <li key={itemIndex}>
                                                                        <a
                                                                            href={item.href}
                                                                            className="hover:text-green-600 transition-colors"
                                                                            onClick={closeCategory}
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:block w-60"> {/* Added w-60 to maintain width */}
                    <SearchBar
                        search={search}
                        onSearchChange={handleSearchChange}
                        onClearSearch={clearSearch}
                        placeholder="Search Product"
                    />
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden px-4 pb-3">
                <SearchBar
                    search={search}
                    onSearchChange={handleSearchChange}
                    onClearSearch={clearSearch}
                    placeholder="Search Product"
                />
            </div>
        </nav>
    );
}