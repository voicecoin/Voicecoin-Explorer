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
}
//<Route exact path="/" component={PreIco} />
//<Route path="/join" component={Join} />
//<Route path={/^\/(login|signup)/} component={SignupOrLogin} />
//<Route path="/profile" component={Profile} />

export default HomePage;
