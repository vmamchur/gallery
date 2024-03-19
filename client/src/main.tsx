import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/app.component";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
