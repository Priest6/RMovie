import YouTube from "react-youtube";
import "./movieDetail.css";
import React, { useEffect, useState } from "react";

const MovieDetail = ({ movieData }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [keyVideo, setKeyVideo] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=143bebe5e619280a37d188e20fe3a5ad`
      );
      const dataVideo = await res.json();

      if (dataVideo.results.length === 0) {
        setIsVideo(false);
      } else {
        setIsVideo(true);
        //filter video youtube
        const videos = dataVideo.results.filter((item) => {
          return (
            (item.site === "Youtube" && item.type === "Teaser") ||
            item.type === "Trailer"
          );
        });

        //filter trailer
        const videoTrailer = videos.filter((item) => item.type === "Trailer");
        if (videoTrailer.length === 0) {
          setKeyVideo(videos[0].key);
        } else {
          setKeyVideo(videoTrailer[0].key);
        }
      }
    };

    fetchVideo();
  });
  // console.log(keyVideo)

  const opts = {
    height: "400",
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  //render
  return (
    <div className="details">
      <div key={movieData.id}>
        <h1 className="details__title">{movieData.title || movieData.name}</h1>
        <hr></hr>
        <div>
          <h3>Release Date: {movieData.release_date}</h3>
          <h3>Vote: {movieData.vote_average}</h3>
        </div>
        <p className="details__description">{movieData.overview}</p>
      </div>
      <div className="videoTrailers">
        {isVideo ? (
          <YouTube videoId={keyVideo} opts={opts} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
