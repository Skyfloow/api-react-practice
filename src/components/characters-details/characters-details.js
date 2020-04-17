import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import './characters-details.sass';

export default class CharactersDetails extends Component {

  apiServices = new ApiService();

  state = {
    characters: null
  };
    
  componentDidUpdate(prevProps) {
    if (this.props.charactersId !== prevProps.charactersId) {
      this.updateCharacters();
    } 
  }

  updateCharacters() {
    const { charactersId } = this.props;

    if (!charactersId){
      return; 
    }
    
    this.apiServices
      .getСharacter(charactersId)
      .then((characters) => {
        this.setState({ characters });
      });
  }

  render() {

    if (!this.state.characters) {
      return <div><span>Select a character from a list</span></div>;
    }

    const { image, id , name, status, 
      species, gender, location, origin } = this.state.characters;

    return (
      <div className="character-details card">
        <img className="character-image"
          src={`${image}`} 
          alt={`characters: ${name}`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Id:</span>
              <span className="list-value">{id}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Status:</span>
              <span className="list-value">{status}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Species:</span>
              <span className="list-value">{species}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span className="list-value">{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Origin:</span>
              <span className="list-value">{origin}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Last Locations:</span>
              <span className="list-value">{location}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
