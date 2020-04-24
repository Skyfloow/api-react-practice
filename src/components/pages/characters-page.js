import React, {Component} from 'react';
import Row from '../row';
import {CharacterDetails, CharacterList} from '../api-components';

export default class CharactersPage extends Component {

  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    const { selectedItem } = this.state;

    return (
      <Row
        left={<CharacterList onItemSelected={this.onItemSelected} />}
        right={<CharacterDetails itemId={selectedItem}/>}
      />
    )
  }

}