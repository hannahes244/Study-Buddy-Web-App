import React from 'react';
import "./welcome.css";
import tutorial from "../../assets/tutorial.mp4";
import { useNavigate, Link } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate('/dashboard');
    }

    return (
        <div className="welcome">
            <video className="welcomeVideo"  controls muted autoPlay loop>
                <source src={tutorial} type="video/mp4" />
             </video>
             <div className="buttonContainer">
                <Link to="/dashboard" className="welcomeButton">Get Started</Link>
             </div>
        </div>
    )
};

export default Welcome;