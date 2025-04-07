import React, {useState} from "react";
import Popup from 'reactjs-popup';
import "./signin.css";
import 'reactjs-popup/dist/index.css';
import  {Link} from 'react-router-dom';


const SignInPopup = ({ onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <button onClick={onClose} className="SignUpClose">Close</button>
          <div className="signupcontent">
            <h2 className="question">Welcome Back!!</h2>
            <h2 lassName="SignUp">Sign In</h2>
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
            </div>

              <Link to="/dashboard" onClick={onClose} className="SignUpLogin">Login</Link>
        </div>
      </div>
      // <div className="sipopup-overlay">
      //   <div className="sipopup-content">
      //     <button id="signInX" onClick={onClose}>Close </button>

      //       <h2 id="signInTitle">Sign In</h2>

      //       <div className="siInputDiv">
      //           <input type="text" placeholder="Email" required/>
      //           <input type="password" placeholder="Password" required/>
      //       </div>

      //       <button id="siLogin">Login</button>
            
      //   </div>
      // </div>
    );
  };
  
  export default SignInPopup;