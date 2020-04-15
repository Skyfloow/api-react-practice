import React from 'react';

import './footer.sass';
import reactIcon from './react-logo.svg';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="inner">
        <p>Made with <img className="footer-logo" 
                                src={reactIcon} 
                                alt="react" />,
          by <a href="https://t.me/Skyfloow/" 
              target="_blank"
              rel="noopener noreferrer">
                Bohdan
            </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;