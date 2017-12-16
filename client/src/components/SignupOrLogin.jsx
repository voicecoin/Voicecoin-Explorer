import axios from 'axios';
import React from 'React';
import Login from './Login';
import Signup from './Signup';

class SignupOrLogin extends React.Component {
  constructor(props) {
    super(props);

    this.createUser = this.createUser.bind(this);
    this.getToken = this.getToken.bind(this);
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
    axios({
      method: 'POST',
      url: `http://api.voicecoin.net/v1/Account/token?username=${user.email}&password=${user.password}`
    }).then(res => {
      console.log(res, 'Result from getToken')
    }).catch(err => {
      console.error(err, 'Error getting token');
    });
  }

  render() {
    if (this.props.location.pathname === '/signup') {
      return (
        <Signup createUser={this.createUser}/>
      );
    } else {
      return (
        <Login getToken={this.getToken}/>
      );
    }
  }
}

export default SignupOrLogin;
