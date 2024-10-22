import { motion } from "framer-motion";
import { useState } from 'react';
import LocalTime from "./components/Footer.jsx";
import Preview from "./components/Preview.jsx"
import Preview_alternative from "./components/Preview_alternative.jsx";
import './css/App.css';
import { inject } from '@vercel/analytics';


export function App() {
    inject();

  return (
    <>
      <br></br>
      <div className="app-wrapper">
      <div className="app-container">
      <h1 className="title-text">Hi, My Name Is Zelong</h1>
      <h2 className="title-text">I like pretty things</h2>
      
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
