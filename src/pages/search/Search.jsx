import React from "react";
import "./search.css";
import Navbar from "../../components/navBar/Navbar";
import SearchForm from "../../components/searchForm/SearchForm";

const Search = () => {
  return (
    <div className="search__Container">
      <Navbar />
      <SearchForm />
    </div>
  );
};

export default Search;
