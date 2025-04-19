import React, {useState} from "react";
import "./signin.css";
import 'reactjs-popup/dist/index.css';
import  {useNavigate} from 'react-router-dom';
import axios from 'axios';

const baseURL = 'http://localhost:10000/api'
const SignInPopup = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function handleSubmit(e){
    e.preventDefault() 
    console.log(inputs)
    try{
      const response = await axios.post(`${baseURL}/login`, inputs);

      if (response.status >= 200 && response.status < 300) {
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

    return (
      <div className="popup-overlay">
        <div className="sipopup-content">
          <button onClick={onClose} className="SignInClose">Close</button>
          <div className="signupcontent">
            <h2 className="question">Welcome Back!!</h2>
            <h2 className="SignUp">Sign In</h2>
              <form>
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

                <button  type="submit" onClick={handleSubmit} className="SignUpLogin">Login</button>

              </form>
            </div>
        </div>
      </div>
    );
  };
  
  export default SignInPopup;