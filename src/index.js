import React from "react";
import ReactDOM from "react-dom/client"; // Change here
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root")); // Change here

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
