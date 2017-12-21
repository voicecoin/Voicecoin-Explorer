import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AllRoutes from './AllRoutes';

const HomePage = () => {

  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route path="*" component={AllRoutes} />
        </Switch>
      </Router>
    </div>
  );
};

export default HomePage;
