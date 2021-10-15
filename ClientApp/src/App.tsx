import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { createBrowserHistory } from 'history';
import { Route, Router } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import Temp from "./components/temp";

const storage = store;

const App = () => {
    const history = createBrowserHistory();
    
    return (
        <Provider store={storage}>
            <Router history={history}>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <PrivateRoute path='/game' component={Temp}/>
            </Router>
        </Provider>
    );
  }
  
  export default App;