import React from 'react';
import { Container ,Card, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div style={{backgroundColor:"purple",height:"100vh"}}>
        <Container style={{paddingLeft:"370px",paddingTop:"150px"}}>
            <Card varient="outlined" style={{backgroundColor:"White",padding:"40px",width:"380px",height:"400px",textAlign:"center"}}>
                <div><img src='./mainlogo1.jpg' alt='logo' style={{height:"130px"}}></img></div>
                <div style={{colour:"black",textAlign:"center"}}>
                <TextField fullwidth label="username" placeholder="phone number,username,email" style={{marginBottom:"10px",width:"320px"}}>UserName</TextField>
                <TextField fullwidth label="password" type="password" placeholder="password" style={{marginBottom:"20px",width:"320px"}}>Password</TextField>
                <Link to='home'><Button variant="contained" style={{width:"320px",borderRadius:"10px",color:"white",backgroundColor:"purple"}}>Login</Button></Link>
                </div>
                <br/>
                <div>
                    OR
                </div>
                <br/>
                <div >
                <Link to='/forget' style={{textDecoration:"none",color:"purple"}}><p>Forget Password ?</p></Link>
                </div>
            </Card>
                <br/>
            <Card style={{width:"460px",textAlign:"center",textDecoration:"none"}}>
                <p>Don't have an account?<Link to='sign' style={{textDecoration:"none",color:"purple"}}>Sign up</Link></p> 
            </Card>
        </Container>
    </div>
  )
}
