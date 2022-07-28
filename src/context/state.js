/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import { URL_API, API_KEY } from "../utils/contants";
export const Context = createContext();

const stateContext = ({ children }) => {
  const initialState = {
    popular: [],
    token: "",
    movieSelected: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopularMovies = async () => {
    console.log("%c getPopularMovies", "red");
    try {
      const { data } = await axios(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: "GET_MOVIES",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const test = () => {
    console.log("test");
  };
  const createToken = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      );
      dispatch({
        type: "GET_TOKEN",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const askUserPermission = async (token) => {
    try {
      //*de9b0c1b2fac8532998d370829655e0713af189d
      // const { data } = await axios(
      //   `https://www.themoviedb.org/authenticate/${token}`
      // );
      /**/
      const data = {
        request_token: token,
        username: "johnny_appleseed",
        password: "test123",
      };
      const yourUrl =
        "https://www.themoviedb.org/authenticate/de9b0c1b2fac8532998d370829655e0713af189d";

      fetch(`https://www.themoviedb.org/authenticate/${token}`)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      // dispatch({
      //   type: "ASK_PERMISSION",
      //   payload: data,
      // });

      /**/
    } catch (error) {
      console.log(error);
    }
  };
  const selectMovie = (movie) => {
    dispatch({
      type: "SELECT_MOVIE",
      payload: movie,
    });
    console.log(state.movieSelected);
  };
  return (
    <Context.Provider
      value={{
        popular: state.popular,
        token: state.token,
        movieSelected: state.movieSelected,
        getPopularMovies,
        test,
        createToken,
        askUserPermission,
        selectMovie,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default stateContext;
