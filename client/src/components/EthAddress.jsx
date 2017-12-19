import React from 'react';

class EthAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ethAddress: ''
    }
  }

  componentWillMount() {
    this.setState({ethAddress: 'This is an example ETH address'});
    // get the user's ethAddress and setState
  }

  render() {
    return (
      <div className="row eth-address">
        <div className="col-12 text-center">
          <h3>Ethereum Address</h3>
        </div>

        <div className="col-12">
          <p>Your individual funding address to participate in the VoiceCoin ICO</p>
        </div>
        
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md align-self-center">
              <img src={this.state.ethAddress} alt="QR Code" />
            </div>
            <div className="col-sm-12 col-md align-self-center">
              <p>Send your ICO funds to this address</p>
              <input id="address" size={this.state.ethAddress.length} type="text" value={this.state.ethAddress} disabled />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EthAddress;
