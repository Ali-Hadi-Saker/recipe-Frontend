import { useState, useEffect } from 'react';
import './styles/index.css'
import './styles/colors.css'
import './styles/utilities.css'

import LandingPage from './pages/landing-page';
import Login from './pages/login';

function App() {


  return (
    <div className="container">
      {/* <LandingPage/>       */}
      <Login/>
    </div>
);
}

  


export default App;
