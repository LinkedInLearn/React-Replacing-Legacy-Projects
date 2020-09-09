import React from 'react';

const Navigation = (props) => {
  return (
    <div className="header">
      <ul className="nav nav-pills pull-right">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <h3 className="text-muted">legacy</h3>
    </div>
  );
}

export default Navigation; 
