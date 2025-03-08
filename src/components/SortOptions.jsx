// SortOptions.jsx
import React, { useContext } from "react";
import { DataContext } from "../pages/RecipesPage";

const SortOptions = () => {
  const { filters, setFilters } = useContext(DataContext);

  const sortingOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "highest", label: "Highest Rated" },
    { value: "lowest", label: "Lowest Rated" },
  ];

  return (
    <div className="mt-4 flex gap-2 flex-wrap">
      {sortingOptions.map((option) => (
        <button
          key={option.value}
          onClick={() =>
            setFilters((prev) => ({ ...prev, sortBy: option.value }))
          }
          className={`px-4 py-2 rounded-md transition-colors ${
            filters.sortBy === option.value
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SortOptions;
