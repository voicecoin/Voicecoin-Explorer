import React from 'react';

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
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control" id="emailInput" name="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" className="form-control" id="passwordInput" name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default Login;
