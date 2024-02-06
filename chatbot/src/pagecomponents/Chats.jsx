import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/7490540/pexels-photo-7490540.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>jackie</span>
                <p>hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/19949053/pexels-photo-19949053/free-photo-of-a-man-walking-in-the-shadow-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Arjun</span>
                <p>Came tonight from bangalore</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/19869332/pexels-photo-19869332/free-photo-of-person-hiking-on-mountain-path.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Akash</span>
                <p>Machan are you free this weekend</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/13020506/pexels-photo-13020506.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Lakshith</span>
                <p>Nope</p>
            </div>
        </div>
    </div>
  )
}

export default Chats