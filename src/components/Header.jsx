import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';

function Header() {
  const { darkMode, toggleDarkMode, setDarkMode } = useDarkMode(); 
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    // Get the initial dark mode state from localStorage, defaulting to false if not set
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Update state and localStorage
    setDarkMode(savedDarkMode);
    localStorage.setItem('darkMode', savedDarkMode);
    
    // Update DOM
    document.body.classList.toggle('dark-mode', savedDarkMode);
  
    // Set up the watcher for future changes
    const updateDarkMode = (isDark) => {
      document.body.classList.toggle('dark-mode', isDark);
      localStorage.setItem('darkMode', isDark);
    };
  
    // Create a cleanup function that removes event listeners if needed
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);
  
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
          animate={{ backgroundColor: darkMode ? '#333' : '#ccc' }}
        >
          <motion.div
            className="handle"
            layout
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 1200, damping: 200 }}
            animate={{ x: darkMode ? 30 : 0 }}
          />
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
