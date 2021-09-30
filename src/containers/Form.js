import React from "react";
import Form from "../components/Form"
const GetForm = ({setQuery,setSearch,search}) => {
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  return(
      <Form updateSearch={updateSearch} getSearch={getSearch} search={search}/>
  )
};

export default GetForm;
