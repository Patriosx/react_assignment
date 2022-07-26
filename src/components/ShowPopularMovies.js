import React, { useContext, useEffect } from "react";

import { Context } from "../context/state";
const ShowPopularMovies = () => {
  const { test, popular, getPopularMovies } = useContext(Context);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div>
      <button onClick={() => console.log(popular)}>DALE</button>
    </div>
  );
};

export default ShowPopularMovies;
