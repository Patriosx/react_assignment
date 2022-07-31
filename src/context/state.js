/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import { API_KEY } from "../utils/contants";
export const Context = createContext();

const stateContext = ({ children }) => {
  const initialState = {
    popular: [],
    token: "",
    movieSelected: {},
    page: 1,
  };

  //Global State
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopularMovies = (movies) => {
    dispatch({
      type: "GET_MOVIES",
      payload: movies,
    });
  };
  const nextPage = () => {
    //control pages: add more movies
    dispatch({
      type: "ANOTHER_PAGE",
      payload: state.page + 1,
    });
  };
  const selectMovie = (movie) => {
    dispatch({
      type: "SELECT_MOVIE",
      payload: movie,
    });
  };
  //Login Page
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
      // dispatch({
      //   type: "ASK_PERMISSION",
      //   payload: data,
      // });
      /**/
    } catch (error) {
      console.log(error);
    }
  };
  //Data that is available for all their children components
  const contextValue = {
    popular: state.popular,
    token: state.token,
    movieSelected: state.movieSelected,
    page: state.page,
    getPopularMovies,
    createToken,
    askUserPermission,
    selectMovie,
    nextPage,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default stateContext;
