import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./dashboard.css"
import Confetti from "react-confetti";
import MatchList from "../../components/matchcard/matchlist";
import requestPic from "../../assets/requestPic.png"

const MatchRequests = ()   => {
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
            // { id: 1, name: "Jeremiah Whitehurst", year: "Junior"  },
            // { id: 2, name: "Hannah Sanders", year: "Junior" },
            // { id: 3, name: "Javon Edmunds", year: "Sophomore" },
            // { id: 4, name: "Saniyah Bullock", year: "Sophomore" }
    ]);

    const [confetti, setConfetti] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState("")
    const [currentRequest, setCurrentRequest] = useState(null);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
        
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
        
    const handleAccept = (id, name, year) => {
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


}

export default MatchRequests;