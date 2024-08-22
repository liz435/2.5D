import React from 'react';
import { motion } from 'framer-motion';
import './css/Contact.css';

function Contact() {

    const copyEmailToClipboard = () => {
        const email = 'aloisliz14@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    };

    const openExternalLink = () => {
        const url = 'https://linkedin.com/in/lizeelong';
        window.open(url, '_blank'); // Open the link in a new tab
    };

    return (
        <>
        <div className='divider'/>
        <div className='divider'/>
        <div className='contact-container'>
            <motion.div
                className='contact-box'
                onClick={copyEmailToClipboard}
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
