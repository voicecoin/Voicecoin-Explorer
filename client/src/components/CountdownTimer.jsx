import React from 'react';

class CountdownTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      // Months are zero based. This example sets the endDate to Jan 1, 2019 at 12pm
      endDate: new Date(2019, 0, 1, 12, 0, 0, 0),
      weeks: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.state.endDate);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
    if (diff <= 0) {
      return false;
    }

    const timeLeft = {
      weeks: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= (7 * 86400)) {  // 7 * 24 * 60 * 60
      timeLeft.weeks = Math.floor(diff / 7 / 86400);
      diff -= timeLeft.weeks * 7 * 86400;
    }

    if (diff >= 86400) {  // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }

    if (diff >= 3600) {  // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }

    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60
    }

    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(val) {
    val = String(val);
    while(val.length < 2) {
      val = '0' + val;
    }

    return val;
  }

  render() {
    const countdown = this.state;

    return (
      <div className="row align-items-center justify-content-center countdown-timer">
        <div className="col-auto">
          <span><h2> ICO ends in: </h2></span>
        </div>
        
        <div className="col-auto">
          <span>
            <strong>{this.addLeadingZeros(countdown.weeks)}</strong>
            <span>{countdown.weeks === 1 ? 'Week' : 'Weeks'}</span>
          </span>

          <span>
            <strong>{this.addLeadingZeros(countdown.days)}</strong>
            <span>{countdown.days === 1 ? 'Day' : 'Days'}</span>
          </span>

          <span>
            <strong>{this.addLeadingZeros(countdown.hours)}</strong>
            <span>{countdown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </span>

          <span>
            <strong>{this.addLeadingZeros(countdown.min)}</strong>
            <span>{countdown.min === 1 ? 'Minute' : 'Minutes'}</span>
          </span>

          <span>
            <strong>{this.addLeadingZeros(countdown.sec)}</strong>
            <span>Sec</span>
          </span>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
