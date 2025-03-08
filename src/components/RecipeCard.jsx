import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={recipe.imgUrl}
        alt={recipe.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
      <p className="text-sm text-gray-600">Chef: {recipe.chef}</p>
      <p className="text-sm">
        ⭐ {recipe.avgRating} ({recipe.totalRatings} ratings)
      </p>
    </div>
  );
};

export default RecipeCard;
