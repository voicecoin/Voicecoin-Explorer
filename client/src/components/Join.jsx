import React from 'react';
import { Redirect } from 'react-router-dom';
import AboutContributing from './AboutContributing';
import Contribute from './Contribute';
import Login from './Login';
import MessageToContributors from './MessageToContributors';
import Signup from './Signup';

class Join extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props.info;
    if (props.isLoggedIn === true) {
      return (
        <div className="row justify-content-center">
          <MessageToContributors />
          <Contribute />
          <AboutContributing />
        </div>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}

export default Join;
