import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const address = import.meta.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(address);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </Router>
  </React.StrictMode>
);
