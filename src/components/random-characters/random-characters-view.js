import React from 'react';

const randomCharacterstView = ({characters}) => {

  const { image, id , name, status, 
        species, gender, location, origin } = characters;

  return (
      <React.Fragment>
        <img className="characters-image"
          src={`${image}`} 
          alt={`characters: ${name}`}/>
        <div>
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
    </React.Fragment>
  );
};

export default randomCharacterstView;