import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Join from './Join';
// import Login from './Login';
import PreIco from './PreIco';
// import Signup from './Signup';
import SignupOrLogin from './SignupOrLogin';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={PreIco} />
          <Route path="/join" component={Join} />
          <Route path={/^\/(login|signup)/} component={SignupOrLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;
