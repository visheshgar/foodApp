import "./App.css";
import React, { useEffect, useState } from "react";
import getRecipes from "./services/Recipes";
import Recipes from "./components/recipes";
import GetForm from "./containers/Form"
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    async function fetchData() {
      const data = await getRecipes(query);
      if (data === undefined) {
        setRecipes([]);
      } else {
        setRecipes(data.hits);
      }
    }
    fetchData();
  }, [query]);


  return (
    <div className="App">
    <GetForm setQuery ={setQuery} setSearch={setSearch} search={search}/>
      <Recipes listOfRecipes={recipes} />
    </div>
  );
};

export default App;
