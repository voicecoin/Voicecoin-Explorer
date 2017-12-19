import React from 'react';

const Funded = props => {
  return (
    <div className="row funded">
      <div className="col-12 text-center">
        <h3>Funded</h3>
        <hr />
      </div>
      <div className="col-12 text-center">
        {props.amountFunded} ETH
      </div>          
    </div>
  );
}

export default Funded;
