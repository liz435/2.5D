import React from 'react';
import { motion } from 'framer-motion';
import './css/Contact.css';

function Contact() {

    const copyEmailToClipboard = () => {
        const email = 'aloisliz14@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy emaila:', err);
        });
    };

    const openExternalLink = () => {
        const url = 'https://linkedin.com/in/lizeelong';
        window.open(url, '_blank'); // Open the link in a new tab
    };

    const floatAnimation = {
        y: [0, -10, 0], 
        transition: {
            duration: 3, 
            ease: "easeInOut",
            repeat: Infinity, 
            repeatType: "loop",
        },
    };

    const floatAnimation2 = {
        y: [0, -10, 0],
        transition: {
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity, 
            repeatType: "loop",
        },
    };

    const initAnimation = {
        hidden: { opacity: 0, y: 20, rotate: -6 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            filter: "grayscale(100%)",
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };
    

    return (
        <>
        <div className='divider'/>
        <h1 className='title-text'>Contact Me</h1>
        <div className='divider'/>
        <div className='contact-container'>
            <motion.div
                className='contact-box'
                onClick={copyEmailToClipboard}
                initial={initAnimation}
                animate={floatAnimation}
               
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <h1 className='contact-title'>Contact Me</h1>
                <div className='divider'/>
                <div className='contact-text'>
                <p className='contact-text'>Reach out via email</p>
                <p className='contact-text'> aloisliz14@gmail.com</p>
                </div>
            </motion.div>

            <motion.div
                className='contact-box'
                animate={initAnimation}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <h1 className='contact-title'>Find Me</h1>
                <div className='divider'/>
                <div className='divider'/>
                <div className='contact-text'>
                <p className='contact-text'>Anywhere in Brooklyn</p>
                <p className='contact-text'>Possibly bouldering </p>
                </div>
            </motion.div>

            <motion.div
                className='contact-box'
                onClick={openExternalLink}
                initial="hidden"
                animate={floatAnimation2}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <h1 className='contact-title'>Social Media</h1>
                <div className='divider'/>
                <div >
                <p className='contact-text'>Linekdin</p>
                <p className='contact-text'> linkedin.com/in/lizeelong</p>
                </div>
            </motion.div>
        </div>
        </>
    );
}

export default Contact;
