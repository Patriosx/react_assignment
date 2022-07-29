import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import ListView from "./pages/ListView";
import Login from "./pages/Login";
import { Context } from "./context/state";
import { useContext, useEffect } from "react";
import DetailsView from "./pages/DetailsView";
function App() {
  const { getPopularMovies } = useContext(Context);
  useEffect(() => {
    getPopularMovies();
  }, []);
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
