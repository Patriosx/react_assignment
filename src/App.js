import logo from "./logo.svg";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import ShowPopularMovies from "./pages/ShowPopularMovies";
import Login from "./pages/Login";
import { Context } from "./context/state";
import { createContext, useEffect } from "react";
function App() {
  const { getPopularMovies } = createContext(Context);

  // getPopularMovies();

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ShowPopularMovies />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
