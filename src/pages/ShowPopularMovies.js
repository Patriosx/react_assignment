import React, { useContext, useEffect } from "react";

import { Context } from "../context/state";
import { URL_MOVIE_IMG } from "../utils/contants";
const ShowPopularMovies = () => {
  const { popular, getPopularMovies } = useContext(Context);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main className={"home-container"}>
      {popular.map((movie) => {
        return (
          <div className="card-container" key={movie.id}>
            <div className="img-container">
              <img src={`${URL_MOVIE_IMG}${movie.poster_path}`} alt="" />
            </div>
            <p className="card-title">{movie.title}</p>
            <p className="card-date">{movie.release_date}</p>
          </div>
        );
      })}
    </main>
  );
};

export default ShowPopularMovies;
