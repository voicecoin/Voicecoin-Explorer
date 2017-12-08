import React from 'react';
import ConversionRates from './ConversionRates';

// The header will probably need to do some sort of async
// fetch to get conversion rates

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      conversionRate: {
        ONE_VC_TO_ETH: 750,
        ONE_ETH_TO_BTC: 0.05040013,
        ONE_ETH_TO_ETC: 21.60224732,
        ONE_ETH_TO_LTC: 5.43908046
      }
    };
  }

  componentWillMount() {
    // Some sort of fetch to get correct conversion rates
  }

  render() {
    const conversionRate = this.state.conversionRate;
    return(
      <div className="header">
        <div className="conversion">
          <ConversionRates conversion_Rate={this.state.conversionRate} />
        </div>
      </div>
    );
  }
}

export default Header;
