import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";
import "./App.css";
import "./index.css";
import App from "./App.jsx";

ReactGA.initialize("YOUR-GA-CODE");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
