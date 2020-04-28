import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './header.sass';
import gitIcon from './header-git-logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">The Rick & Morty API</Link>
        <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink activeClassName="active" className="nav-item nav-link" to="/characters/">Characters</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="/episodes/">Episodes</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="/locations/">Locations</NavLink>
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