import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="components-list container-fluid">
      <div className="row mb-2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
    </div>
  );
};

export default Row;
