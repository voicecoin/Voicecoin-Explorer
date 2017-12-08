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

import PreICO from './PreICO';
import PrivateRoute from './PrivateRoute';
import Redirected from './Redirected';

const AllRoutes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={PreICO} />
      </Switch>
    </Router>
  );
}

export default AllRoutes;
