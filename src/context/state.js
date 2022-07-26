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
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopularMovies = async () => {
    try {
      const { data } = await axios(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: "GET_MOVIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const test = () => {
    console.log("test");
  };
  return (
    <Context.Provider
      value={{ popular: state.popular, getPopularMovies, test }}
    >
      {children}
    </Context.Provider>
  );
};

export default stateContext;
