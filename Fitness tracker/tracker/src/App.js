import FloatingWindow from "./components/FloatingWindow";
import Homecontents from "./components/Homecontents";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Leaderboard/> */}
      {/* <Home/> */}
      {/* <FloatingWindow/> */}
      {/* <Table/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/leader' element={<Leaderboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
