import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";

const initApp = () => {
  const element = document.getElementById("root");
  if(!element) {
    return;
  }
  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

initApp();

