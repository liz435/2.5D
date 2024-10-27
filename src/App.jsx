import Preview from "./components/Preview.jsx"
import './css/App.css';
import { inject } from '@vercel/analytics';
import Background from "./components/Background.jsx";


export function App() {
    inject();

    
  return (
    <>
      <br></br>
      <div className="app-wrapper">
      <div className="app-container">
      <h1 className="title-text">Hi, My Name Is Zelong</h1>
      <h2 className="title-text">I am Frontend Engineer</h2>
      <h2 className="title-text">I like simple pretty things</h2>
      
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
