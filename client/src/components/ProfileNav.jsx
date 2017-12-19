import React from 'react';

const ProfileNav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {props.email}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#profileNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="profileNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-link">
            <a href="/profile">Profile</a>
          </li>
          <li className="nav-link">
            <a href="/settings">Settings</a>
          </li>
          <li className="nav-link">
            <a href="/support">Support</a>
          </li>
          <li className="nav-link">
            <a href="#" onClick={props.logout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ProfileNav;
