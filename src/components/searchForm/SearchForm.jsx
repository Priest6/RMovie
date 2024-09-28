import React, { useState } from "react";
import "./searchForm.css";
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
      <div className="search__form">
        <h2 className="title__search">Search Movie</h2>
        <div className="search">
          <div className="form">
            <div className="form--item name">
              <h5>Movie Name</h5>
              <input
                type="text"
                placeholder="Enter keyword"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </div>
            <div className="form--item select">
              <h5>Discover</h5>
              <select name="genres" id="genres">
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="drama">Drama</option>
                <option value="family">Family</option>
                <option value="romance">Romance</option>
              </select>
            </div>
            <div className="form--item select">
              <h5>Media Type</h5>
              <select name="mediaType" id="mediaType">
                <option value="">All Type</option>
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
                <option value="person">Person</option>
              </select>
            </div>
            <div className="form--item select">
              <h5>Language</h5>
              <select name="language" id="language">
                <option value="">All Language</option>
                <option value="en">UK/US</option>
                <option value="ja">Japan</option>
                <option value="ko">Korea</option>
              </select>
            </div>
            <div className="form--item year">
              <h5>Release year</h5>
              <input
                // className="inputYear"
                type="year"
                min="1900"
                max="2030"
                name="year"
                id="year"
                placeholder="year"
              />
            </div>
          </div>
          <div className="btn_search">
            <button className="btnReset" onClick={handlerReset}>
              Reset
            </button>
            <button className="btnSearch" onClick={handlerSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      {show && <SearchList query={valueInput} />}
    </div>
  );
};

export default SearchForm;
