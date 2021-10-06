import React from 'react';
import Css from './Header.css';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><span className="logoSpan">Skills</span>Academy</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0 ulFormat ">
        <li className="nav-item ">
           <Link className="text-decoration-none text-success" id="top" to="/Home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none text-success "  to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none text-success "  to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none text-success "  to="/contactus">Contact Us</Link>
          </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 input-field" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
