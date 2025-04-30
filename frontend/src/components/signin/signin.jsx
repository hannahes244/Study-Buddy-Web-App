import React, {useState} from "react";
import "./signin.css";
import ReactDOM from 'react-dom';
import 'reactjs-popup/dist/index.css';
import  {useNavigate} from 'react-router-dom';
import axios from 'axios';

const baseURL = 'http://localhost:10000/api'
const SignInPopup = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault() 

    const {email, password} = inputs;
    const storedUsers = localStorage.getItem('currentUser');
    if (storedUsers) {
      const usersArray = JSON.parse(storedUsers);
      const userFound = usersArray.find(
        user => user.email === email && user.password === password
      );
      if (userFound) {
        console.log('Login successful!');
        localStorage.setItem('loggedInUser', JSON.stringify({ username: userFound.username, email: userFound.email }));
        navigate('/dashboard'); 
        onClose();
      } else {
        console.log('Login failed: Incorrect email or password.');
      
      }
    }
    try{
      const response = await axios.post(`${baseURL}/login/student`, inputs); // /student

      if (response.status >= 200 && response.status < 300) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);


        console.log('Successful - Login Successful');
        navigate('/dashboard');
      }
      else {
        console.log('Sign In Failed!');
      }
    } catch (error){
      console.log('Login Failed Details', error);
    }

  }

    return ReactDOM.createPortal(
      <div className="sipopup-overlay"style={{ zIndex: 1000 }}>
        <div className="sipopup-content"style={{ zIndex: 1001 }}>
          <button onClick={onClose} className="SignInClose">Close</button>
          <div className="signupcontent">
            <h2 className="question">Welcome Back!!</h2>
            <h2 className="SignUp">Sign In</h2>
              <form onSubmit={handleSubmit}>
                <input 
                  name="email" 
                  onChange={handleChange} 
                  value={inputs.email}
                  type="text" 
                  placeholder="Email" required 
                />

                <input 
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                  type="password" 
                  placeholder="Password" required 
                />

                <button type="submit" className="SignUpLogin">Login</button>

              </form>
            </div>
        </div>
      </div>,
      document.getElementById('popup-root')
    );
  };
  
  export default SignInPopup;