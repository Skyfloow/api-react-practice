import React, {Component} from 'react';
import Row from '../row';
import {LocationDetails, LocationList} from '../api-components';

export default class LocationsPage extends Component {

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
        left={<LocationList onItemSelected={this.onItemSelected} />}
        right={<LocationDetails itemId={selectedItem}/>}
      />
    )
  }

}