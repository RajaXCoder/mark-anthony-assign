// FilterSidebar.jsx
import React, { useContext } from "react";
import { DataContext } from "../pages/RecipesPage";

const mealsTypesArr = ["All", "Dinner", "Lunch", "Dessert", "Breakfast"];
const dishTypeArr = [
  "All",
  "Pasta",
  "Curry",
  "Stew",
  "Pizza",
  "Sushi",
  "Salad",
  "Cake",
  "Noodles",
  "Tacos",
  "Vegetarian",
  "Chicken",
  "Seafood",
  "Pancakes",
  "Soup",
];

const FilterSidebar = () => {
  const { filters, setFilters } = useContext(DataContext);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const clearFilters = () => {
    setFilters({
      mealType: "All",
      dishType: "All",
      attributes: [],
      sortBy: "newest",
    });
  };

  return (
    <div className="w-64 bg-white p-4 shadow-md rounded-lg">
      <h2 className="font-bold text-2xl mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Meal Type</h3>
        <select
          className="w-full p-2 border rounded-md"
          value={filters.mealType}
          onChange={(e) => handleFilterChange("mealType", e.target.value)}
        >
          {mealsTypesArr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Dish Type</h3>
        <select
          className="w-full p-2 border rounded-md"
          value={filters.dishType}
          onChange={(e) => handleFilterChange("dishType", e.target.value)}
        >
          {dishTypeArr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={clearFilters}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
