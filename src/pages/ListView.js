import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";

import { Context } from "../context/state";

const ShowPopularMovies = () => {
  const { nextPage, popular } = useContext(Context);
  //Render movies
  const renderMovies = (
    <>
      <div className={"home-container"}>
        {popular.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
      <div className="btn_container">
        <button className="btn_add-movies" onClick={nextPage}>
          ADD MORE
        </button>
      </div>
    </>
  );
  const nothingToRender = (
    <div>
      <h1 style={{ backgroundColor: "white", textAlign: "center" }}>
        No movies to show
      </h1>
    </div>
  );
  return popular.length !== 0 ? renderMovies : nothingToRender;
};

export default ShowPopularMovies;
