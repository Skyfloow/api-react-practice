import React, { Component } from 'react';
import RandomCharactersView from './random-characters-view';
import ApiService from '../../services/api-service';

import './random-characters.sass';

export default class RandomCharacters extends Component {

  apiService = new ApiService();

  state = {
    characters: {}
  };

  constructor() {
    super();
    this.updateCharacters();
  }

  onCharactersLoaded = (characters) => {
    this.setState({ 
      characters
    });
  };

  updateCharacters() {
    const id = Math.floor(Math.random() * 493) + 1;
    this.apiService
      .getСharacter(id)
      .then(this.onCharactersLoaded);  
  };

  render() {

    const  { characters } = this.state;

    return (
      <div className="random-characters jumbotron rounded">
        <RandomCharactersView characters={characters}/>
      </div>
    )
  }
}
