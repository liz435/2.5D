import { motion, AnimatePresence} from "framer-motion";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "../Modal";
import '../css/Preview.css'
import { SpeedInsights } from '@vercel/speed-insights/react';
import DarkModeContext from '../DarkModeContext' 
// import RippleEffect from './RippleEffect';

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };
  
  const usePreloadImages = (imageUrls) => {
    useEffect(() => {
      imageUrls.forEach(preloadImage);
    }, [imageUrls]);
  };

function Preview() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useContext(DarkModeContext);

    const imagesToPreload = [
        './thumbnails/6.png',
        './thumbnails/3.png',
        './thumbnails/hand.png',
      ];
    
      usePreloadImages(imagesToPreload);
const navigate = useNavigate();
  const [exitAnimation, setExitAnimation] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, title: '"23"', description: 'Description of Project 1', imgURL:'./thumbnails/23.png', path:'project-1' },
    { id: 2, title: 'The Waiting Room', description: 'Description of Project 2', imgURL:'./thumbnails/3.png', path:'project-2' },
    { id: 3, title: '3D Renders', description: 'Description of Project 3', imgURL:'./thumbnails/Cola3.jpg', path:'project-3'  },
    { id: 4, title: 'Erasure', description: 'Description of Project 4', imgURL:'./thumbnails/4.png', path:'project-4' },
    { id: 5, title: 'Siphonophrae', description: 'Description of Project 5', imgURL:'./thumbnails/c.png',path:'project-5' },
    { id: 6, title: 'Sound Wave', description: 'Description of Project 6', imgURL:'./thumbnails/hand.png',path:'project-6'},
    { id: 7, title: 'MetaEternity', description: 'Description of Project 7', imgURL:'./thumbnails/1.JPG', path:'project-7'},
    { id: 8, title: 'Coming Soon!', description: 'Description of Project 8', imgURL:'./thumbnails/part1.png',path:'project-8'},
  ]);


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "grayscale(100%)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 10,
    },
},
  };


  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';  // Cleanup in case of unmount
    };
  }, [selectedProject]);



  return (
    <>

     <div style={{ position: 'relative', overflow: 'hidden' }}></div>
      {/* <RippleEffect darkMode={darkMode} /> */}
      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"

        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="display-project"
            variants={itemVariants}
            // initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)",saturat:200, scale:1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="image-wrapper">
            <img src={project.imgURL} alt={project.imgURL} className="project-image" />
            </div>
            {/* <h3>{project.title}</h3> */}
            {/* <p>{project.description}</p> */}
          </motion.div>
        ))}
      </motion.div>


      <AnimatePresence>
        {selectedProject && (
          <Modal selectedProject={selectedProject} onClose={handleClose} darkMode={darkMode} />
        )}
      </AnimatePresence>

      <SpeedInsights/>
    </>
  );
}

export default Preview;
