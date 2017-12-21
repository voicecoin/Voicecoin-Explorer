import React from 'react';
import { Link } from 'react-router-dom';

const JoinButton = () => {
  return (
    <div className="row col justify-content-center join-button">
      <Link className="link" to="/join">
        <button className="btn btn-dark btn-lg">
          Join Token Sale
        </button>
      </Link>
    </div>
  );
}

export default JoinButton;
