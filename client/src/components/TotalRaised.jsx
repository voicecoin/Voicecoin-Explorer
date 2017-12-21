import React from 'react';

class TotalRaised extends React.Component {
  constructor() {
    super();
    this.state = {
      raised: 0
    }
  }

  componentWillMount() {
    // Fetch total raised and setState
  }

  render() {
    return (
      <div className="container total-raised">
        <div className="row col justify-content-center">
          <h3>Amount Raised so Far</h3>
        </div>
        <div className="row col justify-content-center">
          <h5>{this.state.raised}</h5>
        </div>
      </div>
    );
  }
}

export default TotalRaised;
