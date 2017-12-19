import React from 'react';

const Received = props => {
  return (
    <div className="row received">
      <div className="col-12 text-center">
        <h3>Received</h3>
        <hr />
      </div>
      <div className="col-12 text-center">
        {props.amountReceived} VoiceCoin
      </div>
    </div>
  );
}

export default Received;
