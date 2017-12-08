import React from 'react';
import TimeRemaining from './TimeRemaining';
import TotalRaised from './TotalRaised';
import JoinTokenSale from './JoinTokenSale';

const PreICO = () => {
  return(
    <div className="main">
      <h1>Voicecoin</h1>
      <h3>Next Generation BlockChain</h3>
      <h3>Connect Voice with BlockChain</h3>
      <TimeRemaining />
      <TotalRaised />
      <JoinTokenSale />
    </div>
  );
}

export default PreICO;
