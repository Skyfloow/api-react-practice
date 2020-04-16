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
          <h6>ID: {id}</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Status:</span>
              <span>{status}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Species:</span>
              <span>{species}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Origin:</span>
              <span>{origin}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Last Locations:</span>
              <span>{location}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};

export default randomCharacterstView;