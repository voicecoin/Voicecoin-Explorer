import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = props => {
  if (props.token !== null) {
    return (
      <div>Profile Component</div>
    );
  } else {
    return (
      <Redirect to="/signup" /> 
    );
  }
}

export default Profile;
