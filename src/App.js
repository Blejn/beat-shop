import './App.css'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/checkout">
            <Header/>
            <Checkout/>

          </Route>

          <Route path="/">

            <Header/>
            <Home/>

          </Route>
        </Switch>

      </Router>
 <Header/>
 <Home/>
    </div>
  );
}

export default App;
