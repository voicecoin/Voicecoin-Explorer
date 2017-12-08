import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import Login from './Login'
import PreICO from './PreICO';
import PrivateRoute from './PrivateRoute';
import Redirected from './Redirected';

const AllRoutes = () => {
  return(
    <Router>
      <Switch>
      <Route exact path="/" component={PreICO} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default AllRoutes;
