import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Header from "./components/Header";

const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(
  <React.StrictMode>
    <Header />

    <App />
  </React.StrictMode>
);
