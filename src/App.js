import "./App.css";
import React, { useEffect, useState } from "react";
import getRecipes from "./services/Recipes";
import Recipes from "./components/recipes";
import GetForm from "./containers/Form";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import FinalApp from "./FinalApp";
import Nav from "./Nav";
import ItemDetail from "./components/ItemDetail";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={FinalApp} />
        <Route path="/recipes/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
};

export default App;
