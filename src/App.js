import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import ListView from "./pages/ListView";
import Login from "./pages/Login";
import DetailsView from "./pages/DetailsView";
import usePopularMovies from "./components/hooks/usePopularMovies";
function App() {
  //initial fetch of movies
  usePopularMovies();
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsView />} />
          <Route path="/" element={<ListView />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
