import React from 'react';

const Login = () => {
  return(
    <div className="main">
      <h3>SIGN IN</h3>
      <form action="/login" method="post">
        <div className="input">
          <label>Email</label>
          <input autoComplete="true" autoFocus="true" name="email" placeholder="email@domain.com" required type="text" />
        </div>
        <div className="input">
          <label>Password</label>
          <input name="password" placeholder="password" required type="password" />
        </div>
        <button type="button submit">Login</button>
      </form>
      <hr />
      <p>Need to sign up for an account? <a href="/signup">Signup</a></p>
      <a href="/">Home</a>
    </div>
  );
}

export default Login;
