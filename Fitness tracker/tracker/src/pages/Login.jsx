import { Button, Card ,Container, TextField } from '@mui/material'
import React from 'react'
import "./pages.css"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="login">
        <div className="image">
            <img src="https://images.pexels.com/photos/4150258/pexels-photo-4150258.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
        <div className="content">
            <Container style={{justifyContent:"center"}}>
                <Card variant='outlined' style={{padding:"50px",height:"350px",width:"300px",textAlign:"center"}}>
                    <h2>LOGIN</h2>
                    <TextField id="standard-basic" label="User-Name" placeholder='Enter the username' variant="standard" />
                    <br/>
                    <br/>
                    <TextField id="standard-basic" label="Password" placeholder='Enter the password' variant="standard" />
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/home"><Button variant='contained'>Login</Button></Link>
                    <br/>
                    <br/>
                    <p>OR</p>
                    <p>Forget Password?</p>
                </Card>
                <Card style={{textAlign:"center",marginTop:"10px"}}>
                    <p>Don't have an account?<Link to="/sign">Sign up</Link></p>
                </Card>
            </Container>
        </div>
    </div>
  )
}


