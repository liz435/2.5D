import React, {useState} from 'react'
import {delay, motion} from 'framer-motion'
import './Header.css'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './Home/Home';
import CV from './CV/CV';
// import {Projects1, Project2} from '../public/Projects/Project.jsx'

function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
    };


    return(
        <header className='header'>
        <div className="extra-word">
        <a className="nav-link">Zelong Li</a>

      </div>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link href='#home' className='nav-link'>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#cv" className="nav-link">CV</Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#projects" className="nav-link">Projects</Link>
                    </li>
                </ul>
                <motion.div
          className="switch"
          onClick={toggleDarkMode}
   
          initial={{ backgroundColor: isDarkMode ? '#333' : '#ccc' }}
          animate={{ backgroundColor: isDarkMode ? '#333' : '#ccc' }}
        >
          <motion.div
            className="handle"
            layout
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            transition={{ type: 'spring', stiffness: 1200, damping: 200 }}
            style={{ backgroundColor: isDarkMode ? '#fff' : '#000' }}
            animate={{
                x: isDarkMode ? 40 : 0,
            }}
          />
        </motion.div>
            </nav>
        {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects1 />} />
        </Routes> */}
        </header>
    )
};

export default Header;