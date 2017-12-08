import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({component: Component, loggedIn, rest}) => {
  return (
    <Route {...rest}
      render={props =>
        // If window.user is defined, the requested route will be shown
        window.user ?
          <Component {...props}/>
        :
        // Otherwise, the user will be sent to /redirected
          <Redirect to={{pathname: '/redirected'}}/>
      }/>
  );
};

export default PrivateRoute;
