import React from 'react'
import { Container ,Card, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Forget() {
  return (
    <div style={{backgroundColor:"purple",height:"100vh"}}>
        <Container style={{paddingLeft:"400px",paddingTop:"150px"}}>
            <Card varient="outlined" style={{backgroundColor:"White",padding:"40px",width:"330px",height:"400px",textAlign:"center"}}>
                <div><img src='./mainlogo1.jpg' alt='logo' style={{height:"130px"}}></img></div>
                <div style={{colour:"black",textAlign:"center"}}>
                <TextField fullwidth type="required" label="Old password" placeholder="Old password" style={{marginBottom:"10px",width:"320px"}}>Old Password</TextField>
                <TextField fullwidth label="New password" type="password" placeholder="New password" style={{marginBottom:"20px",width:"320px"}}>New Password</TextField>
                <br/>
                <br/>
                <Link to='/'><Button variant="contained" style={{width:"150px",borderRadius:"10px",fontSize:"10px",color:"white",backgroundColor:"purple"}}>Change Password</Button></Link>
                </div>
            </Card>
        </Container>
    </div>
  )
}
