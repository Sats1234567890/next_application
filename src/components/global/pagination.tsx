"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Helper: generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-around items-center mt-6">
      {/* Left side: page info */}
      <p className="text-sm text-green-700 font-medium">
        {String(currentPage).padStart(2, "0")} page of {totalPages}
      </p>

      {/* Right side: pagination controls */}
      <nav className="flex items-center space-x-2">
        {/* Prev button */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Page numbers */}
        {pageNumbers.map((num, idx) =>
          num === "..." ? (
            <span key={idx} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => onPageChange(num as number)}
              className={`px-3 py-1 rounded-md ${
                currentPage === num
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {String(num).padStart(2, "0")}
            </button>
          )
        )}

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};
