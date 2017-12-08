import React from 'react';

const ConversionRates = props => {
  const conversion_rate = props.conversion_Rate;
  return(
    <div>
      <p>1 ETH = {conversion_rate.ONE_VC_TO_ETH} Voice Coin</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_BTC} BTC</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_ETC} ETC</p>
      <p>1 ETH = {conversion_rate.ONE_ETH_TO_LTC} LTC</p>                        
    </div>
  );
}

export default ConversionRates;
