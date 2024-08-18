import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import "./Preview.css";

function Preview() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const createDivHoverEffect = (index) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [0, 300], [30, -30]);
    const rotateY = useTransform(mouseX, [0, 300], [-30, 30]);

    return {
      mouseX,
      mouseY,
      rotateX,
      rotateY,
      onHoverStart: () => setHoveredDiv(index),
      onHoverEnd: () => setHoveredDiv(null),
      onPointerMove: (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      },
    };
  };

  return (
    <div className="container">
      {[1, 2, 3].map((item, index) => {
        const {
          mouseX,
          mouseY,
          rotateX,
          rotateY,
          onHoverStart,
          onHoverEnd,
          onPointerMove,
        } = createDivHoverEffect(index);

        return (
          <motion.div
            key={index}
            className="display-project"
            style={{
              rotateX: hoveredDiv === index ? rotateX : 0,
              rotateY: hoveredDiv === index ? rotateY : 0,
            }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            onPointerMove={onPointerMove}
            initial={{ scale: 1 }}
            animate={{ scale: hoveredDiv === index ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={`path/to/project${item}.jpg`}
              alt={`Project ${item}`}
              className="project-image"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Preview;
