import React, { Component } from 'react';
import RandomCharactersView from './random-characters-view';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';

import './random-characters.sass';

export default class RandomCharacters extends Component {

  apiService = new ApiService();

  state = {
    characters: {},
    loading: true
  };

  componentDidMount() {
    this.updateCharacters();
  }

  onCharactersLoaded = (characters) => {
    this.setState({ 
      characters,
      loading: false,
    });
  };

  updateCharacters() {

    const id = Math.floor(Math.random() * 493) + 1;

    this.apiService
      .getСharacter(id)
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  render() {

    const  { characters, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <RandomCharactersView characters={characters}/> : null;

    return (
      <div className="random-characters jumbotron rounded">
        { spinner }
        { content }
      </div>
    )
  }
}
