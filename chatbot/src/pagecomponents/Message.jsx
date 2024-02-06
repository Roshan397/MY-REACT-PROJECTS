// import React from 'react'
import React, { useState } from 'react';

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
  
    const sendMessage = () => {
      if (messageInput.trim() !== '') {
        setMessages([...messages, { text: messageInput, user: 'You' }]);
        setMessageInput('');
      }
    };
  
  return (
    
      <div>
      <div className="message-container">
          {messages.map((msg, index) => (
              <div key={index} className='mes'>
              <strong>{msg.user}:</strong><p> {msg.text}</p>
            </div>
          ))}
        </div>
<div className='input' style={{marginTop:"700px",
          top: "0px",
          position: "fixed",
          width:"635px",
          overflow: "hidden"
        }}>
<input type="text"
    placeholder="Type your message..."
    value={messageInput}
    onChange={(e) => setMessageInput(e.target.value)}
    className="message-input"/>
<div className="send" >
  <img src="./attachment.png" alt="" style={{height:"24px",cursor:"pointer"}}/>
  <input type="file" style={{display:"none"}} id='file'/>
  <label htmlFor="file">
    <img src="./default-image.png" alt="" style={{height:"24px",cursor:"pointer"}}/>
  </label>
  <button onClick={sendMessage}>
      Send
    </button>
</div>
</div>
</div>
)
}


export default Message