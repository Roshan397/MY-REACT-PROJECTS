import React from 'react'
import { Container ,Card, TextField, Button} from '@mui/material';
export default function Signup() {
  return (
    <div style={{backgroundColor:"lightyellow",height:"100vh"}}>
        <Container style={{paddingLeft:"420px",paddingTop:"70px"}}>
            <Card varient="outlined" style={{backgroundColor:"White",padding:"40px",width:"280px",height:"500px",textAlign:"center"}}>
            <h2>SIGNUP</h2>
                <div style={{colour:"black",textAlign:"center"}}>
                {/* <h2>Letschat</h2> */}
                <TextField fullwidth label="Email or Mobile Number" placeholder="Mobile Number or Email" style={{marginBottom:"10px",width:"220px"}}>Email</TextField>
                <TextField fullwidth label="FullName" placeholder="Full Name" style={{marginBottom:"10px",width:"220px"}}>Name</TextField>
                <TextField fullwidth label="User Name" placeholder="User Name" style={{marginBottom:"20px",width:"220px"}}>UserName</TextField>
                <TextField fullwidth label="Password" type="password" placeholder="Password" style={{marginBottom:"10px",width:"220px"}}>Password</TextField>
                <br/>
                <br/>
                <font size='-1' style={{opacity:'0.9'}}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</font>
                <br/>
                <br/>
                <Button variant="contained" style={{width:"220px",borderRadius:"10px",color:"white",backgroundColor:"lightgrey"}}>Sign up</Button>
                </div>
            </Card>
                <br/>
            <Card style={{width:"360px",textAlign:"center"}}>
                <p>Have an account?Log in</p> 
            </Card>
        </Container>
    </div>
  )
}
