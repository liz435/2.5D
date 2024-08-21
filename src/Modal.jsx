import { motion } from 'framer-motion';
import './css/Modal.css';
import{Project1,Project2,Project3,Project4, Project5, Project6, Project7, Project8} from './Project.jsx'

function Modal({ selectedProject, onClose, darkMode }) {
  if (!selectedProject) return null;

  return (
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
      >
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{selectedProject.title}</h2>
        <p>{selectedProject.description}</p>
        <div className='image-wrapper'>
        <img className='thumbnails' src={selectedProject.imgURL} alt={selectedProject.title} />
        </div>

        <Project1></Project1>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
