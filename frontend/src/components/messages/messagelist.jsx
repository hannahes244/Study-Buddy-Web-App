import "./messagecard.css";
import React, { useEffect, useState } from "react";
import MessageCard from "./messagecard";

const MessageList = ({ onMatchClick }) => {
    const [acceptedMatches, setAcceptedMatches] = useState([]);
    useEffect(() => {
        const storedMatches = localStorage.getItem('acceptedMatches');

        if (storedMatches) {
            setAcceptedMatches(JSON.parse(storedMatches)); // Parse the JSON string back into an array of objects
        }
        console.log(acceptedMatches); // If nothing is in local storage yet, acceptedMatches will remain an empty array
    }, []);
    
    return (
        <div className="message-card-container">
            {acceptedMatches.length > 0 ? (
            acceptedMatches.map((match, index) => (
                <MessageCard
                    id={match.id}
                    name={match.name}
                    classification={match.classification}
                    matchimage={match.matchimage}
                    courses={match.courses}
                    onClick={() => onMatchClick(match)}
                />
            ))) : (
                <p>No messages yet</p>
            )}


        </div>
    );
}

export default MessageList;