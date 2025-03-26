import React, {useState} from "react";
import Popup from 'reactjs-popup';
import "./signup.css";
import 'reactjs-popup/dist/index.css';

const SignUpPopup = ({ onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Sign In</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };


export default SignUpPopup;