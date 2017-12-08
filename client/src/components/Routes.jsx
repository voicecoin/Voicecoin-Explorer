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

import Header from './Header';
import Redirected from './Redirected';
import PreICO from './PreICO';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return(
    <div className="wrapper">
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={PreICO} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Routes;
