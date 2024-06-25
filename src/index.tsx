import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
