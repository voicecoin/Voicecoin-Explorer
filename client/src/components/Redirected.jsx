import React from 'React';

const Redirected = () => {
  <div>
    <h3>You need to be logged in to view this page</h3>
    <div>
      <Link className="link" to="/login">Login</Link>
    </div>
    <div>
      <Link className="link" to="/signup">Signup</Link>
    </div>
  </div>
}

export default Redirected;
