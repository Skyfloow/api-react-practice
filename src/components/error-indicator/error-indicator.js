import React from 'react';

import './error-indicator.sass';
import icon from './morty-error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="oops">OOPS!</span>
      <span>
        Something went wrong
      </span>
      <span>
        (but we will fix it already)
      </span>
    </div>
  );
};

export default ErrorIndicator;
