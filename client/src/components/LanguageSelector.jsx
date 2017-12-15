import React from 'react';
import Language from './Language';

class LanguageSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'English',
      languages: [
        {full: 'English' , iso: 'en'},
        {full: 'Chineese' , iso: 'zh'},
        {full: 'German' , iso: 'de'},
        {full: 'Spanish' , iso: 'es'},
        {full: 'Russian' , iso: 'ru'}
      ]
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    const languages = this.state.languages;
    const filtered = languages.filter(lang => lang.iso === language);
    this.setState({language: filtered[0].full});
  }

  render() {
    return (
      <div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.language}
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuButton">
              {this.state.languages.map((lang, idx) =>
                <Language key={idx} lang={lang} updateLanguage={this.updateLanguage} />
              )}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSelector;
