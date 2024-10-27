import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {App} from './App.jsx'
import { DarkModeProvider } from './DarkModeContext.jsx'
import Newsletter from './Newsletter.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Contact from './Contact.jsx'
import Background from './components/Background.jsx'
import './css/index.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <DarkModeProvider>
    <BrowserRouter>

    <Header/>
    <Background/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Newsletter" element={<Newsletter/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>

    <Footer/>
    </DarkModeProvider>

  // </StrictMode>,
)
