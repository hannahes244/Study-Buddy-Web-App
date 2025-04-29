import React, { useState } from "react";
import "./mymatches.css"
import { SendHorizontal } from 'lucide-react';
import MatchList from "../../components/matchcard/matchlist";

const MyMatches = () => {

    const MessageInput = ({ value, onChange, onKeyPress, onSend }) => {
        return (
          <div className="message-input">
            <textarea
              value={value}
              onChange={onChange}
              onKeyPress={onKeyPress}
              placeholder="Type a message..."
              rows="1"
              className="message-text-input"
            />
            <button className="messageSendButton" onClick={onSend}>
              <i className="icon"><SendHorizontal /></i>
            </button>
          </div>
        );
    };

    return (
        <article className="mMArticle">
            <div className="messageBoxContainer">

                <div className="sideBarContainer">
                    <div className="messageHeader">
                        <h1>Messages</h1>
                    </div>
                    <div className="messageList">


                        <div className="messageListItem">
                            <p>Message 1</p>
                        </div>
                        <div className="messageListItem">
                            <p>Message 2</p>
                        </div>
                        <div className="messageListItem">
                            <p>Message 3</p>
                        </div>
                    </div>
                </div>

                <div className="chatPageContainer">

                    <div className="chatHeader">
                        <h1>Chat Person</h1>
                    </div>

                    <div className="chatBoxContainer">
                        <h1>Insert Chat Here</h1>
                    </div>

                    <div className="chatInputContainer">
                        <MessageInput />        
                    </div>  
                </div>

            </div>
        </article>
    )
}

export default MyMatches;