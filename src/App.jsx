import { motion } from "framer-motion";
import { useState } from 'react';
import LocalTime from "./Footer.jsx";
import Preview from "./Preview.jsx"
import Preview_alternative from "./Preview_alternative.jsx";
import './App.css';


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

