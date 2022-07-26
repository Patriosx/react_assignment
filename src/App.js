import logo from "./logo.svg";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import ShowPopularMovies from "./components/ShowPopularMovies";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/popular" element={<ShowPopularMovies />} />
          <Route path="/login" element={<h1>loggin</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
