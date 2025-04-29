import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./dashboard.css"
import Confetti from "react-confetti";
import MatchList from "../../components/matchcard/matchlist";
import requestPic from "../../assets/requestPic.png"
import MatchCard from "../../components/matchcard/matchcard";
import cat from "../../assets/acnhpfps/cat.jpeg";
import duck from "../../assets/acnhpfps/duck.jpeg";
import pig from "../../assets/acnhpfps/pig.jpeg";
import raccoon from "../../assets/acnhpfps/raccoon.jpeg";

const DashBoard = () => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            name: "Saniyah",
            classification: "Sophomore",
            matchimage: cat,
            bio: "Straight to the point- I'm here to find a study buddy who actually wants to get things done. I'm all about setting goals, making study schedules, and keeping each other accountable. If you need someone who will hype you up before exams and make sure you don't procrastinate (too much), let's team up! Bonus: I make aesthetic notes and killer study guides.",
            interests: ["Drawing", "Photography", "Reading", "Music", "Money"],
            courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
        },
        {
            id: 2,
            name: "Hannah",
            classification: "Sophomore",
            matchimage: duck,
            bio: "Looking for a study buddy who's all about balance—serious study sessions, but with coffee breaks, brain dumps, and occasional 'what are we even doing with our lives' moments. I work best with people who keep it low-stress but still get stuff done. If you bring good vibes and a shared love for background study music, we'll get along great.",
            interests: ["Crochet", "Puzzles", "Baking", "Legos", "Volleyball"],
            courses: ["Discrete Structures", "Systems Architecture", "Web Development", "Computer Networking"],
        },
        {
            id: 3,
            name: "Jeremiah",
            classification: "Sophomore",
            matchimage: pig,
            bio: "If you thrive under last-minute pressure, we might just be the perfect study match. I'm that person pulling late-night study sessions with coffee in one hand and highlighters in the other. Need a partner to go over flashcards at 2 AM or talk through concepts when you're on the verge of giving up? I got you.",
            interests: ["Surfing", "Writing", "Painting", "Gardening"],
            courses: ["Database Management", "Systems Architecture", "Web Development"],
        },
        {
            id: 4,
            name: "Javon",
            classification: "Sophomore",
            matchimage: raccoon,
            bio: "Studying is way more fun when you're not doing it alone! I love bouncing ideas off people, teaching concepts (because it helps me learn, too), and turning study time into something productive and social. Whether it's deep discussions, whiteboard sessions, or a casual group study vibe, let's make learning less painful together.",
            interests: ["Dancing", "Singing", "Kayaking", "Cooking", "Backpacking", "Video Games"],
            courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
        }
    ]);

    const [matches, setMatches] = useState([
        {
              id: 19,
              name: "Amira",
              classification: "Senior",
              matchimage: sleepingdog,
              bio: "Night owls unite! I do my best work after the sun goes down—midnight study jams, energy drinks, deep focus mode. If you’re tired of study groups that meet at 8 AM, I’m your late-night study buddy!",
              interests: ["Star Gazing", "Writing", "DIY Projects", "Coffee Tasting"],
              courses: ["Natural Language Processing", "Cybersecurity", "Big Data Analytics"],
            }
    ]);

     const [confetti, setConfetti] = useState(false);
        const [popupOpen, setPopupOpen] = useState(false);
        const [popupMessage, setPopupMessage] = useState("")
        const [currentRequest, setCurrentRequest] = useState(null);
        const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
        const [requestUserPopupOpen, setRequestUserPopupOpen] = useState(false); // For the request user's card popup
        const [selectedRequestUser, setSelectedRequestUser] = useState(null);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleAccept = (id, name, classification) => {
        const request = requests.find(request => request.id === id);
        setRequests(requests.filter(request => request.id !== id));
        setConfetti(true);
        setPopupMessage(`${request.name}'s request has been accepted!`);
        setPopupOpen(true);
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

    const handleRequestClick = (request) => {
        setSelectedRequestUser(request);
        setRequestUserPopupOpen(true);
    };

    const closeRequestUserPopup = () => {
        setRequestUserPopupOpen(false);
        setSelectedRequestUser(null);
    };

    return (
        <article className="dbContainer">
            {confetti && <Confetti width={windowSize.width} height={windowSize.height} />} 

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

        <Popup className="request-user-popup" open={requestUserPopupOpen} closeOnDocumentClick onClose={closeRequestUserPopup}>
            <div className="request-user-popup-box">
                {selectedRequestUser && (
                    <MatchCard
                    id={selectedRequestUser.id}
                    name={selectedRequestUser.name}
                    classification={selectedRequestUser.classification}
                    matchimage={selectedRequestUser.matchimage}
                    bio={selectedRequestUser.bio}
                    courses={selectedRequestUser.courses}
                    interests={selectedRequestUser.interests}
                    // You might need to pass index and totalcards if your MatchCard uses them in the popup context
                    index={0}
                    totalcards={1}
                    removeCard={() => {}}
  />
                )}
            </div>
        </Popup>

            <div className="dbMatchRequestsBox">
                <div className="dbMatchRequests">
                    <h1 className="dbMatchRequestsHeading">Match Requests</h1>
                {requests.length > 0 ? requests.map(request => (
                        <div 
                        key={request.id} 
                        className="dbMatchRequestItem">
                            <p className="dbMatchRequestUser" onClick={() => handleRequestClick(request)}>{request.name} - {request.classification}</p>
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
        </article>
    );
};

export default DashBoard;

