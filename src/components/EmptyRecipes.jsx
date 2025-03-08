// components/EmptyRecipes.jsx
import React from "react";

const EmptyRecipes = () => {
  return (
    <div className="text-center py-12 animate-fade-in">
      <div className="max-w-md mx-auto">
        <img
          src="https://w7.pngwing.com/pngs/432/660/png-transparent-empty-cart-illustration.png"
          alt="No recipes found"
          className="w-48 h-48 mx-auto mb-6 opacity-75"
          loading="lazy"
        />
        <h3 className="text-2xl font-bold text-gray-700 mb-2">
          No Recipes Found
        </h3>
        <p className="text-gray-500 mb-4">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        <div className="text-sm text-gray-400">
          <p>Suggestions:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Check your spelling</li>
            <li>Try different keywords</li>
            <li>Clear all filters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmptyRecipes;
