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
    this.props.updateLanguage(e.target.id)
  }

  render() {
    return (
      <a className="dropdown-item" href="#" id={this.state.lang.iso} onClick={this.handleClick}>{this.state.lang.full}</a>
    );
  }
}

export default Language;
