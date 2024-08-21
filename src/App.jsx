import { motion } from "framer-motion";
import { useState } from 'react';
import Header from './Header.jsx';
import LocalTime from "./LocalTime.jsx";
import Preview from "./Preview.jsx"
import Preview_alternative from "./Preview_alternative.jsx";
import './App.css';


export function App() {


  return (
    <>

      <Header>
      </Header>
      <br></br>
      <h1>Hi, My Name Is Zelong</h1>
      <p className="read-the-docs">
        Project Gallery
      </p>

      <Preview></Preview>

    <div className="foooter">
      <LocalTime>
      </LocalTime>

      <p className="read-the-docs-fine">
        Zelong Li ©️
      </p>

      </div>
    </>
  );
}


export function N(){
  return (
    <>

      <Header>
      </Header>
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

