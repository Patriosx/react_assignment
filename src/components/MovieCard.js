import React, { useContext, useEffect } from "react";
import { URL_MOVIE_IMG } from "../utils/contants";
import { formatDate } from "../utils/helpers";
import { Context } from "../context/state";
const MovieCard = ({ movie }) => {
  const { selectMovie } = useContext(Context);

  const onSelectMovie = () => {
    selectMovie(movie);
  };

  return (
    <a href="#" onClick={onSelectMovie}>
      <div className="card-container" key={movie.id}>
        <div className="img-container">
          <img
            draggable="false"
            src={`${URL_MOVIE_IMG}${movie.poster_path}`}
            alt="poster movie"
          />
        </div>
        <div className="card-content">
          <p className="card-title">{movie.title}</p>
          <p className="card-date">{formatDate(movie.release_date)}</p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
