import React, { useContext } from "react";
import { URL_MOVIE_IMG } from "../utils/contants";
import { formatDate } from "../utils/helpers";
import { Context } from "../context/state";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { selectMovie } = useContext(Context);
  const onSelectMovie = () => {
    selectMovie(movie);
  };
  return (
    <NavLink to={`/details/${movie.id}`}>
      <div className="card-container" key={movie.id} onClick={onSelectMovie}>
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
          <div className="label_popularity" title="Popularity">
            <MdOutlineThumbUpOffAlt fill="#fff" />
            <span>{movie.popularity}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
