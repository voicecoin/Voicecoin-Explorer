import axios from 'axios';
import React from 'react';
import Login from './Login';
import Signup from './Signup';

class Join extends React.Component {
  constructor() {
    super();

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
      this.getToken(user.email, user.password);
    }).catch(err => {
      console.error(err, 'Error creating user');
    });
  }

  getToken(email, password) {
    axios({
      method: 'POST',
      url: `http://api.voicecoin.net/v1/Account/token?username=${email}&password=${password}`
    }).then(res => {
      console.log(res, 'Result from getToken')
    }).catch(err => {
      console.error(err, 'Error getting token');
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Login getToken={this.getToken} />
        </div>
        <div className="col">
          <Signup createUser={this.createUser} getToken={this.getToken} />
        </div>
      </div>
    );
  }
}

export default Join;
