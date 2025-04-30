import "./messagecard.css";
import React from "react";

const MessageCard = ({ id, name, classification, matchimage, courses, onClick }) => {
    return (
        <button className="messageCardBox" onClick={onClick}>
            <div className="messageCardImageBox">
                <img className="messageCardImage" src={matchimage} alt={name} /> {/* It's good practice to add alt text to images */}
            </div>
            <div className="messageCardWording">
                <div className="messageCardName">
                    {name}
                </div>
                <div className="messageCardClass">
                    {classification}
                </div>
            </div>
            {/* <div className="messageCardCourses">
                {courses && courses.map((course, index) => (
                    <div key={index}>{course}</div>
                ))}
                {!courses && <div>No courses listed.</div>} {/* Handle cases where courses might be undefined or empty
            </div> */}
        </button>
    );
}

export default MessageCard;
