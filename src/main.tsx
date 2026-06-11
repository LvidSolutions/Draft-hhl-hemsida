import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App";
import "./styles/global.css";

const rootElement = document.getElementById("root") ?? document.body.appendChild(document.createElement("div"));
rootElement.id = "root";

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
