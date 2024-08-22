import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import './css/Modal.css';
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8 } from './Project.jsx';

function Modal({ selectedProject, onClose, darkMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref, // Attach scroll to modal content
  });

  if (!selectedProject) return null;

  // Function to dynamically select the project component based on ID
  const renderProjectComponent = (id) => {
    switch (id) {
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      case 3:
        return <Project3 />;
      case 4:
        return <Project4 />;
      case 5:
        return <Project5 />;
      case 6:
        return <Project6 />;
      case 7:
        return <Project7 />;
      case 8:
        return <Project8 />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div 
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}  // Prevents closing the modal when clicking inside it
          ref={ref} // Attach the ref here
        >
          <button className="close-button" onClick={onClose}>X</button>
          <h1>{selectedProject.title}</h1>
          <div className='image-wrapper'>
            <img className='thumbnails' src={selectedProject.imgURL} alt={selectedProject.title} />
          </div>

          {/* Dynamically render the correct project component */}
          {renderProjectComponent(selectedProject.id)}

          {/* Progress bar indicating scroll progress */}
          <motion.div style={{ scaleX: scrollYProgress, height: '4px', backgroundColor: darkMode ? '#fff' : '#000' }} />
        </motion.div>
      </motion.div>

    </>
  );
}

export default Modal;
