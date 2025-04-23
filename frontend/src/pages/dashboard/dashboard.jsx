import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./dashboard.css"
import Confetti from "react-confetti";
import MatchList from "../../components/matchcard/matchlist";
import SaniyahPic from "../../assets/saniyahprofilepic.jpeg";
import HannahPic from "../../assets/hannahpfp.jpg";
import JeremiahPic from "../../assets/jeremiah_whitehurst-headshot.jpg";
import JavonPic from "../../assets/javonpfp.jpeg";
import requestPic from "../../assets/requestPic.png"

const DashBoard = () => {
    const [requests, setRequests] = useState([
        { id: 1, name: "Jeremiah Whitehurst", year: "Junior", image: JeremiahPic },
        { id: 2, name: "Hannah Sanders", year: "Junior", image: HannahPic },
        { id: 3, name: "Javon Edmunds", year: "Sophomore", image: JavonPic },
        { id: 3, name: "Saniyah Bullock", year: "Sophomore", image: SaniyahPic }
    ]);
    
     const [confetti, setConfetti] = useState(false);
        const [popupOpen, setPopupOpen] = useState(false);
        const [popupMessage, setPopupMessage] = useState("")
        const [currentRequest, setCurrentRequest] = useState(null);
        const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
        const [NumberOfFriends , SetNumberOfFriends]=useState(0);
    
        useEffect(() => {
            const handleResize = () => {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        const handleAccept = (id) => {
            const request = requests.find(request => request.id === id);
            setRequests(requests.filter(request => request.id !== id));
            setConfetti(true);
            setPopupMessage(`${request.name}'s request has been accepted!`);
            setPopupOpen(true);

            const vergil =NumberOfFriends +1
            SetNumberOfFriends(vergil)
            

            


            
            
            
            setTimeout(() => {
                setConfetti(false);
            }, 3000);
            /* implement actual accept later*/
    
        };
        
    
        const closePopup = () => {
            setPopupOpen(false);
        };
    
        const handleDecline = (id) => {
            const request = requests.find(request => request.id === id);
            setRequests(requests.filter(request => request.id !== id));
            setPopupMessage(`${request.name}'s request has been declined`);
            setCurrentRequest(request);
            setPopupOpen(true);       
            /* implement actual decline later*/
        };
        ////here  implmenent counter
       
       
      

    return (
        <article className="dbContainer">
            {confetti && <Confetti width={windowSize.width} height={windowSize.height} />} 

            {/* <div className="dbFilterContainer">
                <input type="select" name="filter" id="filter"></input>
            </div> */}

        <Popup className="reqspopup" open={popupOpen} closeOnDocumentClick onClose={closePopup}>
            <div className="reqspopupBox">
                <img className="reqspopup-image"
                src= {requestPic}
                alt="<MatchedPic>"
                />
                <h2>{popupMessage}</h2>
            <button className="closePopupButton" onClick={closePopup}>Close</button>
            </div>
        </Popup>

            <div className="dbMatchRequestsBox">
                <div className="dbMatchRequests">
                {requests.length > 0 ? requests.map(request => (
                        <div key={request.id} className="dbMatchRequestItem">
                            <p>{request.name} - {request.year}</p>
                            <div className="dbRequestButtons">
                                <button className="acceptButton" onClick={() => handleAccept(request.id)}>Accept</button>
                                <button className="declineButton" onClick={() => handleDecline(request.id)}>Decline</button>
                            </div>
                        </div>
                    )) : <div className="dbMatchRequestsExample">
                     No Requests
                    </div>}
                </div>
            </div>
            
            <div className = "dbMatchBoxBackground">
                <div className="dbMatchBoxContainer">
                    <MatchList />
                </div>
                
            </div>
            <div className="textbox-container">
                    <p>Friends</p>
                    <p style={{fontSize:30}}>{NumberOfFriends}</p>
                </div>
        </article>
    );
};

export default DashBoard;
