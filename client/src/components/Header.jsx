import React from 'react';
import { Link } from 'react-router-dom';
import ConversionRate from './ConversionRate';
import Brand from './Brand';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      conversionRates: [
        {'1 VC': '750 ETH'},
        {'1 ETH': '0.05040013 BTC'},
        {'1 ETH': '21.60224732 ETC'},
        {'1 ETH': '5.43908046 LTC'}
      ]
    }
  }

  componentWillMount() {
    // Some sort of fetch to get correct conversion rates
  }

  render() {
    const conversionRate = this.state.conversionRate;
    const isLoggedIn = this.props.isLoggedIn;
    if (!isLoggedIn) {
      return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            
            <Brand />
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {this.state.conversionRates.map((rate, idx) =>
                  <ConversionRate key={idx} rate={rate} />
                )}
              </ul>            
              <div className="nav-item">
                <Link className="link" to="/login">Login</Link>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            
            <Brand />
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {this.state.conversionRates.map((rate, idx) =>
                  <ConversionRate key={idx} rate={rate} />
                )}
              </ul>            
              <div className="nav-item">
                <Link className="link" to="#" onClick={this.props.logout}>Logout</Link>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Header;
