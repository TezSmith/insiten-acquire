import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/HomeContainer'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/' component={Welcome}/>
      <Home/>
    </div>
  );
}

export default withRouter(App)
