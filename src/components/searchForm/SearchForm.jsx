import React, { useState } from "react";
import "./searchForm.css";
import SearchLogo from "../navBar/SearchLogo.svg";
import SearchList from "../searchList/SearchList";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [show, setShow] = useState(false);

  const handlerSearch = (e) => {
    setShow(true);
    setValueInput(input);
  };

  const handlerReset = (e) => {
    setShow(false);
    setInput("");
  };

  //render
  return (
    <div>
      <div className=" search__form">
        <div className="input__search">
          <input
            type="text"
            className="inputValue__Search"
            placeholder="Name of movie"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <span>
            <img className="icon__search" src={SearchLogo} alt="" />
          </span>
        </div>
        <div className="action__search">
          <button className="btnReset" onClick={handlerReset}>
            Reset
          </button>
          <button className="btnSearch" onClick={handlerSearch}>
            Search
          </button>
        </div>
      </div>
      {show && <SearchList query={valueInput} />}
    </div>
  );
};

export default SearchForm;
