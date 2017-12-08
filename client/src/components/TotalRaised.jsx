import React from 'react';

class TotalRaised extends React.Component {
  constructor() {
    super();
    this.state = {
      totalRaised: 0
    }
  }

  componentWillMount() {
    // axios.get(ENDPOINT_TO_GET_TOTAL_RAISED)
    //   .then(({data: totalRaised }) => {
    //     this.setState({totalRaised})
    //   })
    //   .catch(err => {
    //     console.error(err, 'Error getting total raised');
    //   });
  }

  render() {
    return(
      <div>
        <h3>Total Raised</h3>
        <h4>$ {this.state.totalRaised}</h4>
      </div>
    );
  }
}

export default TotalRaised;
