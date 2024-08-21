import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {App, N} from './App.jsx'
import{Project1,Project2,Project3,Project4, Project5, Project6, Project7, Project8} from '../public/Projects/Project.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="project-1" element={<Project1/>} />
      <Route path="project-2" element={<Project2/>} />
      <Route path="project-3" element={<Project3/>} />
      <Route path="project-4" element={<Project4/>} />
      <Route path="project-3" element={<Project5/>} />
      <Route path="project-4" element={<Project6/>} />
      <Route path="project-3" element={<Project7/>} />
      <Route path="project-4" element={<Project8/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
