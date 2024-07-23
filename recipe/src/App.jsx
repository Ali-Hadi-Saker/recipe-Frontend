import React from "react";
import './styles/index.css'
import './styles/colors.css'
import './styles/utilities.css'
import Login from './pages/login';
import HomePage from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import FavoritePage from "./pages/favorite-page";


function App() {


  return (
    <div className="container">
      {/* <HomePage /> */}
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

  


export default App;
