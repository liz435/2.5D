import React from "react";
import Sketch from "react-p5";

const NewsletterWeavingEffect = () => {
  const letters = "NEWSLETTER";
  const letterSpacing = 40;
  const yOffset = 60;
  const weaveOffset = 20;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight/2).parent(canvasParentRef);
    p5.textSize(50);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };

  const draw = (p5) => {
      p5.background(255, 255, 255, 0); 
    

    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        let x =
          p5.width / 2 +
          (j - letters.length / 2) * letterSpacing +
          p5.sin(p5.frameCount * 0.02 + i * 0.5 + j * 0.3) * weaveOffset +
          p5.map(p5.mouseX, 0, p5.width, -20, 20);
        let y =
          p5.height / 4 +
          i * yOffset +
          p5.sin(p5.frameCount * 0.02 + i * 0.5) * 10 +
          p5.map(p5.mouseY, 0, p5.height, -10, 10);

        // Subtle grayscale transition within range 50 to 205
        let colorValue = p5.map(
          p5.sin(p5.frameCount * 0.02 + i * 0.2 + j * 0.2),
          -1,
          1,
          50,
          205
        );

        p5.fill(colorValue); 

        p5.text(letters[j], x, y);
      }
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default NewsletterWeavingEffect;
