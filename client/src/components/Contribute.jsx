import React from 'react';

class Contribute extends React.Component {
  constructor() {
    super();
    this.state = {
      bonus: 0,
      minimumContribution: 1,
      inputAmount: 0
    }

    this.calculateBonus = this.calculateBonus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  calculateBonus(amount) {
    this.setState({bonus: parseFloat(amount / 4)});
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({inputAmount: parseFloat(e.target.value)});
    } else {
      this.setState({inputAmount: 0});
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.calculateBonus(parseFloat(this.state.inputAmount));
  }

  render() {
    const total = parseFloat(this.state.inputAmount + this.state.bonus);
    return (
      <React.Fragment>
        <div className="col row join">
          <div className="col-12 text-center">
            <h3>Contribute</h3>
          </div>
          <div className="col-12 text-center">
            <p>ETH Address </p>
          </div>
          <div className="col-12 text-center">
            <p>MINIMUM CONTRIBUTION</p>
          </div>
          <div className="col-12 text-center">
            <p>{this.state.minimumContribution} ETH</p>
          </div>
          <div className="col-12 text-center">
            <p>BONUS CALCULATOR</p>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              <form className="form-inline" onSubmit={this.handleClick}>
                <div className="form-group">
                  <input type="number" className="form-control" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Calculate</button>
              </form>
            </div>
          </div>
          <div className="col-12 text-center">
            <p>Token: {this.state.inputAmount}</p>
          </div>
          <div className="col-12 text-center">
            <p>Bonus: {this.state.bonus}</p>
          </div>
          <div className="col-12 text-center">
            <p>Total: {Number(this.state.inputAmount + this.state.bonus)}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contribute;
