import React from "react";
import Recipe from "./Recipe";
import IRecipe from "./Recipe";

const getRequiredRecipe = (recipe) => {
  // console.log(recipe);
  const currentRecipe = {
    title: recipe.label,
    calories: recipe.calories,
    image: recipe.image,
  };
  // console.log(currentRecipe);
  return currentRecipe;
};

const Recipes = ({ listOfRecipes }) => {
  const finalListOfRecipes = listOfRecipes.map((recipe) =>
    getRequiredRecipe(recipe.recipe)
  );
console.log(finalListOfRecipes)
  return (
    <div className="recipes">
      {finalListOfRecipes.map((recipe) => (
        <Recipe key={recipe.title} {...recipe} />
      ))}
    </div>
  );
};

export default Recipes;
