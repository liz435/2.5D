import { motion, useInView} from "framer-motion";
import { useState, useRef } from 'react';
import './Preview.css'

function Preview_alternative() {
  // State to manage projects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1', imgURL:'./Projects/1.png' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imgURL:'./Projects/2.png' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', imgURL:'./Projects/6.png' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4', imgURL:'./Projects/1.png' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', imgURL:'./Projects/2.png' },
    { id: 6, title: 'Project 6', description: 'Description of Project 6', imgURL:'./Projects/6.png' },
    { id: 7, title: 'Project 7', description: 'Description of Project 7', imgURL:'./Projects/1.png' },
    { id: 8, title: 'Project 8', description: 'Description of Project 8', imgURL:'./Projects/2.png' },
    { id: 9, title: 'Project 9', description: 'Description of Project 9', imgURL:'./Projects/6.png' },
  ]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <p className="read-the-docs">
        Preview
      </p>
      <motion.div className="container">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} variants={itemVariants} />
        ))}
      </motion.div>
    </>
  );

  function ProjectItem({ project, variants }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  
    return (
      <motion.div
        ref={ref}
        className="display-project"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        <img src={project.imgURL} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </motion.div>
    );
  }
}

export default Preview_alternative;
