import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';

import './item-list.sass';

export default class ItemList extends Component {

  apiService = new ApiService();

  state = {
    charactersList: null
  };

  componentDidMount() {
    this.apiService
      .getAllСharacter()
      .then((charactersList) => {
        this.setState({
          charactersList
        });
      });
  };

  renderItems(arr){
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick = {() => this.props.onItemSelected(id)}>
            {name}
        </li>
      );
    });
  }

  render() {

    const { charactersList } = this.state;
      
    if (!charactersList){
      return <div className="spinner-container"> <Spinner /> </div>
    }

    const items = this.renderItems(charactersList);

    return (
      <ul className="item-list list-group">
        { items }
      </ul>
    );
  }
}
