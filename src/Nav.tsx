import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/recipes">
          <li>Search Recipes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
