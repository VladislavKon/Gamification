import { Redirect, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userOkFetch } from "../auth/authSlice";
import { CircularProgress } from "@mui/material";

const PrivateRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const requestProcess = useAppSelector(state => state.auth.requestSended)

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : 
        requestProcess ? (<CircularProgress/>) :
        (
          <Redirect push to='/signin' />
        )
      }
    />
  );
};

export default PrivateRoute