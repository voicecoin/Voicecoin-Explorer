import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      {props.email}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#profileNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="profileNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-link">
            <Link className="link" to="/profile">Profile</Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/settings">Settings</Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/support">Support</Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="#" onClick={props.logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ProfileNav;
