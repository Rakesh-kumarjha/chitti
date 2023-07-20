import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import { Routes,Route } from 'react-router-dom';
import Lb_popup from './Admin/Lb_popup';
import Admin from './Table/Admin'
import Table from "./Table/Table"
import Profile from './Admin/profile';


function App() {
  return (
   
     <Routes>
    <Route path='/' element={<Home/>}/>
   
    <Route path='/Admin' element={< Admin/>}/>
    <Route path='/Table' element={< Table/>}/>
    <Route path='/profile' element={<Profile />} />
  </Routes>
   
  );
}

export default App;
