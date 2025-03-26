import React, {useState} from "react";
import Popup from 'reactjs-popup';
import "./signin.css";
import 'reactjs-popup/dist/index.css';

// function SignIn() {
//     const [open, setOpen] = useState(false);
//     const closeModal = () => setOpen(false);

//     return (
//         <div>
//           <button onClick={() => setOpen(true)}>Open Popup</button>
//           <Popup open={open} closeOnDocumentClick onClose={closeModal}>
//             <div className="modal">
//               <button className="close" onClick={closeModal}>
//                 &times;
//               </button>
//               {/* Popup content here */}
//               <span>This is a popup</span>
//             </div>
//           </Popup>
//         </div>
//     );

// }

// export default SignIn;

const SignInPopup = ({ onClose }) => {
    return (
      <div className="sipopup-overlay">
        <div className="sipopup-content">
          <button id="signInX" onClick={onClose}>x</button>

            <h2 id="signInTitle">Sign In</h2>

            <div className="siInputDiv">
                <input type="text" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
            </div>

            <button id="siLogin">Login</button>
            
        </div>
      </div>
    );
  };
  
  export default SignInPopup;