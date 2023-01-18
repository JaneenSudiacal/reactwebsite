import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        ninnichigo
      </div>
      <div>
        <ul className="nav-links">
          <li className="nav-link">About</li>
          <li className="nav-link">Shop</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
