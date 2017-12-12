import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Brand from './Brand';
import Header from './Header';
import Join from './Join';
import LanguageSelector from './LanguageSelector';
import PreICO from './PreICO';

const HomePage = () => {
  return(
    <div className="wrapper">
      <Header />
      <Brand />
      <LanguageSelector />
      <Router>
        <Switch>
          <Route exact path="/" component={PreICO} />
          <Route path="/join" component={Join} />
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;
