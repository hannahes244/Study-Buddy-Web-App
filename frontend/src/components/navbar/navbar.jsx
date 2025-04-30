import React, {useState, useEffect} from "react";
import "./navbar.css";
import sblogo from "../../assets/sblogo.png";
import profilepic from "../../assets/profilepic.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignInPopup from "../signin/signin";
import SignUpPopup from "../signup/signup";



const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const [profilePicUrl, setProfilePicUrl] = useState(() => {
    return localStorage.getItem('accountSettingsData')
      ? JSON.parse(localStorage.getItem('accountSettingsData'))?.profileImageUrl || profilepic
      : profilepic;
  });

  const handleSignOut = () => {
    const keysToRemove = Object.keys(localStorage).filter(key => key !== 'currentUser');

    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });

    localStorage.removeItem('loggedInUser');

    console.log('Signed out and local storage cleared (except currentUser).');
    navigate('/'); // bring this back to the welcome page?
  };



  useEffect(() => {
    const handleProfilePictureUpdate = () => {
      const storedData = localStorage.getItem('accountSettingsData');
      if (storedData) {
        setProfilePicUrl(JSON.parse(storedData)?.profileImageUrl || profilepic);
      } else {
        setProfilePicUrl(profilepic);
      }
    };
  
    window.addEventListener('profilePictureUpdated', handleProfilePictureUpdate);
  
    return () => {
      window.removeEventListener('profilePictureUpdated', handleProfilePictureUpdate);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <img className="sblogo" src={sblogo} alt="Study Buddy" />
      </div>

      <div className="container">
        <div className="box">
          <Link to="/dashboard">DASHBOARD</Link>
        </div>
        <div className="box">
          <Link to="/mymatches">MATCHES</Link>
        </div>
        <div className="box">
          <Link to="/resources">RESOURCES</Link>
        </div>
        <div className="box">
          <Link to="/vibe">VIBE</Link>
        </div>
      </div>

      <div className="buttons">
        <div className="asbutton">
          <button id="signin" onClick={() => setShowSignIn(true)}>Sign In</button>
        </div>
        <div className="asbutton">
          <button id="signup" onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
      </div>

      <div className="accountimg">
        <div className="pfpdropdown">
          <img className="profilepic" src={profilePicUrl || profilepic} alt="Profile Pic" />
          <div className="pfpdropdown-content">
            <div>
              <Link to="/accountsettings">Profile Settings</Link>
            </div>
            <div className="signoutContainer">
              <button className="signoutButton"onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the popups conditionally */}
      {showSignIn && <SignInPopup onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpPopup onClose={() => setShowSignUp(false)} />}
    </nav>
  );
};

export default NavBar;