import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='more'>
            <Link to="/"><img src="./more.png" alt="" /></Link>
        </div>
        <div className="navbarimage">
            <Link to="/leader"><img src="./podium.png" alt="" /></Link>
            <img src="./ringing.png" alt="" />
            <img src="./man.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar