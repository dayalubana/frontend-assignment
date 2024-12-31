import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18+
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./styles/styles.css"; // Custom styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Initialize root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
