import { motion } from "framer-motion";
import { useState } from 'react';
import Header from './Header.jsx';
import LocalTime from "./LocalTime.jsx";
import Preview from "./Preview.jsx"
import './App.css';

function App() {


  return (
    <>
      <Header>
      </Header>

      
      <br></br>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Preview></Preview>

    <div className="container">
      <LocalTime>
      </LocalTime>
      </div>

    </>
  );
}

export default App;
