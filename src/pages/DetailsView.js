import React, { createContext } from "react";
import { Context } from "../context/state";
import { URL_MOVIE_IMG } from "../utils/contants";
import { useLocation, useParams } from "react-router";
const DetailsView = () => {
  const { movieSelected } = createContext(Context);
  //   const { id, query } = useParams();
  //   console.log(query, id);

  const { state } = useLocation();
  const { id, color } = state; // Read values passed on state
  return (
    <main className="details-container">
      <div className="img-container">
        <img
          draggable="false"
          src={`${URL_MOVIE_IMG}${movieSelected?.poster_path}`}
          alt="poster movie"
        />
      </div>
    </main>
  );
};

export default DetailsView;
