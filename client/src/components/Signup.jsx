import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passoword: '',
      confirm: '',
      match: false,
      _minPasswordLength: 8
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value, e.target.name, 'value, name');
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.state.confirm === this.state.passoword && this.state.passoword.length > this.state._minPasswordLength) {
      this.setState({match: true})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const info = this.state;
    console.log(info, 'info');
    axios({
      method: 'GET',
      url: `http://api.voicecoin.net/v1/Account/exist?userName=${info.email}`
    }).then(res => {
      if (res.data === false) {
        return this.props.createUser(info);
      } else {
        alert('An account with this email address already exists!');
      }
    }).catch(err => {
      console.error(err, 'Error checking if user exists');
    });
  }

  passwordCheck(p1, p2) {
    const minLength = this.state._minPasswordLength;
    if (p1.length >= minLength) {
      if (p1 === p2) {
        this.setState({match: true});
      }
    }
  }

  render() {
    return (
      <div className="col-6 login-control">
        <div className="row justify-content-center">
          <h3>Signup</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-7 align-self-center">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="SignupEmailInput">Email address</label>
                <input type="email" className="form-control" id="SignupEmailInput" name="email" placeholder="Enter email"  required />
              </div>
              <div className="form-group">
                <label htmlFor="SignupPasswordInput">Password</label>
                <input type="password" className="form-control" id="SignupPasswordInput" minLength={this.state._minPasswordLength} name="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmInput">Confirm Password</label>
                <input type="password" className="form-control" id="confirmInput" name="confirm" placeholder="Confirm password" required />
              </div>
              <button type="submit" className="btn btn-primary">Signup</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <p>Already have an account?</p>
        </div>
        <div className="row justify-content-center">
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
