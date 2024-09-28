import React, { useEffect, useState } from "react";
import "./movieList.css";
import axios from "../axios/axios";
import MovieDetail from "../movieDetail/MovieDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      <div className="movie__category">{title}</div>

      <div className="movie__posters">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"8"}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`movie__poster ${
                  isLargePoster && "movie__posterLarge"
                }`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargePoster ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {show && <MovieDetail movieData={movieDetailTrailer[0]} />}
    </div>
  );
};

export default MovieList;
