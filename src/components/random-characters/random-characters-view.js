import React from 'react';

const randomCharacterstView = () => {

  return (
      <React.Fragment>
        <img className="characters-image"
          src='https://rickandmortyapi.com/api/character/avatar/328.jpeg' 
          alt={`characters: text`}/>
        <div>
          <h4>Investigator Rick</h4>
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
    </React.Fragment>
  );
};

export default randomCharacterstView;