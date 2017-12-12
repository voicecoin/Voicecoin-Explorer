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
    return(
      <div className="form login">
        <h4>LOGIN</h4>
        <form action="http://api.voicecoin.net/api/" method="post">
          <div className="username">
            <label>Email</label>
            <input
              autoComplete="true"
              name="email"
              placeholder="email@domain.com"
              required
              type="text"
            />
          </div>
          <div className="password">
            <label>Passoword</label>
            <input
              type="password"
              required
            />
          </div>
          <button className="submit" type="button submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
