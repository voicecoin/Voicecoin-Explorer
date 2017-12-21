import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    e.preventDefault();
    const info = this.state;
    this.props.getToken(info);
  }

  render() {
    return (
      <div className="col-6 login-control">

        <div className="row justify-content-center">
          <h3>Login</h3>
        </div>        
        
        <div className="row justify-content-center">
          <div className="col-7 align-self-center">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>
              
              <button type="submit" className="btn btn-dark">Login</button>
            </form>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <p>Need an account? <Link className="link" to="/signup">Signup</Link></p>
        </div>
        
        <div className="row justify-content-center">
          <Link className="link" to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Login;
