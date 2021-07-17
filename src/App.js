import React from 'react'
import {HashRouter as Router,Switch , Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Product from './components/Pages/Product';
import Services from './components/Pages/Services';
import Signup from './components/Pages/Signup';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Product} />
          <Route path='/sign-up' exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
