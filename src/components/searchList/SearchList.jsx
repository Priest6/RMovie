import React, { useEffect, useState } from "react";
import "./searchList.css";
import MovieDetail from "../movieDetail/MovieDetail";

const SearchList = ({ query }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=143bebe5e619280a37d188e20fe3a5ad&language=en-US&query=${query}&include_adult=false`
        );
        const dataSearch = await res.json();
        if (dataSearch.results.length === 0) {
          throw new Error("No results!");
        } else {
          setData(dataSearch.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSearch();
  }, [query]);

  //click movie
  const handleClick = (e) => {
    console.log(e);
    if (showData !== Number(e.id)) {
      setShow(true);
      setShowData(Number(e.id));
    } else {
      setShow(false);
    }
  };

  const movieDetailTrailer = data.filter((item) => item.id === showData);

  //render
  return (
    <div className="search__result">
      <h2>Search Result</h2>
      <div className="search__posters">
        {data.map((movie) => (
          <img
            className="search__posterLarge"
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : "https://wp.hrc.com.vn/wp-content/uploads/2020/12/winner-successful-concept_51195-3797-e1631452513463.png"
            }
            alt={movie.name}
          />
        ))}
      </div>
      {show && <MovieDetail movieData={movieDetailTrailer[0]} />}
    </div>
  );
};

export default SearchList;
