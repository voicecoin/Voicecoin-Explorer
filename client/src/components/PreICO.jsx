import React from 'react';
import CountdownTimer from './CountdownTimer';
import TotalRaised from './TotalRaised';
import JoinButton from './JoinButton';

const PreIco = () => {
  return (
    <div className="container-fluid pre-ico">
      <CountdownTimer />
      <TotalRaised />
      <JoinButton />
    </div>
  );
}

export default PreIco;
