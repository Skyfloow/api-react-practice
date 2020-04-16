import React, { Component } from 'react';
import RandomCharactersView from './random-characters-view';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-characters.sass';

export default class RandomCharacters extends Component {

  apiService = new ApiService();

  state = {
    characters: {},
    loading: true
  };

  constructor() {
    super();
    this.updateCharacters();
  }

  onCharactersLoaded = (characters) => {
    this.setState({ 
      characters,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
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
    const  { characters, loading, error } = this.state;

    const hasData = !(loading || error); 

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <RandomCharactersView characters={characters}/> : null;

    return (
      <div className="random-characters jumbotron rounded">
        { errorMessage }
        { spinner }
        { content }
      </div>
    )
  }
}
