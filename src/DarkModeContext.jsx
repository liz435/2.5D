import { useState, useEffect, useContext, createContext } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode based on localStorage or default to true
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    console
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export default DarkModeContext