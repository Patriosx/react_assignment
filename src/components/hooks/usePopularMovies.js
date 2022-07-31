/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../../context/state";
import { URL_API, API_KEY } from "../../utils/contants";

const usePopularMovies = () => {
  const { getPopularMovies, page } = useContext(Context);
  console.log("%c getPopularMovies", "red");

  async function getPages() {
    try {
      const { data } = await axios(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      getPopularMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPages();
  }, [page]);
};

export default usePopularMovies;
