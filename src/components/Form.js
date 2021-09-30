import React from "react";
import SearchButton from "./searchButton"
const Form = ({ updateSearch, search, getSearch }) => {
  return (
    <form onSubmit={getSearch} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
      />
      <SearchButton />
    </form>
  );
};

export default Form;
