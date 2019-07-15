import React from 'react';
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <header className="App-header">
        <h1> Welcome to Acquirey! </h1>
         <p> Create, browse, and track the performance of your next business venture. </p>
         <Link to='/Companies' className="btn btn-primary">
            Get Started
         </Link>
      </header>
    </div>
  );
}

export default Welcome;
