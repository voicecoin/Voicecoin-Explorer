import React from 'react';
import moment from 'moment';

// To set the correct launch date, update the date in componentWillMount()
// on line 19

class TimeRemaining extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launchDate: '',
      curSecond: moment().second(),
      curMinute: moment().minute(),
      curHour: moment().hour()
    };
  }

  componentWillMount() {
    // Date should be formatted as (YYYY, MM, DD, HH, MM, SS, MS)
    // Resulting date will take into account UTC time conversion
    const date = new Date('2018', '01', '02', '12', '00', '00', '00');
    this.setState({launchDate: date});
  }

  render() {
    const { launchDate } = this.state;
    const launchDateDisplay = moment(launchDate).format('MMM Do YYYY || hh : mm');
    const timeOfDay = moment(launchDate).format('a');
    const launchDisplay = launchDateDisplay + ' ' + timeOfDay;
    const timeToLaunch = moment().to(launchDate);

    return(
      <div className="countdown">
        <h4>Pre-ICO ends {timeToLaunch}</h4>
        <h6>{launchDisplay}</h6>
      </div>
    );
  }
}

export default TimeRemaining;
