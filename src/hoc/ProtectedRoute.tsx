import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../store/store";

const ProtectedRoute = ({ component: Component, ...resOfProps }: any) => {
  const data = useSelector((state: RootState) => state.login);
  const isAuthenticated = data.User.UserName !== "";

  return (
    <Route
      {...resOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
