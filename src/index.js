import './polyfills';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightBox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <SimpleReactLightBox>
        <App />
      </SimpleReactLightBox>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
