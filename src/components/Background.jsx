import { useEffect, useState } from "react";
import '../css/App.css'; // Ensure you import your CSS file

export default function Background() {
  const numRows = 50;
  const numCols = 50;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const dots = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      dots.push({ row, col });
    }
  }

  return (
    <div className="background-container">
      <div className="grid-dots">
        {dots.map((dot, index) => (
          <div key={index} className="dot-container">
            <div className="dot-hitbox"></div>
            <div
              className="dot-inner"
              style={{
                animationDelay: `${index * 0.001}s`, // Staggered animation delay
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}