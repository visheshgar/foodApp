import React from "react";
import style from "/Users/vishesh.garg01/Desktop/temo/my-app/src/recipe.module.css";

interface IRecipe {
    calories: number;
    image: string;
    title: string;
  
}

const Recipe = (recipee: IRecipe): React.ReactElement => {
  return (
    <div className={style.recipe}>
      <h1>{recipee.title}</h1>
      <p>{recipee.calories}</p>
      <img src={recipee.image} alt="" />
    </div>
  );
};

export default Recipe;

// const Recipe = ( recipee: IRecipe): React.ReactElement => {
//     return (
//       <div className={style.recipe}>
//         <h1>{recipee.title}</h1>
//         <p>{recipee.calories}</p>
//         <img src={recipee.image} alt="" />
//       </div>
//     );
//   };

//   export default Recipe;
