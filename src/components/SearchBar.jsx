// SearchBar.jsx
import React, { useContext } from "react";
import { DataContext } from "../pages/RecipesPage";

const SearchBar = () => {
  const { setSearchTerm } = useContext(DataContext);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
    />
  );
};

export default SearchBar;
