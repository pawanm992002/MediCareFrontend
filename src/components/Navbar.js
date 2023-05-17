import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">MediCare</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/docter">Doctor Section</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/patient">Patient Section</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/covid">Covid Related</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>)
}

export default Navbar;