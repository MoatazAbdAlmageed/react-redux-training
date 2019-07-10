import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('token') === '123'
        ? <Component {...props} />
        : (
          <Redirect to="sign-in" />
        )
    )}
  />
);

export default PrivateRoute;
