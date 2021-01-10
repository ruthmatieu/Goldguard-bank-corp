import React from "react";
import { Route, Redirect } from "react-router-dom";

//must have same API as <Route/>
//renders a <Route/> and passes all the props through to it
//it checks if the user is authenticated, if so renders rhe comp prop if not renders o homepage

const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = window.localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/error' />;
        }
      }}
    />
  );
};

export default PrivateRoute;