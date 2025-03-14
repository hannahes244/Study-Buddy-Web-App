import React from "react";
import "./navbar.css";
import sblogo from "../../assets/sblogo.png";
import profilepic from "../../assets/profilepic.png";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="sblogo" src={sblogo} alt="Study Buddy" />
      </div>

      <div className="container">
        <div className="box">
          <Link to="/dashboard">DASHBOARD</Link>
        </div>
        <div className="box dropdown">
          <strong>MATCHES</strong>
          <div className="dropdown-content">
            <div>
              <Link to="/findmatches">Find Matches</Link>
            </div>
            <div>
              <Link to="/requests">Requests</Link>
            </div>
            <div>
              <Link to="/mymatches">My Matches</Link>
            </div>
          </div>
        </div>
        <div className="box">
          <Link to="/resources">RESOURCES</Link>
        </div>
      </div>

      <div className="buttons">
        <div className="asbutton">
          <button id="signin">Sign In</button>
        </div>
        <div className="asbutton">
          <button id="signup">Sign Up</button>
        </div>
      </div>

      <div className="accountimg">
        <div className="pfpdropdown">
          <img className="profilepic" src={profilepic} alt="Profile Pic" />
          <div className="pfpdropdown-content">
            <div>
              <Link to="/accountsettings">Profile Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;