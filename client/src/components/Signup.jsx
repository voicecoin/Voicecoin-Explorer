import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: '',
      passoword: '',
      confirmPassword: '',
      emailError: null,
      passwordError: null,
      _minPasswordLength: 8
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    const { email, confirmEmail, password, confirmPassword } = this.state;
    this.setState({emailError: null, passwordError: null});
    e.preventDefault();
    if ((email === confirmEmail) && (password === confirmPassword)) {
      axios({
        method: 'GET',
        url: `http://api.voicecoin.net/v1/Account/exist?userName=${email}`
      }).then(res => {
        if (res.data === false) {
          return this.props.createUser({email, password});
        } else {
          alert('An account with this email address already exists!');
        }
      }).catch(err => {
        console.error(err, 'Error checking if user exists');
      });
    } else {
      if (email !== confirmEmail) {
        this.setState({emailError: true});
      }
      if (password !== confirmPassword) {
        this.setState({passwordError: true});
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
                <input
                  type="email"
                  className="form-control"
                  id="SignupEmailInput"
                  name="email"
                  placeholder="Enter email"
                  required />
              </div>

              <div className="form-group">
                <label htmlFor="ConfirmEmailInput">Confirm Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="SignupConfirmEmailInput"
                  name="confirmEmail"
                  placeholder="Confirm email"
                  required
                  style={{'backgroundColor': this.state.emailError ? '#FCC' : 'white'}} />
                  <small hidden={this.state.emailError === null ? true : false} style={{'color': 'red'}}>
                    Email addresses must match
                  </small>
              </div>

              <div className="form-group">
                <label htmlFor="SignupPasswordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="SignupPasswordInput"
                  minLength={this.state._minPasswordLength}
                  name="password"
                  required />
              </div>

              <div className="form-group">
                <label htmlFor="confirmInput">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmInput"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  style={{'backgroundColor': this.state.passwordError ? '#FCC' : 'white'}} />
                <small hidden={this.state.passwordError === null ? true : false} style={{'color': 'red'}}>
                  Passwords must match
                </small>
              </div>

              <button type="submit" className="btn btn-dark">Signup</button>
            </form>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <p>Already have an account? <Link className="link" to="/login">Login</Link></p>
        </div>
        
        <div className="row justify-content-center">
          <Link className="link" to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
