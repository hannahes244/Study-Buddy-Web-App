import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import SignUpPopup from "../../components/signup/signup";
import SignInPopup from "../../components/signin/signin";

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

    const [confetti, setConfetti] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState("")
    const [currentRequest, setCurrentRequest] = useState(null);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [requestUserPopupOpen, setRequestUserPopupOpen] = useState(false); // For the request user's card popup
    const [selectedRequestUser, setSelectedRequestUser] = useState(null);
    const [NumberOfFriends , SetNumberOfFriends]=useState(0);
    const [showTutorial, setShowTutorial] = useState(true);
    const [signinOpen, setSigninOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
      const hasSeenTutorial = localStorage.getItem("hasSeenTutorial") === "true";
      if (hasSeenTutorial) {
        setSigninOpen(true);
        setShowTutorial(false);
      } else {
        setShowTutorial(true);
      }
    }, []);
      
    
    const handleAccept = (id, name, classification, matchimage, courses) => {
        const request = requests.find(request => request.id === id);
        setRequests(requests.filter(request => request.id !== id));
        setConfetti(true);
        setPopupMessage(`${request.name}'s request has been accepted!`);
        setPopupOpen(true);
        setTimeout(() => {
            setConfetti(false);
        }, 3000);

        const friends =NumberOfFriends +1
        SetNumberOfFriends(friends)
        
        
        // For mapping accepted requests to the chatpage
        const acceptedUser = { id, name, matchimage, classification, courses };
        const storedAcceptedMatches = localStorage.getItem('acceptedMatches');
        let acceptedMatchesArray = storedAcceptedMatches ? JSON.parse(storedAcceptedMatches) : [];
        const isAlreadyAccepted = acceptedMatchesArray.some(match => match.id === acceptedUser.id);
        if (!isAlreadyAccepted) {
            // Add the new accepted user to the array
            acceptedMatchesArray = [...acceptedMatchesArray, acceptedUser];
            console.log(acceptedMatchesArray);

            // Store the updated array back in local storage
            localStorage.setItem('acceptedMatches', JSON.stringify(acceptedMatchesArray));
        }

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

    const handleCloseTutorial = () => {
        setShowTutorial(false);
        setSignupOpen(true);
        localStorage.setItem("hasSeenTutorial", "true");
      };

    return (
    <>
      {showTutorial && (
        <div className="tutorial-overlay">
          <div className="tutorial-popup">
            <h2>Welcome to Study Buddy!</h2>
            <p>Here’s how to get started:</p>
            <ol>
              <li><strong>Create an Account:</strong> Click the button below to get Started!</li>
              <li><strong>Build Your Profile:</strong> Add your courses and major.</li>
              <li><strong>Find Matches:</strong> Browse for your perfect study partner.</li>
              <li><strong>Send Requests:</strong> Connect with buddies and start studying!</li>
            </ol>
            <p>Let’s make this semester your best one yet 🎓</p>
            <button className="tutorial-close-button" onClick={handleCloseTutorial}>
              Let’s Go!
            </button>
          </div>
        </div>
      )}

      <article className="dbContainer">
        {confetti && <Confetti width={windowSize.width} height={windowSize.height} />}

        <Popup className="reqspopup" open={popupOpen} closeOnDocumentClick onClose={closePopup}>
          <div className="reqspopupBox">
            <img className="reqspopup-image" src={requestPic} alt="<MatchedPic>" />
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
                index={0}
                totalcards={1}
                removeCard={() => {}}
              />
            )}
          </div>
        </Popup>
        {signupOpen && (
            <SignUpPopup onClose={() => setSignupOpen(false)} />
        )}
        {signinOpen && (
        <SignInPopup onClose={() => setSigninOpen(false)} />
        )}
        <div className="dbMatchRequestsBox">
          <div className="dbMatchRequests">
            <h1 className="dbMatchRequestsHeading">Match Requests</h1>
            {requests.length > 0 ? (
              requests.map((request) => (
                <div key={request.id} className="dbMatchRequestItem">
                  <p className="dbMatchRequestUser" onClick={() => handleRequestClick(request)}>
                    {request.name} - {request.classification}
                  </p>
                  <div className="dbRequestButtons">
                    <button className="acceptButton" onClick={() => handleAccept(request.id, request.name, request.classification, request.matchimage, request.courses)}>Accept</button>
                    <button className="declineButton" onClick={() => handleDecline(request.id)}>Decline</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="dbMatchRequestsExample">No Requests</div>
            )}
          </div>
        </div>

        <div className="dbMatchBoxBackground">
          <div className="dbMatchBoxContainer">
            <MatchList />
          </div>
          <div className="textbox-container">
            <p>Friends</p>
            <p style={{ fontSize: 30 }}>{NumberOfFriends}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DashBoard;