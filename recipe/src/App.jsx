import { useState, useEffect } from 'react';
import './styles/index.css'
import './styles/colors.css'
import './styles/utilities.css'
import Card from './components/card';

import Navbar from './components/navbar';

function App() {


  return (
    <div className="container">
      {/* <Navbar/> */}
      <Card/>
    </div>
);
}

  


export default App;
