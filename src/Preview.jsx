import { motion} from "framer-motion";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preview.css'

function Preview() {
const navigate = useNavigate();
  // State to manage projects
  const [exitAnimation, setExitAnimation] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1', imgURL:'./public/thumbnails/6.png', path:'project-1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imgURL:'./public/thumbnails/3.png', path:'project-2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', imgURL:'./public/thumbnails/hand.png', path:'project-3'  },
    { id: 4, title: 'Project 4', description: 'Description of Project 4', imgURL:'./public/thumbnails/6.png', path:'project-4' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', imgURL:'./public/thumbnails/6.png', },
    { id: 6, title: 'Project 6', description: 'Description of Project 6', imgURL:'./public/thumbnails/6.png',},
    { id: 7, title: 'Project 7', description: 'Description of Project 7', imgURL:'./public/thumbnails/6.png', },
    { id: 8, title: 'Project 8', description: 'Description of Project 8', imgURL:'./public/thumbnails/6.png',},
  ]);

  // Animation variants
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
        duration: 0.3, // Duration of each item’s animation
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
      }, 500); 
  };

  return (
    <>
      {/* <p className="read-the-docs">
        Preview
      </p> */}
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
