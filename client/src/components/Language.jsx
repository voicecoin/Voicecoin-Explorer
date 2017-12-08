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
    this.props.updateLanguage(e.target.id);
  }

  render() {
    return(
      <li onClick={this.handleClick} id={this.state.lang.iso}>
        <p id={this.state.lang.iso}>{this.state.lang.full}</p>
      </li>
    );
  }
}

export default Language;
