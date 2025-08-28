"use client";

import React, { useCallback } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa"; 

export default function SearchBar({ search, onSearchChange, onClearSearch, placeholder = "Search..." }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 relative focus-within:border-green-500 transition-colors duration-200 ease-in-out">
            {/* You could add a search icon here if desired */}
            {/* <FaSearch className="text-gray-400 mr-2" /> */}
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={onSearchChange}
                className="outline-none flex-1 bg-transparent text-sm placeholder-gray-400"
                aria-label={placeholder}
            />
            {search && (
                <button
                    onClick={onClearSearch}
                    className="ml-2 text-gray-500 hover:text-red-500 transition-colors p-1"
                    aria-label="Clear search"
                >
                    <RxCross1 size={12} />
                </button>
            )}
        </div>
    );
}