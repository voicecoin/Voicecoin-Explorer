import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Join from './Join';
import PreIco from './PreIco';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={PreIco} />
          <Route path="/join" component={Join} />
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;
