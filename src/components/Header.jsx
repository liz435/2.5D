import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import Linkedin from '../assets/linkedin.svg';

function Header() {
  const { darkMode, toggleDarkMode, setDarkMode } = useDarkMode(); // Add setDarkMode to control the initial state
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsFirstRender(false);
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (savedDarkMode) {
      // Delay applying dark mode for effect
      setTimeout(() => {
        setDarkMode(true);
        document.body.classList.add('dark-mode');
      }, 500); // Adjust delay as needed
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', darkMode); // Save preference to localStorage
    }
  }, [darkMode, isFirstRender]);

  return (
    <header className={`header ${darkMode ? '' : 'dark-mode'}`}>
      <div className="extra-word">
        <h3>
          <a className="nav-link">Zelong Li</a>
        </h3>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Newsletter" className="nav-link">Newsletter</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <motion.div
          className="switch"
          onClick={toggleDarkMode}
          initial={{ backgroundColor: darkMode ? '#333' : '#ccc' }}
          animate={{ backgroundColor: darkMode ? '#333' : '#ccc' }}
        >
          <motion.div
            className="handle"
            layout
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 1200, damping: 200 }}
            animate={{ x: darkMode ? 40 : 0 }}
          />
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
