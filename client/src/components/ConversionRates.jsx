import React from 'react';

const ConversionRates = props => {
  const conversion_rate = props.conversion_Rate;
  return(
    <div>
      <p>1 ETH = {conversion_rate.ONE_VC_TO_ETH}</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_BTC}</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_ETC}</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_LTC}</p>                        
    </div>
  );
}

export default ConversionRates;
