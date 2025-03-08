import React from "react";
import RecipesPage from "./pages/RecipesPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Contest Page
      </h1>
      <RecipesPage />
    </div>
  );
};

export default App;
