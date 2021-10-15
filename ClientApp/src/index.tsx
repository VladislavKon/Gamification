import React from "react";
import ReactDOM from "react-dom";
import { SyntheticEvent } from "react";
import Register from "./Register";
import SignIn from "./auth/SignIn";
import register from "./registerServiceWorker";

const App = () => {
    
    return(
    <span>This is main</span>
    );
} 


ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignIn/>
  </React.StrictMode>,
  document.getElementById("root")
);

register ();