import "./message.css";
import React from "react";

const Message = (user) => {
    return (
        <div className="message">
            <div className="message-username">{user.username}</div>
            <div className="message-text">{user.classification}</div>
        </div>
    );
}

export default Message;
