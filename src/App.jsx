import { motion } from "framer-motion";
import { useState } from 'react';
import LocalTime from "./components/Footer.jsx";
import Preview from "./components/Preview.jsx"
import Preview_alternative from "./components/Preview_alternative.jsx";
import './css/App.css';


export function App() {


  return (
    <>

      
      <br></br>
      <h1 className="title-text">Hi, My Name Is Zelong</h1>
      <p className="read-the-docs">
        Project Gallery
      </p>

      <Preview></Preview>
    </>
  );
}


export function N(){
  return (
    <>
      <br></br>
      <p className="read-the-docs">
        Project Gallery
      </p>
      

      <h1>
        THIS IS 
      </h1>
    </>
  );
}

