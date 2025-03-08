// RecipesPage.jsx
import React, { useState, createContext, useMemo } from "react";
import RecipeCard from "../components/RecipeCard";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import SortOptions from "../components/SortOptions";
import recipes from "../data/recipes";

export const DataContext = createContext();

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    mealType: "All",
    dishType: "All",
    attributes: [],
    sortBy: "newest",
  });

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    // Search filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(lowerSearch) ||
          recipe.chef.toLowerCase().includes(lowerSearch) ||
          recipe.description.toLowerCase().includes(lowerSearch)
      );
    }

    // Meal type filter
    if (filters.mealType !== "All") {
      result = result.filter((recipe) => recipe.mealType === filters.mealType);
    }

    // Dish type filter
    if (filters.dishType !== "All") {
      result = result.filter((recipe) => recipe.dishType === filters.dishType);
    }

    // Sorting
    switch (filters.sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
        break;
      case "highest":
        result.sort((a, b) => b.avgRating - a.avgRating);
        break;
      case "lowest":
        result.sort((a, b) => a.avgRating - b.avgRating);
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, filters]);

  return (
    <DataContext.Provider value={{ filters, setFilters, setSearchTerm }}>
      <div className="flex gap-4 font-roboto p-4">
        <FilterSidebar />
        <div className="flex-1">
          <div className="mb-6">
            <SearchBar />
            <SortOptions />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default RecipesPage;
