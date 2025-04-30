import React, {useState} from "react";
import "./signup.css";
import 'reactjs-popup/dist/index.css';
import  {useNavigate} from 'react-router-dom';
import axios from 'axios';
//Use React Portals for sign up


const baseURL = 'http://localhost:10000/api'
const SignUpPopup = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, first_name, last_name, email, password } = inputs;
    const currentUser = { username, first_name, last_name, email, password } ;
    const storeCurrentUser = localStorage.getItem('currentUser');
    let currentUserArray = storeCurrentUser ? JSON.parse(storeCurrentUser) : [];
    const isAlreadyRegistered = currentUserArray.some(user => user.username === currentUser.username);
    if (!isAlreadyRegistered) {
        // Add the new accepted user to the array
        currentUserArray = [...currentUserArray, currentUser];
        console.log(currentUserArray);
  
        // Store the updated array back in local storage
        localStorage.setItem('currentUser', JSON.stringify(currentUserArray));
    }

    try{
      const response = await axios.post(`${baseURL}/register/student`, inputs);

      if (response.status >= 200 && response.status < 300) {
        navigate('/accountsettings');
      } else {
        console.log('Sign Up Failed!', response);
      }
    }
    catch (error){
      console.log('Error submitting sign up form', error);
    }
  }

    return (
      <div className="supopup-overlay">
        <div className="supopup-content">
          <button onClick={onClose} className="SignUpClose">Close</button>
          <div className="signupcontent">
            <h2 className="question">Want to find Study Buddies?</h2>
            <h2 className="SignUp">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <input 
                  value={inputs.username} 
                  onChange={handleChange} 
                  name="username" 
                  id="username"
                  type="text" 
                  placeholder="Username" required 
                />

                <input 
                  value={inputs.first_name}
                  onChange={handleChange} 
                  name="first_name" 
                  id="first_name" 
                  type="text" 
                  placeholder="First Name" required 
                />

                <input 
                  value={inputs.last_name}
                  onChange={handleChange} 
                  name="last_name" 
                  id="last_name" 
                  type="text" 
                  placeholder="Last Name" required 
                />

                <input 
                  value={inputs.email}
                  onChange={handleChange} 
                  name="email" 
                  id="email" 
                  type="text" 
                  placeholder="Email" required 
                />

                <input 
                  value={inputs.password}
                  onChange={handleChange} 
                  name="password" 
                  id="password"
                  type="password" 
                  placeholder="Password" required 
                  />

                <button type="submit" onClick={onClose} className="SignUpLogin">Sign Up</button>

              </form>
            </div>
        </div>
      </div>
    );
  };


export default SignUpPopup;