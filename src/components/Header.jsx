import { name } from 'ejs';
import React from 'react';
import { Link } from 'react-router-dom';




function Header(props = {name}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/QuickCheck">ANTENATAL CARE MANAGEMENT SYSTEM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Login" className="btn btn-success">{name}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
