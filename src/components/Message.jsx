import React from "react";
import { UserAuth } from "../context/AuthContext";


const Message = ({ message }) => {
  const {currentUser} = UserAuth();
  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.img}/>
          </div>
        </div>
        <div className="chat-header">
         {message.name} 
          <time className="pl-2 text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
