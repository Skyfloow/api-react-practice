import React, { Component } from 'react';
import RandomCharactersView from './random-characters-view';

import './random-characters.sass';

export default class RandomCharacters extends Component {

  render() {
    return (
      <div className="random-characters jumbotron rounded">
        <RandomCharactersView />
      </div>
    )
  }
}
