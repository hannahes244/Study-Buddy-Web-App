import React, {useState} from "react";
import Popup from 'reactjs-popup';
import "./signup.css";
import 'reactjs-popup/dist/index.css';
import  {Link} from 'react-router-dom';

const SignUpPopup = ({ onClose}) => {

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <button onClick={onClose} className="SignUpClose">Close</button>
          <div className="signupcontent">
            <h2 className="question">Want to find Study Buddies?</h2>
            <h2 lassName="SignUp">Sign Up</h2>
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
            </div>

              <Link to="/accountsettings" onClick={onClose} className="SignUpLogin">Sign Up</Link>
        </div>
      </div>
    );
  };


export default SignUpPopup;