import { motion} from "framer-motion";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preview.css'
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
    const imagesToPreload = [
        './thumbnails/6.png',
        './thumbnails/3.png',
        './thumbnails/hand.png',
      ];
    
      usePreloadImages(imagesToPreload);
const navigate = useNavigate();
  const [exitAnimation, setExitAnimation] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1', imgURL:'./thumbnails/6.png', path:'project-1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imgURL:'./thumbnails/3.png', path:'project-2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', imgURL:'./thumbnails/hand.png', path:'project-3'  },
    { id: 4, title: 'Project 4', description: 'Description of Project 4', imgURL:'./thumbnails/6.png', path:'project-4' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', imgURL:'./thumbnails/6.png', },
    { id: 6, title: 'Project 6', description: 'Description of Project 6', imgURL:'./thumbnails/6.png',},
    { id: 7, title: 'Project 7', description: 'Description of Project 7', imgURL:'./thumbnails/6.png', },
    { id: 8, title: 'Project 8', description: 'Description of Project 8', imgURL:'./thumbnails/6.png',},
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

  const handleRedirect = (path) => {
    setExitAnimation(true);
    setTimeout(() => {
        navigate(path);
      }, 800); 
  };

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
            whileHover={{ filter: "grayscale(0%)", scale:1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRedirect(project.path)}
          >
            <img src={project.imgURL} alt={project.imgURL} className="project-image" />
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Preview;
