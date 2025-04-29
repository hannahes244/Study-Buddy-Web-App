import React, {useState, useEffect} from "react";
import "./navbar.css";
import sblogo from "../../assets/sblogo.png";
import profilepic from "../../assets/profilepic.png";
import { Link } from "react-router-dom";
import SignInPopup from "../signin/signin";
import SignUpPopup from "../signup/signup";



const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [profilePicUrl, setProfilePicUrl] = useState(() => {
    return localStorage.getItem('accountSettingsData')
      ? JSON.parse(localStorage.getItem('accountSettingsData'))?.profileImageUrl || profilepic
      : profilepic;
  });

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const storedData = localStorage.getItem('accountSettingsData');
  //     if (storedData) {
  //       const imageUrl = JSON.parse(storedData)?.profileImageUrl;
  //       if (imageUrl) {
  //         setProfilePicURl(imageUrl); // Corrected the typo here
  //       } else {
  //         setProfilePicURl(profilepic); // Corrected the typo here
  //       }
  //     } else {
  //       setProfilePicURl(profilepic); // Corrected the typo here
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   // Clean up the event listener on unmount
  //   // return () => {
  //   //   window.removeEventListener('storage', handleStorageChange);
  //   // };
  // }, []);

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
        {/* <div className="box dropdown">
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
        </div> */}
        <div className="box">
          <Link to="/resources">RESOURCES</Link>
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