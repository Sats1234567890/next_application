"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { navLinks } from "@/navdata";
import React from "react";
import InputField from "./searchBar";
import Link from "next/link";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    // State to manage which dropdown is open, using its name as the key
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const clearSearch = useCallback(() => {
        setSearch("");
    }, []);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
        setOpenDropdown(null);
    }, []);

    const toggleDropdown = useCallback((dropdownName) => {
        setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
    }, []);

    const closeDropdownAndMenu = useCallback(() => {
        setOpenDropdown(null);
        setMenuOpen(false);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
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
                        {navLinks?.map((link) => (
                            <React.Fragment key={link.name}>
                                {link.type === "link" && (
                                    <a
                                        href={link.href}
                                        className="font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                                        onClick={closeDropdownAndMenu}
                                    >
                                        {link.name}
                                    </a>
                                )}

                                {link.type === "dropdown" && (
                                    <div className="relative cursor-pointer group"> {/* Added group for hover */}
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 font-semibold hover:text-green-600 transition-colors px-3 py-2 md:p-0"
                                            onClick={() => toggleDropdown(link.name)}
                                            aria-expanded={openDropdown === link.name}
                                            aria-haspopup="true"
                                        >
                                            {link.name} <span className="text-xs">▼</span>
                                        </button>

                                        {/* Dropdown Content */}
                                        {(openDropdown === link.name || (window.innerWidth >= 768 && link.dropdownType === "grid" && openDropdown === null)) && ( // Keep grid open on desktop hover
                                            <div
                                                className={`absolute bg-white shadow-lg mt-2 z-30 border border-gray-100 rounded-md 
                                                    ${link.dropdownType === "grid"
                                                        ? 'w-[calc(100vw-2rem)] md:w-auto min-w-[280px] lg:min-w-[900px] -left-[100px] md:left-1/2 md:-translate-x-1/2'
                                                        : 'w-48 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0' 
                                                    }
                                                    ${openDropdown === link.name ? 'block' : 'hidden md:group-hover:block'}
                                                `}
                                                tabIndex={-1}
                                            >

{link.dropdownType === "grid" && link.sections && (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 p-6 md:p-8">
        {link.sections.map((section, secIndex) => (
            <div key={secIndex}>
                {/* Section title as Link */}
                {section.href ? (
                    <Link
                        href={section.href}
                        className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base block hover:text-green-600 transition-colors"
                        onClick={closeDropdownAndMenu}
                    >
                        {section.title}
                    </Link>
                ) : (
                    <h3 className="font-bold text-gray-800 mb-3 pb-2 border-b-2 border-green-600 text-base">
                        {section.title}
                    </h3>
                )}

                {section.links && (
                    <ul className="space-y-2 text-sm text-gray-600 mt-4">
                        {section.links.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <Link
                                    href={item.href}
                                    className="hover:text-green-600 transition-colors"
                                    onClick={closeDropdownAndMenu}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {section.products && (
                    <ul className="space-y-2 text-sm text-gray-600 mt-4">
                        {section.products.slice(0, 4).map((product, prodIndex) => (
                            <li key={prodIndex}>
                                <Link
                                    href={product.href}
                                    className="hover:text-green-600 transition-colors"
                                    onClick={closeDropdownAndMenu}
                                >
                                    {product.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
    </div>
)}



                                                {link.dropdownType === "simple" && link.links && (
                                                    <ul className="py-2">
                                                        {link.links.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <a
                                                                    href={item.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                                                                    onClick={closeDropdownAndMenu}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block w-60">
                    <InputField
                        value={search}
                        onChange={handleSearchChange}
                        onClear={clearSearch}
                        placeholder="Search..."
                        type="search"
                        icon={<FaSearch />} />
                </div>
            </div>

            <div className="md:hidden px-4 pb-3">
                <InputField
                    value={search}
                    onChange={handleSearchChange}
                    onClear={clearSearch}
                    placeholder="Search..."
                    type="search"
                    icon={<FaSearch />} />
            </div>
        </nav>
    );
}