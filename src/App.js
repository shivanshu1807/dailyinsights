import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css'
function App() {
  return (
    <Router>

    
          <Navbar />
          <div className="contain">
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/signup" element={<Signup/>} className=""></Route>
            <Route exact path="/login" element={<Login/>} className=""></Route>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
