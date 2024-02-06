import React from 'react'
import Sidebar from './../pagecomponents/Sidebar';
import Chat from './../pagecomponents/Chat';
import './style.css';
export default function Home() {
  return (
    <div className="home" style={{height:"100vh"}}>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
