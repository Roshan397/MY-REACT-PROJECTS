import React from 'react'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>jackie</span>
        <div className="chatIcons">
          <img src="./video-camera-black-silhouette-symbol.png" alt="" style={{height:"24px"}}/>
          <img src='./add-friend.png' alt="" style={{height:"24px"}}/>
          <img src="./three-dots-more-indicator.png" alt="" style={{height:"24px"}}/>
        </div>
      </div>
        <Messages/>
    </div>
  )
}

export default Chat