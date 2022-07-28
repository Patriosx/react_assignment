import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import { Context } from "../context/state";

const ShowPopularMovies = () => {
  const { popular, getPopularMovies } = useContext(Context);
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <main className={"home-container"}>
      {popular.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </main>
  );
};

export default ShowPopularMovies;
