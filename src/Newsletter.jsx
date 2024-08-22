import React, { useState } from 'react';
import {motion} from 'framer-motion'
import './css/Newsletter.css';
import NewsletterWeavingEffect from './NewletterEffect';
import { useDarkMode } from './DarkModeContext';

function Newsletter() {
    const [email, setEmail] = useState('');
    const { darkMode } = useDarkMode();

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <>
        <div className={`news-container ${darkMode ? 'dark-mode' : ''}`}></div>
            <div className='news-container'>
                <div className='news-wrapper'>
                    <h1 className='newsletter-title'>Newsletter</h1>

                    <h2 className='newsletter-text'>
                        Stay informed on Art and Technology has never been so entertaining.
                        Delivered not guaranteed on Thursday, for free :)
                    </h2>
                </div>

                {/* <NewsletterWeavingEffect /> */}

                <div className='divider'/>
        

       
                <form onSubmit={handleFormSubmit}>
                    <input
                        type='email'
                        className='newsletter-input'
                        placeholder='Enter your email'
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                    {/* <button type='submit' className='newsletter-button'>
                        Sign Up
                    </button> */}
     <motion.button
    type='submit' 
    className='newsletter-button'
    initial={{
        opacity: 0,                   
    }}
    animate={{
        opacity: 1,          
        scale: 1.2,
        rotate: 10,                
        transition: {
            type: 'spring',  
            stiffness: 300,  
            damping: 20,  

        }
    }}
    whileHover={{
        scale: 1.2,
        rotate: 0,  
        transition: {
            type: 'spring',  
            stiffness: 300,  
            damping: 15,   
        }
    }}
>
    Sign Up
</motion.button>

                </form>
            </div>
        </>
    );
}

export default Newsletter;
