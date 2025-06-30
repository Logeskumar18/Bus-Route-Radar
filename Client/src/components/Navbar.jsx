import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🚌 Bus Route Finder</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/search">Between Stops</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stop">By Stop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
