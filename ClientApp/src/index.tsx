import React from "react";
import ReactDOM from "react-dom";
import { SyntheticEvent } from "react";
import Register from "./Register";
import SignIn from "./auth/SignIn";
import register from "./registerServiceWorker";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

register ();