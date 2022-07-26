import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import App from "./App";
import "./styles/normalize.css";
import { BrowserRouter } from "react-router-dom";
import ContextState from "./context/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextState>
  </React.StrictMode>
);
