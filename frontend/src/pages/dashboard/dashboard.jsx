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
import raccoonwsunglasses from "../../assets/acnhpfps/raccoonwsunglasses.jpeg";
import sleepingdog from "../../assets/acnhpfps/sleepingdog.jpeg";
import tomnook from "../../assets/acnhpfps/tomnook.jpeg";
import yellowduck from "../../assets/acnhpfps/yellowduck.jpeg";
import sittingcat from "../../assets/acnhpfps/sittingcat.jpeg";
import sittingbear from "../../assets/acnhpfps/sittingbear.jpeg";
import madsquirrel from "../../assets/acnhpfps/madsquirrel.jpeg";
import goat from "../../assets/acnhpfps/goat.jpeg";
import SignUpPopup from "../../components/signup/signup";
import SignInPopup from "../../components/signin/signin";

const DashBoard = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([
    {
      id: 22,
      name: "Sebastian",
      classification: "Junior",
      matchimage: raccoon,
      bio: "Hyper-competitive but in a fun way. I love setting goals, crushing them, and leveling up academically like it’s a video game. If you need a study buddy who’ll push you to be your absolute best, I’m right here!",
      interests: ["Weightlifting", "Strategy Games", "Debate", "Coding Competitions"],
      courses: ["Algorithms", "Data Mining", "Machine Learning"],
    },
    {
      id: 23,
      name: "Nina",
      classification: "Junior",
      matchimage: pig,
      bio: "I'm pretty introverted, but I’m super dependable once you get to know me. If you want someone who's focused, organized, and great at one-on-one study sessions (minus the small talk), I’m your perfect match.",
      interests: ["Reading", "Sketching", "Nature Walks", "Indie Music"],
      courses: ["Operating Systems", "Computer Architecture", "Algorithms"],
    },
    {
      id: 24,
      name: "Zion",
      classification: "Senior",
      matchimage: sittingcat,
      bio: "Big energy! I love leading study groups, organizing meetups, and making sure everyone feels included and motivated. If you need someone to keep the group on task *and* laughing, I'm your guy!",
      interests: ["Public Speaking", "Traveling", "Music Festivals", "Basketball"],
      courses: ["Cybersecurity", "Cloud Computing", "Project Management"],
    },
    {
      id: 25,
      name: "Sage",
      classification: "Sophomore",
      matchimage: sittingbear,
      bio: "Prefer studying remotely? Same here! I'm all about virtual study sessions, shared docs, and late-night Zoom calls. If you’re looking for a study partner who's reliable even from miles away, let's connect online and crush it.",
      interests: ["Gaming", "Blogging", "Photography", "Puzzles"],
      courses: ["Intro to Data Science", "Web Development", "Discrete Structures"],
    },
    {
      id: 26,
      name: "Luca",
      classification: "Freshman",
      matchimage: sleepingdog,
      bio: "I’m a little on the quiet side but super motivated when it comes to hitting academic goals. I prefer small, focused sessions rather than big study groups. If you need someone calm and committed, I'm your person!",
      interests: ["Chess", "Coding", "Baking", "Podcasts"],
      courses: ["Intro to Programming", "Linear Algebra", "General Chemistry"],
    },
    {
      id: 27,
      name: "Aria",
      classification: "Junior",
      matchimage: yellowduck,
      bio: "Nothing beats a good in-person study group. I love gathering a bunch of motivated people, keeping the vibes high, and making studying feel like a team event. If you're looking for someone who makes learning social and fun, let’s do this!",
      interests: ["Dance", "Theater", "Writing", "Travel"],
      courses: ["Artificial Intelligence", "Software Engineering", "Computer Networking"],
    },
    {
      id: 28,
      name: "Dylan",
      classification: "Sophomore",
      matchimage: madsquirrel,
      bio: "Remote work warrior here! I’m all about Google Docs, shared notes, Discord study groups, and productivity apps. If you're looking for someone who knows how to stay connected and focused without needing to meet up, we’ll work great together!",
      interests: ["Technology", "Esports", "Graphic Design", "Reading"],
      courses: ["Systems Architecture", "Database Systems", "Cybersecurity"],
    },
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

    /* LOCAL STORAGE, COMMENT OUT FOR TESTING */
    useEffect(() => {
      const hasSeenTutorial = localStorage.getItem("hasSeenTutorial") === "true";
      if (hasSeenTutorial) {
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
        navigate('/accountsettings');
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
                  <li><strong>Create an Account:</strong> Click the button below!</li>
                  <li><strong>Build Your Profile:</strong> Add your courses and major.</li>
                  <li><strong>Find Matches:</strong> Browse for your perfect study partner.</li>
                  <li><strong>Send Requests:</strong> Connect with buddies and start studying!</li>
                </ol>
                <p>Let’s make this semester your best one yet 🎓</p>
                <button className="tutorial-close-button" onClick={handleCloseTutorial} onClose={handleCloseTutorial}>
                  Let’s Go!
                </button>
              </div>
            </div>
          )}
    

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
        {signupOpen && (
            <SignUpPopup onClose={() => setSignupOpen(false)} />
        )}
        {signinOpen && (
        <SignInPopup onClose={() => setSigninOpen(false)} />
        )}
            <div className="dbMatchRequestsBox">
                <div className="dbMatchRequests">
                    <h1 className="dbMatchRequestsHeading">Match Requests</h1>
                {requests.length > 0 ? requests.map(request => (
                        <div 
                        key={request.id} 
                        className="dbMatchRequestItem">
                            <p className="dbMatchRequestUser" onClick={() => handleRequestClick(request)}>{request.name} - {request.classification}</p>
                            <div className="dbRequestButtons">
                                <button className="acceptButton" onClick={() => handleAccept(request.id, request.name, request.classification, request.matchimage, request.courses)}>Accept</button>
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

