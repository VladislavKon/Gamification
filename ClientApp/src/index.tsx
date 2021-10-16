import React from "react";
import ReactDOM from "react-dom";
import { SyntheticEvent } from "react";
import Register from "./Register";
import SignIn from "./auth/SignIn";
import register from "./registerServiceWorker";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

register ();