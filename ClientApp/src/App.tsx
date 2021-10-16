import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { createBrowserHistory } from 'history';
import { Route, Router } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import { Temp } from "./components/temp";
import { Temp2 } from "./components/temp2";
import { useAppDispatch, useAppSelctor } from "./app/hooks";
import { userOkFetch } from "./auth/authSlice";

const App = () => {
    const history = createBrowserHistory();
    // const isAuthenticated = useAppSelctor(state => state.auth.isAuthenticated)
    // if (!isAuthenticated) {
        const dispatch = useAppDispatch();
        dispatch(userOkFetch());
    // }
    return (

        <Router history={history}>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute path='/game' component={Temp} />
            <PrivateRoute path='/game2' component={Temp2} />
        </Router>

    );
}

export default App;