import React from 'React';
import Login from './Login';
import Signup from './Signup';

const SignupOrLogin = props => {
  const location = props.location;
  if (location === '/signup') {
    return (
      <Signup createUser={props.createUser}/>
    );
  }
  if (location === '/login') {
    return (
      <Login getToken={props.getToken}/>
    );
  }
}

export default SignupOrLogin;
