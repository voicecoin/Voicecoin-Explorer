import React from 'react';

const ConversionRate = props => {
  const key = Object.keys(props.rate);
  const value = Object.values(props.rate);
  return (
    <li className="nav-item">
      <a className="nav-link">
        {key} = {value}
      </a>
    </li>
  );
}

export default ConversionRate;
