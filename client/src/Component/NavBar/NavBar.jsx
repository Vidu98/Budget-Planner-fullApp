import React from "react";
import "../../Styles/NavBar/NavBar.css"; // Make sure to create this CSS file
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleSignIn = () =>{
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path-to-your-logo.png" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/plan-trip">Plan to Trip</a></li>
          <li><a href="/virtual-trip">Virtual Trip</a></li>
          <li><a href="/accomadation">Accomadation</a></li>
          <li><NavLink to="/budget">Budget</NavLink></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="sign-in-btn"> 
            <button className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
