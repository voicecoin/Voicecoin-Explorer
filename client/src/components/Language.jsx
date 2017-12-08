import React from 'react';

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.props.lang
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.updateLanguage(e.target.value);
  }

  render() {
    return(
      <div>
        <p value={this.state.lang.iso} onClick={this.handleClick}>{this.state.lang.full}</p>
      </div>
    );
  }
}

export default Language;
