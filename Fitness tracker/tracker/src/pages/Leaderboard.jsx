import React from 'react'
import { useState } from 'react'
import Table from '../components/Table';
import { Names } from '../components/names';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const[query,setQuery] = useState("");
  const{name}=query;
  const keys=["name"];
  const search=(data)=>{
    return data.filter((item)=>
    keys.some((key)=>item[key].toLowerCase().includes(query)));
  }
  return (
    <div className='leaderboard' style={{padding:"10px"}}>
      <Link to="/home"><img src="left-arrow.png" alt="" style={{height:"25px"}}/></Link>
        <div className='listnames'>
          <div style={{display:"flex",justifyContent:"center"}}><img src="./podium (1).png" alt="" /></div>
          <div className="inputt">
              <input className='search' placeholder='search' onChange={(e)=>setQuery(e.target.value.toLowerCase())} /></div>
            {<Table data={search(Names)}/>}
        </div>
    </div>
  )
}
