import { motion } from "framer-motion";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <>
        <Header/>
    <div className="title-container">
      <h1 className="title">Zelong Li</h1>
    </div>



      {/* <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  );
}

export default App;
