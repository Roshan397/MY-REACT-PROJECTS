import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="./mainlogo1.jpg" alt="logo" style={{height:"70px"}}></img>
        <div className='user'>
            <div>
           <Link to='/profile'><img src="https://images.pexels.com/photos/19526798/pexels-photo-19526798/free-photo-of-photo-of-a-tree-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" /></Link>
            </div>
            <span>vijay</span>
            <Link to='/'><button style={{backgroundColor:"purple",color:"white",border:"none",fontSize:"10px",cursor:"pointer"}}>log out</button></Link>
        </div>
    </div>
  )
}

export default Navbar
