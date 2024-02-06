import React from 'react';
import { Container ,Card, TextField, Button} from '@mui/material';
export default function Login() {
  return (
    <div style={{backgroundColor:"lightyellow",height:"100vh"}}>
        <Container style={{paddingLeft:"370px",paddingTop:"150px"}}>
            <Card varient="outlined" style={{backgroundColor:"White",padding:"40px",width:"380px",height:"400px",textAlign:"center"}}>
                <h2>LOGIN</h2>
                <br/>
                <div style={{colour:"black",textAlign:"center"}}>
                <TextField fullwidth label="username" placeholder="phone number,username,email" style={{marginBottom:"10px",width:"320px"}}>UserName</TextField>
                <TextField fullwidth label="password" type="password" placeholder="password" style={{marginBottom:"20px",width:"320px"}}>Password</TextField>
                <br/>
                <Button variant="contained" style={{width:"320px",borderRadius:"10px",color:"white",backgroundColor:"lightgrey"}}>Login</Button>
                </div>
                <br/>
                <div>
                    OR
                </div>
                <br/>
                <div >
                <p>Forget Password ?</p>
                </div>
            </Card>
                <br/>
            <Card style={{width:"460px",textAlign:"center",textDecoration:"none"}}>
                <p>Don't have an account?Sign up</p> 
            </Card>
        </Container>
    </div>
  )
}