import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ViewContextProvidor from "./context/layoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewContextProvidor>
        <App />
      </ViewContextProvidor>
    </BrowserRouter>
  </React.StrictMode>
);
