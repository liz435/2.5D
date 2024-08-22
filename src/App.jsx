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
      <div className="app-wrapper">
      <div className="app-container">
      <h1 className="title-text">Hi, My Name Is Zelong</h1>
      <h2 className="title-text">I Work With Technology and try to make it poetic and pretty</h2>
      </div>
      </div>
      <div className="divider"/>
      <p className="read-the-docs">
        Project Gallery
      </p>
      <Preview></Preview>
    </>
  );
}
