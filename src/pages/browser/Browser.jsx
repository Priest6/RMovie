import React from "react";
import "./browser.css";
import requests from "../../components/api/request";
import Navbar from "../../components/navBar/Navbar";
import Banner from "../../components/banner/Banner";
import MovieList from "../../components/movieList/MovieList";

const listApi = [
  {
    fetchUrl: `${requests.fetchNetflixOriginals}`,
    isLarge: "isLargePoster",
  },
  {
    title: "Xu hướng",
    fetchUrl: `${requests.fetchTrending}`,
  },
  {
    title: "Xếp hạng cao",
    fetchUrl: `${requests.fetchTopRated}`,
  },
  {
    title: "Hành động",
    fetchUrl: `${requests.fetchActionMovies}`,
  },
  {
    title: "Hài",
    fetchUrl: `${requests.fetchComedyMovies}`,
  },
  {
    title: "Kinh Dị",
    fetchUrl: `${requests.fetchHorrorMovies}`,
  },
  {
    title: "Lãng mạn",
    fetchUrl: `${requests.fetchRomanceMovies}`,
  },
  {
    title: "Tài liệu",
    fetchUrl: `${requests.fetchDocumentaries}`,
  },
];
const Browser = () => {
  return (
    <div className="Browser">
      <Navbar />
      <Banner />
      {listApi.map((item, i) => (
        <MovieList
          key={i}
          title={item.title}
          fetchUrl={item.fetchUrl}
          isLargePoster={item.isLarge}
        />
      ))}
    </div>
  );
};

export default Browser;
