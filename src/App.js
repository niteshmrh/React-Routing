import { Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Header from "./Routeing/Header";
import Home from "./Routeing/Home";
import About from "./Routeing/About";
import Details from "./Routeing/Details";
import Contact from "./Routeing/Contact";
import Notfound from "./Routeing/Notfound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
