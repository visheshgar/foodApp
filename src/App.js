import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import SearchButton from "./components/searchButton";
import getRecipes from "./services/Recipes"
import Recipes from "./components/recipes"

const App = () => {
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(async () => {
    const data = await getRecipes(query);
    if(data===undefined){
        setRecipes([]);
    }
    else{setRecipes(data.hits);}
  }, [query]);

 

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <SearchButton />
      </form>
      <Recipes listOfRecipes = {recipes}/>
    </div>
  );
};

export default App;
