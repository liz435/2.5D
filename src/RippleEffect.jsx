import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const RippleEffect = ({ darkMode }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let ripples = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current);
        p.noFill();
        p.frameRate(60);
      };

      p.draw = () => {
        p.clear();
        p.background(darkMode ? 30 : 255);  // Dark mode or light mode background

        for (let i = ripples.length - 1; i >= 0; i--) {
          let ripple = ripples[i];
          ripple.update();
          ripple.display();

          if (ripple.isFinished()) {
            ripples.splice(i, 1); // Remove ripple when it's finished
          }
        }
      };

      p.mousePressed = () => {
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          ripples.push(new Ripple(p.mouseX, p.mouseY));
        }
      };

      class Ripple {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.radius = 0;
          this.maxRadius = Math.random() * 200 + 100; // Larger ripples with more variability
          this.growthRate = 2 + Math.random() * 2; // Vary the growth rate slightly
          this.lifespan = 255;
          this.fadeRate = 1.5; // Adjusted fade rate for smoother fading
        }

        update() {
          this.radius += this.growthRate;
          this.lifespan -= this.fadeRate;
        }

        display() {
          const strokeColor = darkMode ? 255 : 0;  // White lines in dark mode, black in light mode
          p.strokeWeight(2);
          p.stroke(strokeColor, this.lifespan);
          p.ellipse(this.x, this.y, this.radius * 2);

          // Create multiple concentric ripples for more fidelity
          for (let i = 0; i < 3; i++) {
            let offsetRadius = this.radius - i * 20;
            if (offsetRadius > 0) {
              p.stroke(strokeColor, this.lifespan - i * 50);
              p.ellipse(this.x, this.y, offsetRadius * 2);
            }
          }
        }

        isFinished() {
          return this.lifespan <= 0 || this.radius > this.maxRadius;
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, [darkMode]);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default RippleEffect;
