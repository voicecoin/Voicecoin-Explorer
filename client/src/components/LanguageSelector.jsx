import React from 'react';
import Language from './Language';

class LanguageSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
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
    console.log(language, 'Selected language');
    // this.setState({language});
  }

  render() {
    return(
      <div>
        <p>{this.state.language}</p>
        {this.state.languages.map((lang, idx) =>
          <Language key={idx} lang={lang} updateLanguage={this.updateLanguage} />
        )}                                
      </div>
    );
  }
}

export default LanguageSelector;
