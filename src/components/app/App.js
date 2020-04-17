import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import RandomCharacters from '../random-characters/random-characters';
import ErrorIndicator from '../error-indicator';
import ChractersPage from '../characters-page/characters-page';

import './App.sass';

export default class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true});
  }

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="App">
        <Header />
        <RandomCharacters />  
        <ChractersPage />
        <Footer />
      </div>
    );
  }
}
