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
    return(
      <div className="language">
        <p className="selected">{this.state.language}</p>
        <ul className="languagepicker">
          {this.state.languages.map((lang, idx) =>
            <Language key={idx} lang={lang} updateLanguage={this.updateLanguage} />
          )}
        </ul>                             
      </div>
    );
  }
}

export default LanguageSelector;
