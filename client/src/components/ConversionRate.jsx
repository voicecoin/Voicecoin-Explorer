import React from 'react';

const ConversionRate = props => {
  const key = Object.keys(props.rate);
  const value = Object.values(props.rate);
  return (
    <span className="nav-item mr-auto">
      {key} = {value}
    </span>
  );
}

export default ConversionRate;
