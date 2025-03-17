import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement); // проверка что document.getElementById('root') всегда вернет HTMLElement
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// createRoot(document.getElementById('root')!).render( // сторого уверен, что document.getElementById('root') не null
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
