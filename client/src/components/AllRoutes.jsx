import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Join from './Join';
import PreIco from './PreIco';
import Profile from './Profile';
import ProfileNav from './ProfileNav';
import Settings from './Settings';
import SignupOrLogin from './SignupOrLogin';

class AllRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fireRedirect: false,
      fullName: {
        firstName: '',
        lastName: ''
      },
      isLoggedIn: false,
      location: {
        city: '',
        country: ''
      },
      phone: '',
      token: ''
    }

    this.createUser = this.createUser.bind(this);
    this.getToken = this.getToken.bind(this);
    this.logout = this.logout.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  createUser(user) {
    axios({
      method: 'POST',
      url: 'http://api.voicecoin.net/v1/Account',
      data: {
        email: user.email,
        password: user.password
      }
    }).then(res => {
      this.getToken(user);
    }).catch(err => {
      console.error(err, 'Error creating user');
    });
  }

  getToken(user) {
    const history = this.props.history;
    axios({
      method: 'POST',
      url: `http://api.voicecoin.net/v1/Account/token?username=${user.email}&password=${user.password}`
    }).then(res => {
      this.setState({email: user.email, fireRedirect: true, isLoggedIn: true, token: res.data});
    }).catch(err => {
      console.error(err, 'Error getting token');
    });
  }

  logout() {
    this.setState({email: '', fireRedirect: false, isLoggedIn: false, token: ''});
    return (
      <Redirect to="/" />
    );
  }

  updateUserInfo(user) {
    let { email, fullName, location, phone } = this.state;
    email = user.email;
    fullName = {
      firstName: user.fullName.firstName,
      lastName: user.fullName.lastName
    };
    location = {
      city: user.location.city,
      country: user.location.country
    };
    phone = user.phone;

    this.setState({email, fullName, location, phone});
  }

  render() {
    const path = this.props.location.pathname;
    const { from } = path || '/';
    const { fireRedirect } = this.state;
    if (path === '/') {
      return (
        <React.Fragment>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <PreIco />
        </React.Fragment>
      );
    }
    if (path === '/join') {
      return (
        <React.Fragment>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Join info={this.state} />
        </React.Fragment>
      );
    }
    if (path === '/login' || path === '/signup') {
      return (
        <React.Fragment>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <SignupOrLogin
            createUser={this.createUser}
            getToken={this.getToken}
            location={path} />
            {fireRedirect && (
              <Redirect to={from || '/profile'} />
            )}
          </React.Fragment>
      );
    }
    if (path === '/profile') {
      return (
        <Profile email={this.state.email} isLoggedIn={this.state.isLoggedIn} token={this.state.token} logout={this.logout} />
      );
    }
    if (path === '/settings') {
      const info = this.state;
      if (info.isLoggedIn) {
        return (
          <React.Fragment>
            <ProfileNav email={this.state.email} isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <Settings info={info} isLoggedIn={this.state.isLoggedIn} updateUserInfo={this.updateUserInfo} />
          </React.Fragment>
        );
      } else {
        return (
          <Redirect to="/login" />
        );
      }
    }
  }
}

export default AllRoutes;
