import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='register' element={<Register/>}/>
        <Route exact  path="/" element={<Home />}/>    
        <Route  path="/checkout" element={<Checkout />}/>  
        
        </Routes>

      </Router>

 
    </div>
  );
}

export default App;
