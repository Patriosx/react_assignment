import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/css/main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextState from "./context/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextState>
);
