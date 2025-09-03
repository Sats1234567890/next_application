import React, { useCallback, useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

// Reusable SearchFilter Component
export const SearchFilter = ({
  placeholder = "Search...",
  onSearch,
  onFilter,
  showFilter = true,
  className = "",
  searchValue: controlledValue,
  onSearchChange: controlledOnChange,
  filterLabel = "Filter",
  searchIcon: SearchIcon = Search,
  clearIcon: ClearIcon = X,
  filterIcon: FilterIcon = SlidersHorizontal
}) => {
  const [internalSearch, setInternalSearch] = useState("");
  
  // Use controlled or uncontrolled state
  const searchValue = controlledValue !== undefined ? controlledValue : internalSearch;
  const setSearchValue = controlledOnChange || setInternalSearch;

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  }, [setSearchValue, onSearch]);

  const clearSearch = useCallback(() => {
    setSearchValue("");
    onSearch?.("");
  }, [setSearchValue, onSearch]);

  const handleFilter = useCallback(() => {
    onFilter?.();
  }, [onFilter]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Search Input Container */}
      <div className="flex-1 relative">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon size={16} />
          </div>
          
          {/* Search Input */}
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {/* Clear Button */}
          {searchValue && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              <ClearIcon size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Button */}
      {showFilter && (
        <button
          onClick={handleFilter}
          className="px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2 min-w-fit"
          type="button"
        >
          <FilterIcon size={16} />
          {filterLabel}
        </button>
      )}
    </div>
  );
};

