import React from 'react'
import { Button, Card ,Container, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
      <div className="login">
        <div className="image">
            <img src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
        <div className="content">
            <Container style={{justifyContent:"center"}}>
                <Card variant='outlined' style={{padding:"30px 50px 65px 50px",height:"350px",width:"300px",textAlign:"center"}}>
                    <h3>SIGNUP</h3>
                    <TextField id="standard-basic" label="Name" placeholder='Enter the name' variant="standard" />
                    {/* <br/> */}
                    <TextField id="standard-basic" label="Email" placeholder='Enter the email' variant="standard" />
                    <TextField id="standard-basic" label="Phone number" placeholder='Enter the phone number' variant="standard" />
                    <TextField id="standard-basic" label="Username" placeholder='Enter the username' variant="standard" />
                    <TextField id="standard-basic" label="Password" placeholder='Enter the password' variant="standard" />
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/"><Button variant='contained'>Sign Up</Button></Link>
                </Card>
                <Card style={{textAlign:"center",marginTop:"10px"}}>
                    <p>Have an account?<Link to="/">Log in</Link></p>
                </Card>
            </Container>
        </div>
    </div>
  )
}
