import { Card, Container } from '@mui/material'
import React from 'react'
import "./profile.css"
import { Link } from 'react-router-dom'
export default function Profile() {
  return (
    <div style={{backgroundColor:"purple",height:"100vh",overflow:"hidden"}}>
        <Container style={{padding:"40px",textAlign:"center",marginLeft:"470px",backgroundColor:"purple"}}>
        <Card varient="outlined" style={{height:'700px',width:"500px",padding:"40px"}}>
            <img src="../mainlogo1.jpg" alt="logo" style={{height:"100px"}}/>
            <br/>
            <img src="https://images.pexels.com/photos/19526798/pexels-photo-19526798/free-photo-of-photo-of-a-tree-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Profile picture" style={{height:"70px",width:"70px",borderRadius:"50%"}}/>
            <br/>
            <br/>
            <br/>
            <div className='profile'>
            <div className="profileContent">
            <img src="../avatar.png" alt="user" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            <p>Name</p>
            <input type="text" defaultValue={"Vijay"} style={{marginLeft:"45px"}}/>
            </div>
            <br/>
            <div className="profileContent">
            <img src="../phone-call.png" alt="phone" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            <p>Phone Number</p>
            <input type="text" defaultValue={"9876543210"}/>
            </div>
            <br/>
            <div style={{textAlign:"left",display:"flex",gap:"70px",marginLeft:"50px"}}>
                <img src='../about.png' alt='about' style={{borderRadius:"50px",height:"50px",width:"50px"}}></img>
            </div>
            <br/>
            <input type="text" defaultValue={"Be Yourself"} style={{height:"50px",width:"80%",}} />
            </div>
            <div className="profileBack">
            <Link to='/home'><button>Back</button></Link></div>
        </Card>
        </Container>
    </div>
  )
}
