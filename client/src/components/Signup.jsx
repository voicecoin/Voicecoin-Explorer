import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirm: '',
      match: false
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
    axios({
      method: 'GET',
      url: `http://api.voicecoin.net/core/Account/UserExist/Exist?userName=${info.email}`
    }).then(response => {
      if (response.data === false) {
        return this.props.createUser(info);
      } else {
        alert('An account with this email address already exists!');
      }
    }).catch(err => {
      console.error(err, 'ERROR checking if user exists');
    })
  }

  passwordCheck(p1, p2) {
    const c1 = p1.length > 7;
    const c2 = p2.length > 7;
    const match = p1 === p2;
    const _out = match && (c1 && c2);
    this.setState({match: _out});
  }

  render() {
    return(
      <div className="form signup">
        <h4>SIGNUP</h4>
        <form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <div className="username">
            <label>Email</label>
            <input
              autoComplete="true"
              autoFocus
              name="email"
              placeholder="email@domain.com"
              required
              type="text"
            />
          </div>
          <div className="password">
            <label>Passoword</label>
            <input
              name="password"
              type="password"
              required
            />
          </div>
          <div className="confirm">
            <label>Confirm Password</label>
            <input
              name="confirm"
              type="password"
              required
            />
          </div>
          <div hidden={this.state.match} className="warning">
            Passwords must match and be more than 8 characters long.
          </div>
          <button className="submit" disabled={!this.state.match} type="button submit">Submit</button>
        </form>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.password !== this.state.password || prevState.confirm !== this.state.confirm) {
      this.passwordCheck(this.state.password, this.state.confirm);
    }
  }
}

export default Signup;
