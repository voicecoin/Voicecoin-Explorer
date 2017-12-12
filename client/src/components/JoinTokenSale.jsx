import React from 'react';
import { Link } from 'react-router-dom'

const JoinTokenSale = () => {
  return(
    <Link to="/join">
      <button className="join">
       Join Token Sale
      </button>
    </Link>
  );
}

export default JoinTokenSale;
