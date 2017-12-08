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

import AllRoutes from './AllRoutes';
import Brand from './Brand';
import Header from './Header';
import LanguageSelector from './LanguageSelector';

const HomePage = () => {
  return(
    <div className="wrapper">
      <Header />
      <Brand />
      <LanguageSelector />
      <AllRoutes />
    </div>
  );
}

export default HomePage;
