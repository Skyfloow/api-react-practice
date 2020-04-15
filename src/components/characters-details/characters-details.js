import React, { Component } from 'react';

import './characters-details.sass';

export default class CharactersDetails extends Component {

  render() {
    return (
      <div className="character-details card">
        <img className="character-image"
          src="https://rickandmortyapi.com/api/character/avatar/235.jpeg" 
          alt='img' 
        />

        <div className="card-body">
          <h4>Campaign Manager Morty</h4>
          <h6>id: 1</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Status:</span>
              <span>dead</span>
            </li>
            <li className="list-group-item">
              <span className="term">Species:</span>
              <span>human</span>
            </li>
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>Male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Origin:</span>
              <span>Unknown</span>
            </li>
            <li className="list-group-item">
              <span className="term">Last Locations:</span>
              <span>Citadel Of Ricks</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
