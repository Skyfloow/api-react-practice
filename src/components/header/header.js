import React from 'react';

import './header.sass';
import gitIcon from './header-git-logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">The Rick & Morty API</a>
        <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Characters 
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">Episodes</a>
            <a className="nav-item nav-link" href="#">Locations</a>
          </div>
        </div>
        <a href="https://github.com/Skyfloow/" 
          className="git-link my-2 my-sm-0" 
          target="_blank"
          rel="noopener noreferrer">
            <img src={gitIcon} 
                 alt="git" 
            />
        </a>
      </nav>
    </header>
  );
};

export default Header;