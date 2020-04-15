import React, { Component } from 'react';

import './item-list.sass';

export default class ItemList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Rick Sanchez
        </li>
        <li className="list-group-item">
          Campaign Manager Morty
        </li>
        <li className="list-group-item">
          Pickle Rick
        </li>
      </ul>
    );
  }
}
