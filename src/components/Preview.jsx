import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import Modal from "../Modal";
import '../css/Preview.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import DarkModeContext from '../DarkModeContext';

// Moved outside component to avoid recreation on each render
const projects = [
  { id: 1, title: '"23"', description: 'Description of Project 1', imgURL: './thumbnails/23.webp', path: 'project-1' },
  { id: 2, title: 'The Waiting Room', description: 'Description of Project 2', imgURL: './thumbnails/3.webp', path: 'project-2' },
  { id: 3, title: '3D Renders', description: 'Description of Project 3', imgURL: './thumbnails/Cola3.webp', path: 'project-3' },
  { id: 4, title: 'Erasure', description: 'Description of Project 4', imgURL: './thumbnails/4.webp', path: 'project-4' },
  { id: 5, title: 'Siphonophrae', description: 'Description of Project 5', imgURL: './thumbnails/c.webp', path: 'project-5' },
  { id: 6, title: 'Sound Wave', description: 'Description of Project 6', imgURL: './thumbnails/hand.webp', path: 'project-6' },
  { id: 7, title: 'MetaEternity', description: 'Description of Project 7', imgURL: './thumbnails/1.webp', path: 'project-7' },
  { id: 8, title: 'Coming Soon!', description: 'Description of Project 8', imgURL: './thumbnails/part1.webp', path: 'project-8' },
];

const imagesToPreload = [
  './thumbnails/3.webp',
  './thumbnails/hand.webp',
];

// Optimized image preloader
const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    const preloadImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });
    return () => {
      preloadImages.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);
};

// Memoized Project Item component
const ProjectItem = ({ project, onClick }) => {
  const itemStyle = useMemo(() => ({
    cursor: 'pointer',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease, transform 0.3s ease'
  }), []);

  return (
    <div 
      className="display-project"
      style={itemStyle}
      onClick={() => onClick(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'grayscale(0%)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'grayscale(100%)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div className="image-wrapper">
        <img 
          src={project.imgURL} 
          alt={project.title}
          className="project-image" 
          loading="lazy"
        />
      </div>
    </div>
  );
};

function Preview() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useContext(DarkModeContext);

  usePreloadImages(imagesToPreload);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Handle body overflow
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  // Single motion container for initial animation
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }} />
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Modal 
            selectedProject={selectedProject} 
            onClose={handleClose} 
            darkMode={darkMode} 
          />
        )}
      </AnimatePresence>

      <SpeedInsights />
    </>
  );
}

export default Preview;