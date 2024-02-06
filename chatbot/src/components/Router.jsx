import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Profile from './Profile';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}>Login</Route>
        <Route path='sign' element={<Signup/>}>signup</Route>
        <Route path='home' element={<Home/>}>home</Route>
        <Route path='home/profile' element={<Profile/>}>profile</Route>
    </Routes>
    </BrowserRouter>
)}
