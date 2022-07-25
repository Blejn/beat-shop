import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import React,{useState} from 'react';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
    const [state, setState] = useState('');

  const onSearch = (text) =>{
    setState(text)
  }
  return (
    <div className="App">
      <Router>
        <Header onSearch ={onSearch}/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact  path="/" element={<Home state={state} />}/>    
        <Route  path="/checkout" element={<Checkout />}/>  
        
        </Routes>

      </Router>

 
    </div>
  );
}

export default App;
