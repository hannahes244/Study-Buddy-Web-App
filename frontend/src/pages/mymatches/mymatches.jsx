import "./mymatches.css"
import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal } from 'lucide-react';
import MessageCard from "../../components/messages/messagecard.jsx";
import MessageList from '../../components/messages/messagelist.jsx';

const localStorageKey = (userId) => {return userId};
const MyMatches = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const chatBoxRef = useRef(null);

    const MessageInput = React.memo(({ value, onChange, onKeyPress, onSend }) => {
        return (
          <div className="message-input">
            <textarea
              value={value}
              onChange={onChange}
              placeholder="Type a message..."
              rows="1"
              className="message-text-input"
            />
            <button className="messageSendButton" onClick={onSend}>
              <i className="icon"><SendHorizontal /></i>
            </button>
          </div>
        );
    });

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMessageObject = {
                sender: 'you', // You can implement user identification later
                text: newMessage.trim(),
                timestamp: Date.now(),
            };

            setMessages((prevMessages) => [...prevMessages, newMessageObject]);
            setNewMessage('');

            // Save to local storage
            if (selectedUser) {
                const chatKey = `chat_${localStorageKey(selectedUser.id)}`;
                const storedChat = localStorage.getItem(chatKey);
                const previousMessages = storedChat ? JSON.parse(storedChat) : [];
                localStorage.setItem(chatKey, JSON.stringify([...previousMessages, newMessageObject]));
            }
        }
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
        console.log('newMessage:', newMessage);
    };

    const UserChatInfo = React.memo(({ user }) => {
        const formattedCourses = user.courses ? user.courses.join(', ') : 'No courses listed';
        return (
            <>
                <div className="chatImageBox">
                    <img className="chatImage" src={user.matchimage} alt={user.name} />
                </div>
                <div className="chatUserDescription">
                    <div className="chatUserName">
                        <p>{user.name}</p>
                    </div>
                    <div className="chatSubHeader">
                        <p>Offline • {user.classification} • {formattedCourses}</p>
                    </div>
                </div>
            </>
        );
    });
    const handleMatchClick = (user) => {
        setSelectedUser(user);
        setMessages([]); // Clear previous messages
        loadChatHistory(user.id);
        console.log('Selected User:', user);
    };

    const loadChatHistory = (userId) => {
        const chatKey = `chat_${localStorageKey(userId)}`;
        const storedChat = localStorage.getItem(chatKey);
        if (storedChat) {
            setMessages(JSON.parse(storedChat));
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <article className="mMArticle">
            <div className="messageBoxContainer">

                <div className="sideBarContainer">
                    <div className="messageHeader">
                        <h1>Messages</h1>
                    </div>
                    <div className="messageList">
                        <MessageList onMatchClick={handleMatchClick}/>
                    </div>
                </div>

                <div className="chatPageContainer">
                    
                    {selectedUser ? (
                        <>   
                            <div className="chatHeader">
                                <UserChatInfo user={selectedUser} />
                            </div>
                            <div className="chatBoxContainer" ref={chatBoxRef}>
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender === 'you' ? 'sent' : 'received'}`}>
                                        <p className="message-text">{msg.text}</p>
                                        <span className="message-timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="chatInputContainer">
                                <MessageInput 
                                    value={newMessage}
                                    onChange={handleInputChange}
                                    onSend={handleSendMessage}/>        
                            </div>  
                        </>
                    ) : (
                        <>
                        <div className="chatHeader">
                                <h1>No User Selected</h1>
                        </div>
                        <div className="chatBoxContainer">
                                <h1>Select a chat to start messaging.</h1>
                        </div>
                        <div className="chatInputContainer">
                                <MessageInput />        
                        </div>  
                        </>
                    )}
                </div>

            </div>
        </article>
    )
}

export default MyMatches;