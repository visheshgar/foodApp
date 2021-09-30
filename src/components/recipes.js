import React from "react";
import Recipe from "./Recipe"
const Recipes = ({listOfRecipes}) => {
    return(
        <div className="recipes">
        {listOfRecipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>  
    )
}

export default Recipes;