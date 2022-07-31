import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";

import { Context } from "../context/state";

const ShowPopularMovies = () => {
  const { popular, nextPage } = useContext(Context);

  return (
    <>
      <main className={"home-container"}>
        {popular.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
        <button className="btn_add-movies" onClick={nextPage}>
          ADD MORE
        </button>
      </main>
    </>
  );
};

export default ShowPopularMovies;
