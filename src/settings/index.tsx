import React from "react";
import ReactDOM from "react-dom/client";
import Settings from "./Settings";
import "../popup/index.css"; // Reuse Tailwind CSS styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>
);
