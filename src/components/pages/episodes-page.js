import React, {Component} from 'react';
import Row from '../row';
import {EpisodeDetails, EpisodeList} from '../api-components';

export default class EpisodesPage extends Component {

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
        left={<EpisodeList onItemSelected={this.onItemSelected} />}
        right={<EpisodeDetails itemId={selectedItem}/>}
      />
    )
  }

}