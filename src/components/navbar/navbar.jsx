import React from "react";
import "./navbar.css";
import sblogo from "../../assets/sblogo.png";
import profilepic from "../../assets/profilepic.png";


const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="sblogo" src={sblogo} alt="Study Buddy" />
      </div>

      <div className="container">
        <div className="box">
          <a href="../Dashboard/dashboard.html">DASHBOARD</a>
        </div>
        <div className="box dropdown">
          <strong>MATCHES</strong>
          <div className="dropdown-content">
            <div>
              <a href="../FindMatches/findmatches.html">Find A Match</a>
            </div>
            <div>
              <a href="../Requests/requests.html">Requests</a>
            </div>
            <div>
              <a href="../MyMatches/mymatches.html">My Matches</a>
            </div>
          </div>
        </div>
        <div className="box">
          <a href="../Resources/resources.html">RESOURCES</a>
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
              <a href="../AccountSettings/accountsettings.html">Profile Settings</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;