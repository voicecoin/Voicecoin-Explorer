import React from 'React';

const Redirected = () => {
  <div>
    <h3>You need to be logged in to view this page</h3>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <div>
      <Link to="/signup">Signup</Link>
    </div>
  </div>
}

export default Redirected;
