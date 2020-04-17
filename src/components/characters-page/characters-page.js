import React, {Component} from 'react';
import CharactersDetails from '../characters-details/characters-details';
import ItemList from '../item-list/item-list';
import ErrorIndicator from '../error-indicator';

import './characters-page.sass';

export default class CharactersPage extends Component {

  state = {
    selectedCharacters: null,
    hasError: false
  };

  onCharactersSelected = (id) => {
    this.setState({
      selectedCharacters: id
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true});
  }

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="components-list container-fluid">
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onCharactersSelected} />
          </div>
          <div className="col-md-6">
            <CharactersDetails charactersId={this.state.selectedCharacters} />
          </div>
        </div>
      </div>
    )
  }
}