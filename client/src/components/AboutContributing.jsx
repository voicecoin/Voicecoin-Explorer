import React from 'react';
import { Link } from 'react-router-dom';

const AboutContributing = () => {
  return (
    <React.Fragment>
      <div className="col row join">
        <h3 className="col-12 text-center">LEARN HOW TO PARTICIPATE WITH MYETHERWALLET SITE</h3>

        <div className="col-12 text-center">
          <h6>How To Create Wallet & Send / Receive ETH?</h6>
        </div>
        <div className="col-12 text-center">
          <p>
            <Link className="link" to="https://myetherwallet.github.io/knowledge-base/send/creating-wallet-address-to-send-and-receive-eth.html">
              https://myetherwallet.github.io/knowledge-base/send/creating-wallet-address-to-send-and-receive-eth.html
            </Link>
          </p>
        </div>

        <div className="col-12 text-center">
          <h6>Steps on how to make a transfer</h6>
        </div>
        <div className="col-12 text-center">
          <p>
            <Link className="link" to="https://myetherwallet.github.io/knowledge-base/send/how-to-send-eth.html">
              https://myetherwallet.github.io/knowledge-base/send/how-to-send-eth.html
            </Link>
          </p>
        </div>

        <div className="col-12 text-center">
          <h6>Contribute Now</h6>
        </div>
        <div className="col-12 text-center">
          <p>
            <Link className="link" to="https://www.myetherwallet.com/#send-transaction">
              https://www.myetherwallet.com/#send-transaction
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutContributing;
