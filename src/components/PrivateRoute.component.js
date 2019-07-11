import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <Route
      {...rest}
      render={props => (
        currentUser && currentUser.token
          ? <Component {...props} />
          : (
            <Redirect to="sign-in" />
          )
      )}
    />
  );
};

export default PrivateRoute;
