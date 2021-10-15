import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useAppSelctor } from "../app/hooks";

const PrivateRoute: React.ComponentType<any> = ({
    component: Component,
    ...rest
  }) => {
    const isAuthenticated = useAppSelctor(state => state.auth.isAuthenticated)
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect push to='/signin'/>
          )
        }
      />
    );
  };

export default PrivateRoute