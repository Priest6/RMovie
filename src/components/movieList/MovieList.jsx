import React, { useEffect, useState } from "react";
import "./movieList.css";
import axios from "../axios/axios";
import MovieDetail from "../movieDetail/MovieDetail";

const MovieList = ({ title, fetchUrl, isLargePoster }) => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);

  //get API
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  //click movie
  const handleClick = (e) => {
    console.log(e);
    if (showData !== Number(e.id)) {
      setShow(true);
      setShowData(Number(e.id));
    } else {
      setShow(!show);
    }
  };

  const movieDetailTrailer = movies.filter((item) => item.id === showData);

  //render
  return (
    <div className="movieContainer">
      {title}
      <div className="movie__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`movie__poster ${isLargePoster && "movie__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargePoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {show && <MovieDetail movieData={movieDetailTrailer[0]} />}
    </div>
  );
};

export default MovieList;
