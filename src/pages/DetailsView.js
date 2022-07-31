import React, { useContext, useEffect } from "react";
import { Context } from "../context/state";
import { URL_MOVIE_IMG } from "../utils/contants";
import { formatDate, getYear } from "../utils/helpers";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailsView = () => {
  const { movieSelected } = useContext(Context);

  const movieDetailSelected = (
    <>
      <div className="img-container">
        <img
          draggable="false"
          src={`${URL_MOVIE_IMG}${movieSelected?.poster_path}`}
          alt="poster movie"
        />
      </div>
      <div className="details-content">
        <h2 className="details-title">
          {movieSelected.title} ({getYear(movieSelected.release_date)})
        </h2>
        <p className="details-date">{formatDate(movieSelected.release_date)}</p>
        <div className="details-description">
          <p title="Vote Average">vote average: {movieSelected.vote_average}</p>
          <p title="Vote Count">votes: {movieSelected.vote_count}</p>
          <p title="Popularity">popularity: {movieSelected.popularity}</p>
        </div>
        <h4>Overview</h4>
        <p className="details-overview">{movieSelected.overview}</p>
      </div>
    </>
  );

  return (
    <main className="details-container">
      {Object.keys(movieSelected).length === 0 ? (
        <Link to={"/"} style={{ color: "#000" }}>
          Go Home and select a movie
        </Link>
      ) : (
        movieDetailSelected
      )}
    </main>
  );
};

export default DetailsView;
